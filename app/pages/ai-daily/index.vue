<template>
  <div class="daily-index-page">
    <header class="daily-index-hero">
      <p class="page-kicker">Daily Intelligence Archive</p>
      <div class="title-row">
        <h1>智能日报</h1>
        <p>追踪 AI 新闻、最新论文、GitHub 项目增量与生态变化。来源可回溯，数据有口径，判断有边界。</p>
      </div>

      <div class="archive-controls">
        <label class="search-wrap" for="daily-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          <span class="sr-only">搜索日报</span>
          <input id="daily-search" v-model="searchQuery" type="search" placeholder="搜索标题、主题或关键词" autocomplete="off">
        </label>
        <label class="select-wrap">
          <span class="sr-only">选择年份</span>
          <select v-model="selectedYear">
            <option value="all">全部年份</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m7 9.5 5 5 5-5"/></svg>
        </label>
      </div>
    </header>

    <section class="daily-directory" aria-labelledby="directory-title">
      <h2 id="directory-title" class="sr-only">全部日报</h2>
      <p class="archive-count" aria-live="polite"><span>{{ filteredDailies.length }}</span> ISSUES / 按时间倒序</p>

      <div v-if="filteredDailies.length" class="daily-list">
        <NuxtLink v-for="daily in filteredDailies" :key="daily.path" :to="daily.path" class="daily-entry">
          <span class="daily-index" aria-hidden="true">{{ issueNumber(daily) }}</span>
          <time :datetime="daily.date || daily.meta?.date">{{ formatDate(daily.date || daily.meta?.date) }}</time>
          <div class="daily-summary">
            <h3>{{ daily.title }}</h3>
            <p v-if="daily.description">{{ daily.description }}</p>
          </div>
          <span class="daily-arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <div v-else class="empty-state">
        <h3>没有找到匹配的日报</h3>
        <p>换一个关键词或年份试试。</p>
        <button type="button" class="ui-button secondary" @click="clearFilters">清除筛选</button>
      </div>
    </section>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const selectedYear = ref('all')

const { data: pages } = await useAsyncData('ai-daily-directory', () => queryCollection('content').all())

const dailies = computed(() =>
  (pages.value || [])
    .filter((page) => page.path.startsWith('/ai-daily/') && (page.date || page.meta?.date))
    .sort((a, b) => new Date(b.date || b.meta?.date) - new Date(a.date || a.meta?.date))
)

const years = computed(() => [...new Set(dailies.value.map((daily) => String(new Date(daily.date || daily.meta?.date).getFullYear())))])

const filteredDailies = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return dailies.value.filter((daily) => {
    const year = String(new Date(daily.date || daily.meta?.date).getFullYear())
    const content = `${daily.title || ''} ${daily.description || ''}`.toLowerCase()
    return (selectedYear.value === 'all' || selectedYear.value === year) && (!query || content.includes(query))
  })
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '.')
}

const issueNumber = (daily) => String(dailies.value.findIndex((item) => item.path === daily.path) + 1).padStart(2, '0')
const clearFilters = () => { searchQuery.value = ''; selectedYear.value = 'all' }

useSeoMeta({
  title: '智能日报 · 恒言Tech',
  description: '恒言Tech 智能日报，追踪 AI 新闻、最新论文、GitHub 项目增量与重点生态变化。'
})
</script>

<style scoped>
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.daily-index-page { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; }
.daily-index-hero { padding: 52px 0 30px; }
.page-kicker { margin: 0 0 12px; color: var(--muted); font-family: var(--mono); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.title-row { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(340px, .9fr); gap: 48px; align-items: end; }
.title-row h1 { margin: 0; white-space: nowrap; font-size: clamp(52px, 6.2vw, 76px); font-weight: 650; line-height: 1.06; letter-spacing: -.04em; }
.title-row p { margin: 0; color: var(--muted); font-size: 18px; }
.archive-controls { margin-top: 30px; padding: 12px; display: grid; grid-template-columns: 1fr auto; gap: 12px; border: 1px solid var(--line); border-radius: 18px; background: var(--surface); box-shadow: var(--shadow-soft); }
.search-wrap { position: relative; }
.search-wrap svg { position: absolute; top: 50%; left: 14px; color: var(--muted); transform: translateY(-50%); }
.search-wrap input, select { width: 100%; min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: var(--surface-strong); color: var(--ink); }
.search-wrap input { padding: 0 16px 0 44px; }
.select-wrap { position: relative; display: block; }
.select-wrap select { width: 156px; padding: 0 42px 0 16px; appearance: none; cursor: pointer; }
.select-wrap > svg { position: absolute; top: 50%; right: 14px; color: var(--muted); pointer-events: none; transform: translateY(-50%); }
.daily-directory { padding-bottom: 96px; }
.archive-count { margin: 0; padding: 24px 0 12px; color: var(--muted); font: 12px/1.5 var(--mono); }
.daily-list { display: grid; gap: 12px; }
.daily-entry { display: grid; grid-template-columns: 64px 140px minmax(0, 1fr) 52px; gap: 16px; align-items: start; padding: 28px 24px; border: 1px solid var(--line); border-radius: 18px; background: color-mix(in srgb, var(--surface) 88%, transparent); color: var(--ink); text-decoration: none; transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease; }
.daily-entry:hover { background: var(--surface-strong); box-shadow: var(--shadow-soft); transform: translateY(-2px); }
.daily-index, .daily-entry time { color: var(--muted); font: 12px/1.6 var(--mono); }
.daily-summary { min-width: 0; }
.daily-summary h3 { margin: 0 0 8px; font-size: 25px; line-height: 1.28; letter-spacing: -.025em; }
.daily-summary p { max-width: 760px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
.daily-arrow { color: var(--accent); font-size: 24px; text-align: right; }
.empty-state { padding: 64px 24px; border: 1px solid var(--line); border-radius: 18px; background: var(--surface); text-align: center; }
.empty-state h3 { margin: 0; font-size: 24px; }
.empty-state p { margin: 8px 0 24px; color: var(--muted); }

@media (max-width: 820px) {
  .daily-index-hero { padding-top: 40px; }
  .title-row, .archive-controls { grid-template-columns: 1fr; }
  .title-row { gap: 18px; }
  .archive-controls { margin-top: 24px; }
  .select-wrap select { width: 100%; }
  .daily-entry { grid-template-columns: 48px 1fr 34px; }
  .daily-entry time { grid-column: 2; grid-row: 1; }
  .daily-summary { grid-column: 2; }
  .daily-arrow { grid-column: 3; grid-row: 1 / span 2; align-self: center; }
}

@media (max-width: 560px) {
  .daily-entry { grid-template-columns: 36px 1fr 28px; gap: 10px; padding: 22px 16px; }
  .daily-summary h3 { font-size: 20px; }
  .daily-summary p { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
}
</style>
