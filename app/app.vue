<template>
  <div id="app">
    <header class="site-header">
      <nav class="site-nav" aria-label="主导航">
        <NuxtLink to="/" class="site-brand">我的博客</NuxtLink>
        <div class="site-links">
          <NuxtLink to="/" class="site-link">首页</NuxtLink>
          <NuxtLink to="/about" class="site-link">关于</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <p>© 2026 我的博客 · 慢慢记录，持续更新</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'zh-CN' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style>
:root {
  --ink: #1f2937;
  --muted: #6b7280;
  --line: #e5e7eb;
  --paper: #fffdf9;
  --accent: #b45309;
  --accent-light: #ffedd5;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  line-height: 1.7;
}

a {
  color: inherit;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  border-bottom: 1px solid var(--line);
  background: rgba(255, 253, 249, 0.92);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
}

.site-nav {
  width: min(100% - 2rem, 1040px);
  min-height: 68px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-brand {
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.04em;
}

.site-links {
  display: flex;
  gap: 1.5rem;
}

.site-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
}

.site-link:hover,
.site-link.router-link-active {
  color: var(--accent);
}

.main-content {
  flex: 1;
}

.site-footer {
  width: min(100% - 2rem, 1040px);
  margin: 0 auto;
  padding: 2rem 0;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.85rem;
}

.prose h1,
.prose h2,
.prose h3 {
  color: var(--ink);
  line-height: 1.3;
}

.prose h1 {
  margin: 0 0 1.5rem;
  font-size: clamp(2rem, 5vw, 3.25rem);
}

.prose h2 {
  margin-top: 2.5rem;
  font-size: 1.5rem;
}

.prose p,
.prose li {
  color: #4b5563;
}

.prose a {
  color: var(--accent);
}

.prose code {
  background: var(--accent-light);
  color: #9a3412;
  padding: 0.12rem 0.35rem;
  border-radius: 0.25rem;
}

.prose pre {
  overflow-x: auto;
  padding: 1rem;
  border-radius: 0.75rem;
  background: #292524;
  color: #fff7ed;
}

@media (max-width: 640px) {
  .site-nav {
    width: min(100% - 1.5rem, 1040px);
  }

  .site-links {
    gap: 1rem;
  }
}
</style>
