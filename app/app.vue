<template>
  <div id="app" :class="{ 'nav-open': navOpen }">
    <a class="skip-link" href="#main-content">跳到主要内容</a>

    <header class="site-header">
      <div class="header-inner">
        <NuxtLink to="/" class="site-brand" aria-label="恒言Tech 首页" @click="closeNav">
          <SiteLogo />
        </NuxtLink>

        <div class="nav-cluster">
          <nav id="primary-navigation" class="site-nav" aria-label="主导航">
            <NuxtLink to="/" class="site-link" :class="{ active: route.path === '/' }" @click="closeNav">首页</NuxtLink>
            <NuxtLink to="/ai-daily" class="site-link" :class="{ active: route.path === '/ai-daily' }" @click="closeNav">智能日报</NuxtLink>
            <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer" class="site-link">GitHub ↗</a>
          </nav>

          <button class="icon-button theme-toggle" type="button" :aria-label="themeLabel" @click="toggleTheme">
            <svg v-if="theme === 'light'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
              <circle cx="12" cy="12" r="3.5" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
              <path d="M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6 8.5 8.5 0 1 0 20.4 15.1Z" />
            </svg>
          </button>

          <button
            class="icon-button menu-button"
            type="button"
            :aria-label="navOpen ? '关闭导航' : '打开导航'"
            :aria-expanded="navOpen"
            aria-controls="primary-navigation"
            @click="navOpen = !navOpen"
          >
            <svg v-if="!navOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </div>
    </header>

    <main id="main-content" ref="mainContent" class="main-content" tabindex="-1">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-copy">
          <NuxtLink to="/" class="footer-brand" aria-label="恒言Tech 首页"><SiteLogo /></NuxtLink>
          <p>把遇到的问题，做成可以被使用的小产品。记录来源、过程与边界。</p>
        </div>
        <nav class="footer-links" aria-label="页脚导航">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/ai-daily">智能日报</NuxtLink>
          <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </div>
      <div class="copyright">
        <span>© 2026 恒言Tech · 独立开发者与产品记录</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备2026008190号-2</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
const route = useRoute()
const navOpen = ref(false)
const theme = ref('light')
const mainContent = ref(null)

const themeLabel = computed(() => theme.value === 'dark' ? '切换浅色模式' : '切换深色模式')

const applyTheme = (value) => {
  theme.value = value
  document.documentElement.dataset.theme = value
}

const toggleTheme = () => {
  const nextTheme = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme(nextTheme)
  localStorage.setItem('hy-theme', nextTheme)
}

const closeNav = () => { navOpen.value = false }

onMounted(() => {
  const currentTheme = document.documentElement.dataset.theme
  applyTheme(currentTheme === 'dark' ? 'dark' : 'light')
})

watch(() => route.path, async () => {
  closeNav()
  await nextTick()
  mainContent.value?.focus({ preventScroll: true })
})

