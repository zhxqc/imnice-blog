<template>
  <article class="article-page" :class="{ 'large-text': largeText }">
    <div class="reading-progress" :style="{ width: `${readingProgress}%` }" aria-hidden="true"></div>

    <div class="article-shell">
      <NuxtLink to="/ai-daily" class="back-link">← 返回智能日报</NuxtLink>

      <header class="article-header">
        <p v-if="page.date || page.meta?.date" class="article-date">{{ formatDate(page.date || page.meta?.date) }} / ISSUE {{ issueNumber }}</p>
        <h1>{{ page.title }}</h1>
        <p v-if="page.description" class="article-description">{{ page.description }}</p>
        <div class="article-meta">
          <span>作者：恒言Tech</span>
          <span>阅读时间：约 {{ readMinutes }} 分钟</span>
          <span>来源：文内逐项标注</span>
        </div>
        <div class="article-actions">
          <button type="button" class="ui-button" @click="copyArticleLink">{{ copyLabel }}</button>
          <button type="button" class="ui-button secondary" @click="largeText = !largeText">{{ largeText ? '恢复正文' : '增大正文' }}</button>
        </div>
      </header>

      <div class="article-grid">
        <nav v-if="tocItems.length" class="article-toc" aria-label="文章目录">
          <h2>本文目录</h2>
          <a
            v-for="item in tocItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="{ active: activeHeading === item.id }"
            @click="scrollToHeading($event, item.id)"
          >{{ item.text }}</a>
        </nav>

        <div ref="articleBody" class="article-body">
          <ContentRenderer :value="page" />
        </div>
      </div>

      <nav v-if="olderDaily || newerDaily" class="article-next" aria-label="相邻日报">
        <NuxtLink v-if="olderDaily" :to="olderDaily.path" class="next-link">
          <small>← 上一期</small><strong>{{ olderDaily.title }}</strong>
        </NuxtLink>
        <span v-else></span>
        <NuxtLink v-if="newerDaily" :to="newerDaily.path" class="next-link next-link-right">
          <small>下一期 →</small><strong>{{ newerDaily.title }}</strong>
        </NuxtLink>
      </nav>
    </div>
  </article>
</template>

<script setup>
const route = useRoute()
const articleBody = ref(null)
const tocItems = ref([])
const activeHeading = ref('')
const readingProgress = ref(0)
const largeText = ref(false)
const copyState = ref('idle')
let headingObserver
let progressFrame
let copyTimer

const { data: page } = await useAsyncData(`page-${route.path}`, () => queryCollection('content').path(route.path).first())
const { data: allPages } = await useAsyncData('article-daily-navigation', () => queryCollection('content').all())

if (!page.value) throw createError({ statusCode: 404, statusMessage: '页面不存在' })

const dailies = computed(() =>
  (allPages.value || [])
    .filter((item) => item.path.startsWith('/ai-daily/') && (item.date || item.meta?.date))
    .sort((a, b) => new Date(b.date || b.meta?.date) - new Date(a.date || a.meta?.date))
)
const currentIndex = computed(() => dailies.value.findIndex((item) => item.path === route.path))
const newerDaily = computed(() => currentIndex.value > 0 ? dailies.value[currentIndex.value - 1] : null)
const olderDaily = computed(() => currentIndex.value >= 0 ? dailies.value[currentIndex.value + 1] || null : null)

const readMinutes = computed(() => Math.max(4, Math.round(JSON.stringify(page.value.body || '').length / 1400)))
const issueNumber = computed(() => String(new Date(page.value.date || page.value.meta?.date || Date.now()).getDate()).padStart(3, '0'))
const copyLabel = computed(() => copyState.value === 'copied' ? '链接已复制' : copyState.value === 'error' ? '复制失败' : '复制文章链接')

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '.')
}

const copyArticleLink = async () => {
  clearTimeout(copyTimer)
  try {
    await navigator.clipboard.writeText(window.location.href.split('#')[0])
    copyState.value = 'copied'
  } catch {
    copyState.value = 'error'
  }
  copyTimer = window.setTimeout(() => { copyState.value = 'idle' }, 1800)
}

const scrollToHeading = (event, id) => {
  event.preventDefault()
  const heading = document.getElementById(id)
  if (!heading) return
  history.replaceState(null, '', `#${id}`)
  heading.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

const updateProgress = () => {
  if (progressFrame) return
  progressFrame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    readingProgress.value = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
    progressFrame = null
  })
}

