<template>
  <div id="app">
    <a class="skip-link" href="#main-content">跳到主要内容</a>

    <header class="site-header">
      <nav class="site-nav" aria-label="主导航">
        <NuxtLink to="/" class="site-brand" aria-label="恒言Tech 首页">
          <SiteLogo />
        </NuxtLink>
        <div class="site-links">
          <NuxtLink to="/#products" class="site-link">产品</NuxtLink>
          <NuxtLink to="/about" class="site-link">关于</NuxtLink>
          <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer" class="site-link">GitHub ↗</a>
        </div>
      </nav>
    </header>

    <main id="main-content" class="main-content">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <NuxtLink to="/" class="footer-brand" aria-label="恒言Tech 首页">
            <SiteLogo tone="light" />
          </NuxtLink>
          <p>把遇到的问题，做成可以被使用的小产品。</p>
        </div>
        <div class="footer-links">
          <NuxtLink to="/#products">产品</NuxtLink>
          <NuxtLink to="/about">关于我</NuxtLink>
          <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <p class="copyright">© 2026 恒言Tech · 独立开发者与产品记录</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'zh-CN' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
    { rel: 'alternate icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  ogSiteName: '恒言Tech · 独立开发者与产品记录',
  ogType: 'website',
  ogLocale: 'zh_CN',
  twitterCard: 'summary'
})
</script>

<style>
:root {
  --ink: #111111;
  --ink-soft: #42413e;
  --muted: #706e69;
  --line: #d3d0c8;
  --paper: #f3f1ec;
  --surface: #fbfaf7;
  --container: 1120px;
  --gutter: 24px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

section[id],
article[id],
div[id] {
  scroll-margin-top: 88px;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  line-height: 1.7;
  letter-spacing: 0;
}

button, input, textarea, select { font: inherit; }
a { color: inherit; }

a:focus-visible,
button:focus-visible {
  outline: 3px solid var(--ink);
  outline-offset: 4px;
}

#app { min-height: 100vh; display: flex; flex-direction: column; }

.skip-link {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  padding: 10px 14px;
  background: var(--ink);
  color: var(--surface);
  text-decoration: none;
  transform: translateY(-160%);
}

.skip-link:focus { transform: translateY(0); }

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid var(--line);
  background: rgba(243, 241, 236, 0.96);
  backdrop-filter: blur(10px);
}

.site-nav {
  width: min(calc(100% - (var(--gutter) * 2)), var(--container));
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.site-brand {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.site-links { display: flex; align-items: center; gap: 28px; }

.site-link {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.site-link:hover,
.site-link.router-link-active { color: var(--ink); text-decoration: underline; text-underline-offset: 6px; }
.main-content { flex: 1; }

.site-footer {
  padding: 56px var(--gutter) 24px;
  background: var(--ink);
  color: var(--surface);
}

.footer-inner,
.copyright { width: min(100%, var(--container)); margin-right: auto; margin-left: auto; }
.footer-inner { display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; padding-bottom: 48px; }
.footer-brand { min-height: 48px; display: inline-flex; align-items: center; text-decoration: none; }
.footer-brand .site-logo { transform: scale(1.1); transform-origin: left center; }
.footer-inner p { margin: 10px 0 0; color: #b9b7b2; }
.footer-links { display: flex; flex-wrap: wrap; gap: 24px; }
.footer-links a { min-height: 44px; display: inline-flex; align-items: center; color: #d2d0cb; font-size: 14px; text-decoration: none; }
.copyright { margin-top: 0; margin-bottom: 0; padding-top: 20px; border-top: 1px solid #414141; color: #92918d; font-size: 12px; }

.prose { color: var(--ink-soft); }
.prose h1, .prose h2, .prose h3 { color: var(--ink); line-height: 1.3; }
.prose h1 { margin: 0 0 24px; font-size: 48px; }
.prose h2 { margin-top: 48px; font-size: 28px; }
.prose p, .prose li { color: var(--ink-soft); }
.prose a { color: var(--ink); text-underline-offset: 4px; }
.prose code { padding: 2px 5px; background: #e4e1da; color: var(--ink); }
.prose pre { overflow-x: auto; padding: 20px; background: var(--ink); color: var(--surface); }

@media (max-width: 640px) {
  :root { --gutter: 20px; }
  .site-nav { min-height: 64px; }
  .site-links { gap: 16px; }
  .site-links .site-link:nth-child(3) { display: none; }
  .footer-inner { align-items: flex-start; flex-direction: column; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
</style>
