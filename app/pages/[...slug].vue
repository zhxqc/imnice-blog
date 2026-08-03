<template>
  <article class="article-page">
    <header class="article-header">
      <NuxtLink to="/" class="back-link">← 返回首页</NuxtLink>
      <p v-if="page.date" class="article-date">{{ formatDate(page.date) }}</p>
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
  title: () => `${page.value.title} - 我的博客`,
  description: () => page.value.description || '我的博客'
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
  padding: 4rem 0 6rem;
}

.article-header {
  padding-bottom: 2rem;
  border-bottom: 1px solid #e7e5e4;
}

.back-link {
  display: inline-block;
  margin-bottom: 3rem;
  color: #b45309;
  font-size: 0.9rem;
  text-decoration: none;
}

.article-date {
  margin: 0 0 0.75rem;
  color: #a8a29e;
  font-size: 0.9rem;
}

h1 {
  margin: 0;
  font-size: clamp(2.25rem, 6vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.article-description {
  margin: 1.25rem 0 0;
  color: #78716c;
  font-size: 1.1rem;
}

.article-body {
  padding-top: 2.5rem;
}

@media (max-width: 640px) {
  .article-page {
    width: min(100% - 1.5rem, 720px);
    padding-top: 2.5rem;
  }

  .back-link {
    margin-bottom: 2rem;
  }
}
</style>