onMounted(async () => {
  await nextTick()
  const headings = [...articleBody.value.querySelectorAll('h2')]
  tocItems.value = headings.map((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`
    return { id: heading.id, text: heading.textContent.trim() }
  })
  activeHeading.value = tocItems.value[0]?.id || ''

  headingObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
    if (visible) activeHeading.value = visible.target.id
  }, { rootMargin: '-18% 0px -70% 0px' })
  headings.forEach((heading) => headingObserver.observe(heading))
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onBeforeUnmount(() => {
  headingObserver?.disconnect()
  window.removeEventListener('scroll', updateProgress)
  if (progressFrame) cancelAnimationFrame(progressFrame)
  clearTimeout(copyTimer)
})

useSeoMeta({
  title: () => `${page.value.title} · 恒言Tech`,
  description: () => page.value.description || '恒言Tech 的产品与实践记录'
})
</script>

<style scoped>
.reading-progress { position: fixed; z-index: 120; top: 0; left: 0; height: 3px; background: var(--accent); transition: width 80ms linear; }
.article-shell { width: min(calc(100% - (var(--gutter) * 2)), 1180px); margin: 0 auto; padding: 28px 0 100px; }
.back-link { min-height: 44px; display: inline-flex; align-items: center; margin-bottom: 18px; color: var(--muted); font-size: 13px; font-weight: 700; text-decoration: none; }
.back-link:hover { color: var(--accent); }
.article-header { width: 100%; padding-bottom: 40px; border-bottom: 1px solid var(--line); }
.article-date { margin: 0; color: var(--muted); font: 12px/1.5 var(--mono); letter-spacing: .06em; }
.article-header h1 { margin: 14px 0 20px; font-family: var(--serif); font-size: clamp(42px, 6vw, 72px); font-weight: 600; line-height: 1.12; letter-spacing: -.025em; }
.article-description { margin: 0 0 24px; color: var(--muted); font-size: 19px; line-height: 1.75; }
.article-meta { display: flex; flex-wrap: wrap; gap: 10px 24px; color: var(--muted); font: 12px/1.5 var(--mono); }
.article-actions { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 8px; }
.article-actions .ui-button { min-height: 44px; padding: 0 16px; }
.article-grid { display: grid; grid-template-columns: 200px minmax(0, 900px); gap: 40px; align-items: start; margin-top: 48px; }
.article-toc { position: sticky; top: calc(var(--header-height) + 28px); }
.article-toc h2 { margin: 0 0 14px; color: var(--muted); font: 11px/1.4 var(--mono); letter-spacing: .08em; text-transform: uppercase; }
.article-toc a { min-height: 38px; display: flex; align-items: center; padding: 7px 0 7px 14px; border-left: 2px solid var(--line); color: var(--muted); font-size: 13px; line-height: 1.45; text-decoration: none; }
.article-toc a:hover, .article-toc a.active { border-left-color: var(--accent); color: var(--ink); }
.article-body { min-width: 0; color: var(--ink-soft); font-size: 17px; line-height: 1.86; }
.large-text .article-body { font-size: 19px; }
.article-body :deep(h1), .article-body :deep(h2), .article-body :deep(h3), .article-body :deep(h4) { scroll-margin-top: 110px; color: var(--ink); line-height: 1.3; }
.article-body :deep(h1) { margin: 0 0 28px; font-family: var(--serif); font-size: 38px; font-weight: 600; }
.article-body :deep(h2) { margin: 72px 0 20px; padding-top: 4px; border-top: 1px solid var(--line); font-family: var(--serif); font-size: 34px; font-weight: 600; letter-spacing: -.02em; }
.article-body :deep(h2:first-of-type) { margin-top: 0; }
.article-body :deep(h3) { margin: 40px 0 14px; font-size: 22px; }
.article-body :deep(p) { margin: 0 0 22px; }
.article-body :deep(ul), .article-body :deep(ol) { margin: 0 0 24px; padding-left: 1.4em; }
.article-body :deep(li) { margin: 10px 0; }
.article-body :deep(> div > ol) { padding: 0; display: grid; gap: 16px; list-style: none; counter-reset: article-item; }
.article-body :deep(> div > ol > li) { position: relative; margin: 0; padding: 22px 22px 22px 64px; border: 1px solid var(--line); border-radius: 16px; background: color-mix(in srgb, var(--surface) 88%, transparent); box-shadow: var(--shadow-soft); counter-increment: article-item; }
.article-body :deep(> div > ol > li::before) { position: absolute; top: 23px; left: 20px; color: var(--accent); font: 700 11px/1.5 var(--mono); content: counter(article-item, decimal-leading-zero); }
.article-body :deep(> div > ol > li > strong:first-child) { display: block; color: var(--ink); font-size: 19px; line-height: 1.5; }
.article-body :deep(> div > ol > li > ul) { margin: 16px 0 0; padding: 0; list-style: none; }
.article-body :deep(> div > ol > li > ul > li) { margin: 0; padding: 11px 0; border-top: 1px solid var(--line); line-height: 1.72; }
.article-body :deep(> div > ol > li > ul > li:last-child) { padding-bottom: 0; }
.article-body :deep(> div > ul:has(> li > ul)) { padding: 0; display: grid; gap: 16px; list-style: none; }
.article-body :deep(> div > ul:has(> li > ul) > li) { position: relative; margin: 0; padding: 22px; border: 1px solid var(--line); border-left: 3px solid color-mix(in srgb, var(--accent) 72%, var(--line)); border-radius: 16px; background: color-mix(in srgb, var(--surface) 88%, transparent); box-shadow: var(--shadow-soft); }
.article-body :deep(> div > ul:has(> li > ul) > li > strong:first-child) { display: block; color: var(--ink); font-size: 19px; line-height: 1.5; }
.article-body :deep(> div > ul:has(> li > ul) > li > ul) { margin: 16px 0 0; padding: 0; list-style: none; }
.article-body :deep(> div > ul:has(> li > ul) > li > ul > li) { margin: 0; padding: 11px 0; border-top: 1px solid var(--line); line-height: 1.72; }
.article-body :deep(> div > ul:has(> li > ul) > li > ul > li:last-child) { padding-bottom: 0; }
.article-body :deep(a) { color: var(--accent); text-underline-offset: 3px; overflow-wrap: anywhere; }
.article-body :deep(blockquote) { margin: 0 0 48px; padding: 24px 26px; border: 1px solid color-mix(in srgb, var(--accent) 28%, var(--line)); border-radius: 16px; background: var(--note); color: var(--ink-soft); }
.article-body :deep(blockquote p) { margin: 0; }
.article-body :deep(blockquote p + p) { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line); }
.article-body :deep(blockquote p:last-child) { margin-bottom: 0; }
.article-body :deep(code:not(pre code)) { padding: .15em .38em; border: 1px solid var(--line); border-radius: 6px; background: var(--note); color: var(--ink); font-family: var(--mono); font-size: .88em; }
.article-body :deep(.table-scroll) { width: 100%; margin: 24px 0 36px; overflow-x: auto; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
.article-body :deep(table) { width: max-content; min-width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6; }
.article-body :deep(th), .article-body :deep(td) { min-width: 112px; padding: 14px 12px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
.article-body :deep(th) { background: var(--note); color: var(--ink); font-family: var(--mono); font-size: 11px; letter-spacing: .04em; text-transform: uppercase; }
.article-body :deep(img) { width: auto; max-width: 100%; height: auto; display: block; margin: 36px auto; border: 1px solid var(--line); border-radius: 16px; box-shadow: var(--shadow-soft); }
.article-next { margin-top: 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.next-link { min-height: 150px; padding: 24px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); text-decoration: none; transition: background 180ms ease, transform 180ms ease; }
.next-link:hover { background: var(--surface-strong); transform: translateY(-2px); }
.next-link-right { text-align: right; }
.next-link small { color: var(--muted); font: 11px/1.5 var(--mono); }
.next-link strong { display: block; margin-top: 20px; font-size: 18px; }

@media (max-width: 1040px) {
  .article-grid { grid-template-columns: 180px minmax(0, 1fr); gap: 32px; }
}
@media (max-width: 820px) {
  .article-grid { grid-template-columns: 1fr; }
  .article-toc { position: static; padding: 18px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); }
  .article-toc a { border-left: 0; border-bottom: 1px solid var(--line); }
  .article-next { grid-template-columns: 1fr; }
  .next-link-right { text-align: left; }
}
@media (max-width: 560px) {
  .article-shell { padding-top: 20px; }
  .article-header h1 { font-size: 38px; }
  .article-description { font-size: 17px; }
  .article-body, .large-text .article-body { font-size: 16px; line-height: 1.82; }
  .article-body :deep(h2) { font-size: 29px; }
  .article-body :deep(> div > ol) { gap: 12px; }
  .article-body :deep(> div > ol > li) { padding: 18px 16px 18px 50px; }
  .article-body :deep(> div > ol > li::before) { top: 20px; left: 16px; }
  .article-body :deep(> div > ol > li > strong:first-child) { font-size: 17px; }
  .article-body :deep(> div > ul:has(> li > ul)) { gap: 12px; }
  .article-body :deep(> div > ul:has(> li > ul) > li) { padding: 18px 16px; }
  .article-body :deep(> div > ul:has(> li > ul) > li > strong:first-child) { font-size: 17px; }
}
</style>
