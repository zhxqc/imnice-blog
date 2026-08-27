<template>
  <article class="article-page">
    <header class="article-header">
      <NuxtLink to="/" class="back-link">← 返回首页</NuxtLink>
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
  width: min(100% - 2rem, 720px);
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
  font-size: 52px;
  line-height: 1.15;
}

.article-description {
  margin: 1.25rem 0 0;
  color: var(--ink-soft);
  font-size: 18px;
}

.article-body {
  padding-top: 40px;
}

@media (max-width: 640px) {
  .article-page {
    width: min(100% - 1.5rem, 720px);
    padding-top: 40px;
  }

  .back-link {
    margin-bottom: 32px;
  }

  h1 { font-size: 38px; }
}
</style>