useHead({
  htmlAttrs: { lang: 'zh-CN' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [{ rel: 'icon', type: 'image/svg+xml', sizes: 'any', href: '/favicon.svg?v=4' }],
  script: [
    {
      innerHTML: `(function(){try{var saved=localStorage.getItem('hy-theme');var theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();`
    },
    {
      // 百度统计需要直接存在于服务端返回的 head 中，供代码安装检测识别。
      innerHTML: [
        'var _hmt = _hmt || [];',
        '(function() {',
        '  var hm = document.createElement("script");',
        '  hm.src = "https://hm.baidu.com/hm.js?e15730fb7750ed50246c321990ff8230";',
        '  var s = document.getElementsByTagName("script")[0];',
        '  s.parentNode.insertBefore(hm, s);',
        '})();'
      ].join('\n')
    }
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
  color-scheme: light;
  --paper: #f7f5f0;
  --surface: #fcfbf8;
  --surface-strong: #ffffff;
  --ink: #202522;
  --ink-soft: #424b46;
  --muted: #626b66;
  --faint: #8a928d;
  --line: #dedfd9;
  --line-strong: #c9ccc6;
  --accent: #4e6fd7;
  --accent-hover: #3f5fc2;
  --accent-soft: #e9eefc;
  --accent-ink: #ffffff;
  --signal: #dda75f;
  --code: #242926;
  --code-ink: #f4f6f3;
  --note: #eef1ec;
  --shadow: 0 18px 54px rgba(44, 52, 47, 0.1);
  --shadow-soft: 0 8px 28px rgba(44, 52, 47, 0.07);
  --radius-sm: 12px;
  --radius: 20px;
  --radius-lg: 32px;
  --header-height: 72px;
  --container: 1200px;
  --reading: 720px;
  --gutter: 28px;
  --sans: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --serif: "Iowan Old Style", "Songti SC", "Noto Serif SC", STSong, serif;
  --mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}

html[data-theme="dark"] {
  color-scheme: dark;
  --paper: #171a18;
  --surface: #1d211f;
  --surface-strong: #242925;
  --ink: #eef1ed;
  --ink-soft: #d1d7d2;
  --muted: #b2bab4;
  --faint: #89918b;
  --line: #343a36;
  --line-strong: #454d47;
  --accent: #8ba3f3;
  --accent-hover: #9eb2f4;
  --accent-soft: #29334d;
  --accent-ink: #151815;
  --signal: #d6a86b;
  --code: #101311;
  --code-ink: #f3f5f2;
  --note: #252d28;
  --shadow: 0 22px 64px rgba(0, 0, 0, 0.25);
  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.18);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-width: 320px;
  background: radial-gradient(circle at 86% 2%, color-mix(in srgb, var(--accent-soft) 58%, transparent) 0, transparent 32rem), var(--paper);
  background-attachment: fixed;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.7;
  transition: background-color 220ms ease, color 220ms ease;
}
body:has(.nav-open) { overflow: hidden; }
button, input, textarea, select { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
button { color: inherit; }
a { color: inherit; }
svg { display: block; }
section[id], article[id], div[id] { scroll-margin-top: 96px; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }

.skip-link { position: fixed; z-index: 200; top: 8px; left: 8px; padding: 10px 14px; border-radius: var(--radius-sm); background: var(--ink); color: var(--paper); text-decoration: none; transform: translateY(-150%); transition: transform 160ms ease; }
.skip-link:focus { transform: translateY(0); }
#app { min-height: 100vh; display: flex; flex-direction: column; }
.site-header { position: sticky; z-index: 100; top: 0; height: var(--header-height); border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--paper) 90%, transparent); backdrop-filter: blur(16px); }
.header-inner { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); height: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 32px; }
.site-brand { min-height: 44px; display: inline-flex; align-items: center; text-decoration: none; }
.nav-cluster, .site-nav { display: flex; align-items: center; }
.nav-cluster { gap: 8px; }
.site-nav { gap: 4px; }
.site-link, .icon-button { min-width: 44px; min-height: 44px; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; cursor: pointer; }
.site-link { padding: 0 14px; color: var(--muted); font-size: 14px; font-weight: 650; text-decoration: none; transition: background 180ms ease, color 180ms ease; }
.site-link:hover { color: var(--ink); background: var(--surface); }
.site-link.active { color: var(--accent); background: var(--accent-soft); }
.icon-button { border: 1px solid var(--line); border-radius: var(--radius-sm); background: transparent; transition: background 180ms ease, border-color 180ms ease, transform 120ms ease; }
.icon-button:hover { border-color: var(--line-strong); background: var(--surface); }
.icon-button:active, .ui-button:active { transform: scale(.97); }
.menu-button { display: none; }
.main-content { flex: 1; outline: none; }

