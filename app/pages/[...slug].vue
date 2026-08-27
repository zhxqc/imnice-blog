<template>
  <article class="article-page">
    <header class="article-header">
      <NuxtLink to="/ai-daily" class="back-link">← 返回智能日报</NuxtLink>
      <p v-if="page.date || page.meta?.date" class="article-date">{{ formatDate(page.date || page.meta?.date) }}</p>
      <h1>{{ page.title }}</h1>
      <p v-if="page.description" class="article-description">{{ page.description }}</p>
    </header>

    <div class="article-body">
      <ContentRenderer :value="page" />
    </div>
  </article>
</template>

<script setup>
const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '页面不存在'
  })
}

useSeoMeta({
  title: () => `${page.value.title} - 恒言Tech`,
  description: () => page.value.description || '恒言Tech 的产品与实践记录'
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.article-page {
  width: min(100% - 2rem, 760px);
  margin: 0 auto;
  padding: 72px 0 96px;
}

.article-header {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--line);
}

.back-link {
  display: inline-block;
  margin-bottom: 3rem;
  color: var(--muted);
  font-size: 14px;
  text-decoration: none;
}

.article-date {
  margin: 0 0 0.75rem;
  color: var(--muted);
  font-size: 14px;
}

h1 {
  margin: 0;
  font-size: clamp(40px, 6vw, 54px);
  line-height: 1.18;
  letter-spacing: -0.035em;
}

.article-description {
  margin: 1.25rem 0 0;
  color: var(--ink-soft);
  font-size: 18px;
}

.article-body {
  padding-top: 40px;
  color: var(--ink-soft);
  font-size: 17px;
  line-height: 1.9;
}

.article-body :deep(h1),
.article-body :deep(h2),
.article-body :deep(h3),
.article-body :deep(h4) {
  color: var(--ink);
  font-weight: 750;
  line-height: 1.35;
  letter-spacing: -0.02em;
  scroll-margin-top: 104px;
}

.article-body :deep(h1) {
  margin: 0 0 28px;
  font-size: 36px;
}

.article-body :deep(h2) {
  margin: 64px 0 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  font-size: 28px;
}

.article-body :deep(h3) {
  margin: 44px 0 18px;
  font-size: 22px;
}

.article-body :deep(h4) {
  margin: 32px 0 14px;
  font-size: 18px;
}

.article-body :deep(p) { margin: 0 0 1.35em; }

.article-body :deep(strong) {
  color: var(--ink);
  font-weight: 750;
}

.article-body :deep(em) { color: #56534d; }

.article-body :deep(a) {
  color: #1748d1;
  font-weight: 600;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  overflow-wrap: anywhere;
  transition: color 180ms ease, text-decoration-color 180ms ease;
}

.article-body :deep(a:hover) {
  color: #0d2f91;
  text-decoration-thickness: 2px;
}

.article-body :deep(h1 > a),
.article-body :deep(h2 > a),
.article-body :deep(h3 > a),
.article-body :deep(h4 > a),
.article-body :deep(h1 > a:hover),
.article-body :deep(h2 > a:hover),
.article-body :deep(h3 > a:hover),
.article-body :deep(h4 > a:hover) {
  color: inherit;
  font-weight: inherit;
  text-decoration: none;
}

.article-body :deep(a:focus-visible) {
  border-radius: 2px;
  outline: 3px solid #1748d1;
  outline-offset: 3px;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin: 0 0 1.5em;
  padding-left: 1.5em;
}

.article-body :deep(li) { margin: 0.45em 0; padding-left: 0.25em; }
.article-body :deep(li::marker) { color: var(--muted); font-weight: 700; }
.article-body :deep(li > ul),
.article-body :deep(li > ol) { margin-top: 0.45em; margin-bottom: 0.45em; }

.article-body :deep(blockquote) {
  margin: 32px 0;
  padding: 18px 22px;
  border-left: 4px solid #1748d1;
  background: rgba(36, 84, 255, 0.06);
  color: #343b4d;
}

.article-body :deep(blockquote p:last-child) { margin-bottom: 0; }

.article-body :deep(code:not(pre code)) {
  padding: 0.15em 0.38em;
  border: 1px solid #d8d4ca;
  border-radius: 3px;
  background: #e9e6df;
  color: #8c2d20;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.88em;
  overflow-wrap: anywhere;
}

.article-body :deep(.table-scroll) {
  width: 100%;
  margin: 32px 0 36px;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--surface);
  -webkit-overflow-scrolling: touch;
}

.article-body :deep(.table-scroll:focus-visible) {
  outline: 3px solid #1748d1;
  outline-offset: 3px;
}

.article-body :deep(table) {
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  line-height: 1.6;
}

.article-body :deep(th),
.article-body :deep(td) {
  min-width: 112px;
  padding: 12px 14px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

.article-body :deep(th:last-child),
.article-body :deep(td:last-child) { border-right: 0; }
.article-body :deep(tr:last-child td) { border-bottom: 0; }

.article-body :deep(th) {
  background: #e9e6df;
  color: var(--ink);
  font-weight: 750;
  white-space: nowrap;
}

.article-body :deep(tbody tr:nth-child(even)) { background: #f6f4ef; }

.article-body :deep(img) {
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 36px auto;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--surface);
  box-shadow: 0 16px 40px rgba(17, 17, 17, 0.09);
}

.article-body :deep(hr) {
  margin: 56px 0;
  border: 0;
  border-top: 1px solid var(--line);
}

.article-body :deep(> :first-child) { margin-top: 0; }
.article-body :deep(> :last-child) { margin-bottom: 0; }

@media (max-width: 640px) {
  .article-page {
    width: min(100% - 1.5rem, 760px);
    padding: 40px 0 72px;
  }

  .back-link {
    margin-bottom: 32px;
  }

  h1 { font-size: 38px; }

  .article-body {
    padding-top: 32px;
    font-size: 16px;
    line-height: 1.85;
  }

  .article-body :deep(h1) { font-size: 30px; }
  .article-body :deep(h2) { margin-top: 48px; font-size: 24px; }
  .article-body :deep(h3) { margin-top: 36px; font-size: 20px; }
  .article-body :deep(th),
  .article-body :deep(td) { min-width: 104px; padding: 10px 12px; }
  .article-body :deep(img) { margin: 28px auto; }
}
</style>
