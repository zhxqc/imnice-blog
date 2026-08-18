<template>
  <div class="about-page">
    <section class="about-hero" aria-labelledby="about-title">
      <p class="page-kicker">关于我</p>
      <h1 id="about-title">你好，我是恒言。</h1>
      <p>我喜欢把遇到的问题，做成简单、实际、可以被使用的小产品。这个站用来记录我开发的插件、微信小程序、在线工具与桌面应用，以及一路上的实践。</p>
    </section>

    <section class="about-content" aria-labelledby="work-title">
      <div class="section-heading"><div><p class="page-kicker">我在做什么</p><h2 id="work-title">正在进行的工作</h2></div><p>先解决真实问题，再决定需要什么功能。保持轻量，也保持长期更新。</p></div>
      <div class="work-list">
        <NuxtLink to="/products/dsh-oh-my-theme"><span>01</span><div><h3>开发者插件与工具</h3><p>把重复的配置和操作，整理成更清楚、更容易复用的工具。</p></div><b>↗</b></NuxtLink>
        <NuxtLink to="/#products"><span>02</span><div><h3>生活与决策工具</h3><p>从家庭照护、宠物成长和个人交易场景出发，做能直接解决问题的产品。</p></div><b>↗</b></NuxtLink>
        <div><span>03</span><div><h3>实践与记录</h3><p>记录项目中的学习、试错和思考，让经验可以被重新使用。</p></div><b>—</b></div>
      </div>
    </section>

    <section class="contact-section" aria-labelledby="contact-title">
      <div><p class="page-kicker">联系我</p><h2 id="contact-title">有想法，欢迎来聊。</h2><p>如果你对这些产品感兴趣，或者有想一起讨论的问题，可以通过 GitHub 或微信找到我。</p></div>
      <div class="contact-links">
        <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer"><span>GitHub</span><b>github.com/zhxqc ↗</b></a>
        <div class="wechat-contact">
          <span>微信</span>
          <figure>
            <a href="https://img.imnice.top/img/2026/08/17-2032-lmmg2e.jpg" target="_blank" rel="noreferrer" aria-label="打开恒言的微信二维码原图">
              <img src="https://img.imnice.top/img/2026/08/17-2032-lmmg2e.jpg" alt="恒言的微信二维码" loading="lazy">
            </a>
            <figcaption>微信扫码添加恒言</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: '关于我 · 恒言', description: '关于恒言，以及这个用来记录产品和实践的小站。' })
</script>

<style scoped>
.about-page { background: var(--surface); }
.about-hero, .about-content, .contact-section { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; }
.about-hero { padding: 96px 0 104px; }
.page-kicker { margin: 0 0 18px; color: var(--muted); font-size: 13px; font-weight: 600; }
.about-hero h1 { margin: 0; font-size: 58px; line-height: 1.15; }
.about-hero > p:last-child { max-width: 720px; margin: 28px 0 0; color: var(--ink-soft); font-size: 19px; }
.about-content { padding: 80px 0 92px; border-top: 1px solid var(--line); }
.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; margin-bottom: 38px; }
.section-heading h2, .contact-section h2 { margin: 0; font-size: 38px; line-height: 1.2; }
.section-heading > p { max-width: 440px; margin: 0; color: var(--muted); }
.work-list { border-top: 1px solid var(--line); }
.work-list > * { min-height: 132px; display: grid; grid-template-columns: 70px 1fr auto; gap: 24px; align-items: center; border-bottom: 1px solid var(--line); color: inherit; text-decoration: none; }
.work-list > * > span { color: var(--muted); font-size: 12px; }
.work-list h3 { margin: 0; font-size: 23px; }
.work-list p { margin: 10px 0 0; color: var(--ink-soft); }
.work-list b { font-size: 24px; }
.work-list a:hover h3 { text-decoration: underline; text-underline-offset: 6px; }
.contact-section { display: grid; grid-template-columns: 1fr 0.8fr; gap: 80px; align-items: end; padding: 80px 0 96px; border-top: 1px solid var(--line); }
.contact-section > div:first-child > p:last-child { max-width: 540px; margin: 22px 0 0; color: var(--ink-soft); }
.contact-links { border-top: 1px solid var(--ink); }
.contact-links > * { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 1px solid var(--ink); font-size: 13px; text-decoration: none; }
.contact-links span { color: var(--muted); }
.wechat-contact { align-items: flex-start; padding: 20px 0; }
.wechat-contact figure { width: 150px; margin: 0; text-align: center; }
.wechat-contact figure a { display: block; padding: 8px; border: 1px solid var(--line); background: #fff; }
.wechat-contact img { width: 100%; aspect-ratio: 1; display: block; object-fit: contain; }
.wechat-contact figcaption { margin-top: 9px; color: var(--muted); font-size: 11px; }

@media (max-width: 720px) {
  .about-hero { padding-top: 68px; padding-bottom: 76px; }
  .about-hero h1 { font-size: 40px; }
  .about-hero > p:last-child { font-size: 17px; }
  .about-content { padding-top: 60px; padding-bottom: 72px; }
  .section-heading { align-items: flex-start; flex-direction: column; gap: 16px; }
  .section-heading h2, .contact-section h2 { font-size: 32px; }
  .work-list > * { grid-template-columns: 42px 1fr auto; gap: 12px; padding: 24px 0; }
  .work-list p { font-size: 14px; }
  .contact-section { grid-template-columns: 1fr; gap: 42px; padding-top: 60px; padding-bottom: 72px; }
  .wechat-contact figure { width: 132px; }
}
</style>
