<template>
  <div class="daily-index-page">
    <header class="daily-index-hero">
      <div>
        <p class="page-kicker">每日 AI 情报归档</p>
        <h1>智能日报</h1>
      </div>
      <p>追踪 AI 新闻、最新论文、GitHub 项目增星与重点生态变化，保留来源、数据口径和明确边界。</p>
    </header>

    <section class="daily-directory" aria-labelledby="directory-title">
      <div class="directory-heading">
        <h2 id="directory-title">全部日报</h2>
        <p>共 {{ dailies.length }} 期</p>
      </div>

      <div v-if="dailies.length" class="daily-list">
        <NuxtLink v-for="(daily, index) in dailies" :key="daily.path" :to="daily.path" class="daily-entry">
          <span class="daily-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <time :datetime="daily.date || daily.meta?.date">{{ formatDate(daily.date || daily.meta?.date) }}</time>
          <div class="daily-summary">
            <h3>{{ daily.title }}</h3>
            <p v-if="daily.description">{{ daily.description }}</p>
          </div>
          <span class="daily-arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <p v-else class="empty-state">智能日报正在整理中，请稍后再来看看。</p>
    </section>
  </div>
</template>

<script setup>
const { data: pages } = await useAsyncData('ai-daily-directory', () =>
  queryCollection('content').all()
)

const dailies = computed(() =>
  (pages.value || [])
    .filter((page) => page.path.startsWith('/ai-daily/') && (page.date || page.meta?.date))
    .sort((a, b) => new Date(b.date || b.meta?.date) - new Date(a.date || a.meta?.date))
)

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: '智能日报 · 恒言Tech',
  description: '恒言Tech 智能日报，追踪 AI 新闻、最新论文、GitHub 项目增星与重点生态变化。'
})
</script>

<style scoped>
.daily-index-page { background: var(--surface); }

.daily-index-hero,
.daily-directory {
  width: min(calc(100% - (var(--gutter) * 2)), var(--container));
  margin: 0 auto;
}

.daily-index-hero {
  display: grid;
  grid-template-columns: 1fr minmax(320px, .7fr);
  gap: 72px;
  align-items: end;
  padding: 88px 0 72px;
}

.page-kicker {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 650;
}

.daily-index-hero h1 {
  margin: 0;
  font-size: clamp(50px, 7vw, 76px);
  line-height: 1;
  letter-spacing: -.045em;
}

.daily-index-hero > p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 17px;
  line-height: 1.8;
}

.daily-directory { padding: 0 0 104px; }

.directory-heading {
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--line);
}

.directory-heading h2 { margin: 0; font-size: 16px; }
.directory-heading p { margin: 0; color: var(--muted); font-size: 13px; }

.daily-entry {
  min-height: 148px;
  display: grid;
  grid-template-columns: 52px 150px minmax(0, 1fr) 32px;
  gap: 24px;
  align-items: center;
  padding: 28px 4px;
  border-bottom: 1px solid var(--line);
  color: inherit;
  text-decoration: none;
  transition: background-color 180ms ease, padding-right 180ms ease, padding-left 180ms ease;
}

.daily-entry:hover {
  padding-right: 16px;
  padding-left: 16px;
  background: var(--paper);
}

.daily-index,
.daily-entry time { color: var(--muted); font-size: 12px; }
.daily-index { font-variant-numeric: tabular-nums; }
.daily-summary { min-width: 0; }
.daily-summary h3 { margin: 0; font-size: 23px; line-height: 1.35; }
.daily-summary p { max-width: 760px; margin: 10px 0 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
.daily-arrow { color: #2454ff; font-size: 22px; text-align: right; }
.empty-state { margin: 0; padding: 56px 0; color: var(--muted); border-bottom: 1px solid var(--line); }

@media (max-width: 760px) {
  .daily-index-hero { grid-template-columns: 1fr; gap: 24px; padding: 64px 0 56px; }
  .daily-index-hero h1 { font-size: 52px; }
  .daily-index-hero > p { font-size: 16px; }
  .daily-directory { padding-bottom: 72px; }
  .daily-entry { grid-template-columns: 38px minmax(0, 1fr) 24px; gap: 12px; align-items: start; padding: 24px 0; }
  .daily-entry time { grid-column: 2; grid-row: 1; }
  .daily-summary { grid-column: 2; grid-row: 2; }
  .daily-index { grid-row: 1 / 3; }
  .daily-arrow { grid-column: 3; grid-row: 1 / 3; align-self: center; }
  .daily-summary h3 { font-size: 19px; }
  .daily-entry:hover { padding-right: 8px; padding-left: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .daily-entry { transition: none; }
}
</style>