.site-footer { border-top: 1px solid var(--line); background: var(--surface); }
.footer-inner, .copyright { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin-right: auto; margin-left: auto; }
.footer-inner { padding: 28px 0 24px; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 32px; }
.footer-brand { min-height: 44px; display: inline-flex; align-items: center; text-decoration: none; }
.footer-copy p { max-width: none; margin: 10px 0 0; color: var(--muted); font-size: 14px; white-space: nowrap; }
.footer-links { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px 24px; }
.footer-links a { min-height: 44px; display: inline-flex; align-items: center; color: var(--muted); font-size: 13px; text-decoration: none; }
.footer-links a:hover { color: var(--ink); }
.copyright { margin-top: 0; margin-bottom: 0; padding: 14px 0 18px; display: flex; flex-wrap: wrap; gap: 4px 18px; border-top: 1px solid var(--line); color: var(--faint); font-size: 12px; }
.copyright a { color: inherit; text-decoration: none; }
.copyright a:hover { color: var(--ink); }

.ui-button { min-height: 48px; padding: 0 20px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border: 1px solid var(--accent); border-radius: 999px; background: var(--accent); color: var(--accent-ink); box-shadow: 0 8px 22px color-mix(in srgb, var(--accent) 22%, transparent); cursor: pointer; font-size: 14px; font-weight: 700; text-decoration: none; transition: background 180ms ease, border-color 180ms ease, color 180ms ease, transform 120ms ease; }
.ui-button:hover { border-color: transparent; background: var(--accent-hover); }
.ui-button.secondary { border-color: var(--line-strong); background: var(--surface); color: var(--ink); box-shadow: none; }
.ui-button.secondary:hover { border-color: var(--accent); color: var(--accent); background: var(--surface-strong); }

/* 产品详情页共享视觉：保留各产品演示内容，只统一博客的柔和外壳与节奏。 */
.product-page { background: transparent !important; }
.product-page .product-hero { padding-top: 28px !important; padding-bottom: 72px !important; }
.product-page .back-link { margin-bottom: 18px !important; color: var(--muted) !important; font-weight: 700; }
.product-page .back-link:hover { color: var(--accent) !important; }
.product-page .primary-button { border-radius: 999px !important; background: var(--accent) !important; color: var(--accent-ink) !important; box-shadow: 0 8px 22px color-mix(in srgb, var(--accent) 20%, transparent); }
.product-page .text-link { border-bottom: 0 !important; color: var(--ink) !important; }
.product-page .text-link:hover { color: var(--accent) !important; }
.product-page .workspace-interface,
.product-page .app-preview,
.product-page .workbench-preview,
.product-page .calculator-preview { overflow: hidden; border-radius: var(--radius-lg) !important; box-shadow: var(--shadow); }
.product-page .feature-strip { gap: 12px; border: 0 !important; }
.product-page .feature-strip article { min-height: 180px !important; border: 1px solid var(--line) !important; border-radius: var(--radius) !important; background: var(--surface); box-shadow: var(--shadow-soft); }
.product-page .access-section,
.product-page .use-section,
.product-page .visit-section { margin-bottom: 64px !important; padding: 44px !important; border: 1px solid var(--line) !important; border-radius: var(--radius-lg); background: var(--accent-soft); }

@media (max-width: 820px) {
  :root { --header-height: 64px; --gutter: 18px; }
  .menu-button { display: inline-flex; }
  .site-nav { position: fixed; inset: var(--header-height) 0 auto; padding: 16px 18px 28px; display: grid; gap: 4px; border-bottom: 1px solid var(--line); border-radius: 0 0 22px 22px; background: var(--paper); box-shadow: var(--shadow); opacity: 0; pointer-events: none; transform: translateY(-130%); transition: transform 220ms ease, opacity 180ms ease; }
  .nav-open .site-nav { opacity: 1; pointer-events: auto; transform: none; }
  .site-link { justify-content: flex-start; padding: 10px 18px; font-size: 18px; }
  .footer-inner { grid-template-columns: 1fr; align-items: start; }
  .footer-links { justify-content: flex-start; }
  .footer-copy p { white-space: normal; }
  .product-page .product-hero { padding-top: 20px !important; padding-bottom: 56px !important; }
  .product-page .back-link { margin-bottom: 12px !important; }
  .product-page .access-section,
  .product-page .use-section,
  .product-page .visit-section { margin-bottom: 36px !important; padding: 28px 22px !important; }
}

@media (max-width: 560px) { .site-logo .wordmark { display: none; } }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
</style>
