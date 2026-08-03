<template>
  <div class="home-page">
    <section class="hero">
      <p class="eyebrow">一个简单的中文内容站</p>
      <h1>记录想法，<br /><span>慢慢把事情做好。</span></h1>
      <p class="intro">
        这里用来放文章、笔记和正在思考的事情。现在先从简单的结构开始，之后再一点点完善。
      </p>
      <NuxtLink to="/about" class="primary-button">先看看这里 <span>→</span></NuxtLink>
    </section>

    <section class="note-grid" aria-label="网站介绍">
      <article class="note-card note-card-highlight">
        <p class="card-label">01 / 这里是什么</p>
        <h2>一个不急着做大的小站</h2>
        <p>先把内容写下来，再根据真实需要增加功能。</p>
      </article>
      <article class="note-card">
        <p class="card-label">02 / 接下来</p>
        <h2>持续更新一些有用的东西</h2>
        <p>文章、学习记录、工作方法，或者只是值得留下的一句话。</p>
      </article>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '我的博客',
  description: '一个用来记录想法、文章和生活片段的中文小站。'
})
</script>

<style scoped>
.home-page {
  width: min(100% - 2rem, 1040px);
  margin: 0 auto;
  padding: clamp(5rem, 12vw, 9rem) 0 6rem;
}

.hero {
  max-width: 720px;
}

.eyebrow,
.card-label {
  margin: 0 0 1.25rem;
  color: #b45309;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

h1 span {
  color: #b45309;
}

.intro {
  max-width: 560px;
  margin: 2rem 0;
  color: #6b7280;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.15rem;
  border-radius: 0.5rem;
  background: #1f2937;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.primary-button:hover {
  background: #b45309;
  transform: translateY(-2px);
}

.note-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: clamp(5rem, 12vw, 9rem);
}

.note-card {
  min-height: 220px;
  padding: 1.5rem;
  border: 1px solid #e7e5e4;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.5);
}

.note-card-highlight {
  background: #fff7ed;
  border-color: #fed7aa;
}

.card-label {
  color: #78716c;
}

.note-card h2 {
  max-width: 280px;
  margin: 0 0 1rem;
  font-size: 1.35rem;
  line-height: 1.35;
}

.note-card p:last-child {
  max-width: 320px;
  margin: 0;
  color: #78716c;
}

@media (max-width: 640px) {
  .home-page {
    width: min(100% - 1.5rem, 1040px);
    padding-top: 4rem;
  }

  .note-grid {
    grid-template-columns: 1fr;
    margin-top: 5rem;
  }
}
</style>
