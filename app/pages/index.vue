<template>
  <div class="home-page" :class="{ 'motion-ready': motionReady }">
    <section class="hero hero-editorial" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow editorial-reveal editorial-reveal-1">独立开发者 · 产品与实践记录</p>
        <h1 id="hero-title" class="editorial-reveal editorial-reveal-2"><span>把遇到的问题，</span><span>做成能被使用的小产品。</span></h1>
        <p class="intro editorial-reveal editorial-reveal-3">你好，我是恒言Tech。这里记录我做过的插件、小程序、在线工具与桌面应用。</p>
        <div class="hero-actions editorial-reveal editorial-reveal-4">
          <a href="#products" class="primary-button">查看我的产品</a>
          <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer" class="text-link">访问 GitHub ↗</a>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="hero-art-noise"></div>
        <div class="hero-art-cross"><i></i><i></i><b></b></div>
        <div class="hero-art-frame"><span>恒言<br>Tech</span><small>01 / 04</small></div>
        <div class="hero-art-orbit"><i></i><i></i><i></i></div>
      </div>

    </section>

    <section id="products" class="products-section" aria-labelledby="products-title">
      <div class="section-heading" data-reveal>
        <div>
          <p class="section-kicker">产品</p>
          <h2 id="products-title">我做的一些小产品</h2>
        </div>
        <p>从开发者插件到日常生活工具，先把一个具体问题解决好。</p>
      </div>

      <div class="product-grid">
        <article class="product-card" data-reveal>
          <div class="product-visual dsh-visual" aria-hidden="true">
            <div class="terminal-top"><span>dsh / theme</span><span>01</span></div>
            <strong>dsh<br>oh my theme</strong>
            <code>$ dsh plugin --profile web add dsh-oh-my-theme</code>
          </div>
          <div class="product-copy">
            <p class="product-meta">npm 插件 · v0.6.0</p>
            <h3>dsh-oh-my-theme</h3>
            <p>为 dsh 网页端打造的主题与文件工作台，集成 @ 文件引用、代码预览、Git 只读视图与实时余额。</p>
            <div class="product-links">
              <NuxtLink to="/products/dsh-oh-my-theme" class="card-button">查看产品介绍</NuxtLink>
              <a href="https://github.com/zhxqc/dsh-oh-my-theme" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </article>

        <article class="product-card" data-reveal>
          <div class="product-visual mengya-visual" aria-hidden="true">
            <div class="phone">
              <header><span>09:41</span><b>萌芽</b><span>今天</span></header>
              <div><i></i><span>母乳喂养</span><b>08:30</b></div>
              <div><i></i><span>奶瓶</span><b>11:20</b></div>
              <div><i></i><span>成长记录</span><b>今天</b></div>
              <footer>＋ 记一笔</footer>
            </div>
          </div>
          <div class="product-copy">
            <p class="product-meta">微信小程序 · 家庭照护记录</p>
            <h3>萌芽喂养</h3>
            <p>记录宝宝的喂养、睡眠与成长，支持家人共同记录、趋势回顾和照护交接，让下一位照护者更清楚地接上。</p>
            <div class="product-links">
              <NuxtLink to="/products/mengya-feeding" class="card-button">查看产品介绍</NuxtLink>
              <NuxtLink to="/products/mengya-feeding#use">微信扫码使用</NuxtLink>
            </div>
          </div>
        </article>

        <article class="product-card" data-reveal>
          <div class="product-visual puppy-visual" aria-hidden="true">
            <img src="https://www.puppyweightcalc.com/logo.svg" alt="">
            <p>How big will my puppy get?</p>
            <div class="weight-result"><span>Estimated adult weight</span><strong>58–72 lb</strong></div>
            <small>Typical range · Higher confidence</small>
          </div>
          <div class="product-copy">
            <p class="product-meta">英文工具站 · 已公开</p>
            <h3>PuppyWeightCalc</h3>
            <p>根据幼犬年龄、体重、品种和成长模式，估算成年体重区间，并解释成长阶段与预测置信度。</p>
            <div class="product-links">
              <NuxtLink to="/products/puppy-weight-calc" class="card-button">查看产品介绍</NuxtLink>
              <a href="https://www.puppyweightcalc.com" target="_blank" rel="noreferrer">在线使用 ↗</a>
            </div>
          </div>
        </article>

        <article class="product-card" data-reveal>
          <div class="product-visual positionwise-visual" aria-hidden="true">
            <header><span>POSITIONWISE</span><span>LOCAL</span></header>
            <div class="portfolio-total"><small>账户总额</small><strong>¥ 286,420.00</strong><span>仓位 63%</span></div>
            <div class="market-row"><b>持仓风险</b><span>2 项待复核</span><em>优先处理</em></div>
            <div class="market-row"><b>后台盯盘</b><span>6 个证券</span><em>运行中</em></div>
            <footer><span>事实 → 纪律 → 计划 → 复盘</span></footer>
          </div>
          <div class="product-copy">
            <p class="product-meta">桌面应用 · 暂未公开</p>
            <h3>PositionWise</h3>
            <p>面向个人 A 股与场内 ETF 交易的本地优先工具，用确定性纪律、盯盘和复盘帮助用户稳定执行。</p>
            <div class="product-links">
              <NuxtLink to="/products/positionwise" class="card-button">查看产品介绍</NuxtLink>
              <a href="#contact">联系获取安装包</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
      <div data-reveal>
        <p class="section-kicker">联系</p>
        <h2 id="contact-title">有想法，欢迎来聊。</h2>
        <p>如果你对这些产品感兴趣，或者有想一起讨论的问题，可以通过 GitHub 或微信找到我。</p>
      </div>
      <div class="contact-list" data-reveal>
        <a href="https://github.com/zhxqc" target="_blank" rel="noreferrer"><span>GitHub</span><b>github.com/zhxqc ↗</b></a>
        <div class="wechat-contact">
          <span>微信</span>
          <figure>
            <a href="https://img.imnice.top/img/2026/08/17-2032-lmmg2e.jpg" target="_blank" rel="noreferrer" aria-label="打开恒言Tech 的微信二维码原图">
              <img src="https://img.imnice.top/img/2026/08/17-2032-lmmg2e.jpg" alt="恒言Tech 的微信二维码" loading="lazy">
            </a>
            <figcaption>微信扫码添加恒言Tech</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const motionReady = ref(false)
let revealObserver

onMounted(() => {
  motionReady.value = true

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const revealElements = document.querySelectorAll('[data-reveal]')
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    })
  }, { threshold: 0.16 })

  document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element))
})

onUnmounted(() => revealObserver?.disconnect())

useSeoMeta({
  title: '恒言Tech · 独立开发者与产品记录',
  description: '记录恒言Tech 开发的插件、微信小程序、在线工具、桌面应用和一路上的实践。'
})
</script>

<style scoped>
.home-page { background: var(--paper); }

.hero {
  position: relative;
  isolation: isolate;
  width: min(calc(100% - (var(--gutter) * 2)), var(--container));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, .72fr);
  gap: clamp(42px, 7vw, 96px);
  align-items: center;
  padding: 88px 0 96px;
}

.hero::before,
.hero::after { position: absolute; z-index: -1; display: block; content: ''; pointer-events: none; }
.hero::before { top: 80px; bottom: 56px; left: -28px; width: 1px; background: var(--line); }
.hero::after { right: 2%; bottom: 78px; width: 86px; height: 12px; background: #f6c945; transform: rotate(-7deg); }

.hero-copy { max-width: 780px; }
.eyebrow, .section-kicker { margin: 0 0 18px; color: var(--muted); font-size: 13px; font-weight: 600; }
h1 { margin: 0; max-width: 620px; font-family: "Avenir Next", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; font-size: clamp(42px, 3.35vw, 50px); font-weight: 750; line-height: 1.12; }
h1 span { display: block; }
.intro { max-width: 620px; margin: 26px 0 0; color: var(--ink-soft); font-size: 19px; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 36px; }
.primary-button, .text-link { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; text-decoration: none; }
.primary-button { min-width: 180px; padding: 0 24px; background: var(--ink); color: var(--surface); transition: transform 180ms ease, background-color 180ms ease; }
.primary-button:hover { background: #2454ff; transform: translateY(-4px); }
.text-link { border-bottom: 1px solid var(--ink); transition: color 180ms ease, border-color 180ms ease; }
.text-link:hover { color: #2454ff; border-color: #2454ff; }

.editorial-reveal { transform: translateY(0); }
.motion-ready .editorial-reveal { animation: editorial-rise 720ms cubic-bezier(.22,.8,.25,1) forwards; }
.motion-ready .editorial-reveal-1 { animation-delay: 80ms; }
.motion-ready .editorial-reveal-2 { animation-delay: 180ms; }
.motion-ready .editorial-reveal-3 { animation-delay: 300ms; }
.motion-ready .editorial-reveal-4 { animation-delay: 430ms; }

.editorial-reveal-2 { opacity: 1; transform: none; animation: none; }
.editorial-reveal-2 span { display: block; }
.motion-ready .editorial-reveal-2 span { opacity: 0; transform: translateY(24px); }
.motion-ready .editorial-reveal-2 span { animation: editorial-rise 800ms cubic-bezier(.22,.8,.25,1) forwards; }
.motion-ready .editorial-reveal-2 span:last-child { animation-delay: 90ms; }

.hero-visual { position: relative; min-height: 390px; overflow: hidden; border: 1px solid #b9b6ae; background: var(--surface); isolation: isolate; }
.hero-art-noise { position: absolute; inset: 0; z-index: -1; opacity: .26; pointer-events: none; background-image: radial-gradient(#a9a69d .65px, transparent .65px); background-size: 8px 8px; mask-image: linear-gradient(to bottom, #000, transparent 82%); }
.hero-visual::before { position: absolute; top: 0; bottom: 0; left: 44%; width: 16%; display: block; content: ''; background: rgba(36,84,255,.08); transform: skewX(-18deg); pointer-events: none; }
.hero-art-cross { position: absolute; top: 50%; left: 50%; z-index: 2; width: 174px; height: 174px; transform: translate(-50%, -50%) rotate(15deg); }
.hero-art-cross i { position: absolute; display: block; width: 40px; height: 156px; border: 1px solid #2454ff; }
.hero-art-cross i:first-child { left: 32px; top: 10px; }
.hero-art-cross i:nth-child(2) { right: 32px; bottom: 10px; border-color: var(--ink); }
.hero-art-cross b { position: absolute; left: 37px; top: 75px; width: 100px; height: 24px; background: #f6c945; }
.hero-art-frame { position: absolute; top: 50%; left: 50%; z-index: 1; width: min(220px, 62%); height: 260px; display: flex; flex-direction: column; justify-content: space-between; padding: 24px; border: 1px solid rgba(17,17,17,.45); color: var(--ink); transform: translate(-50%, -50%); }
.hero-art-frame span { font-size: 28px; font-weight: 750; line-height: 1; }
.hero-art-frame small { color: var(--muted); font-size: 10px; }
.hero-art-orbit { position: absolute; left: 50%; bottom: 9%; z-index: 0; width: min(210px, 68%); height: 88px; border: 1px solid #b9b6ae; border-radius: 50%; transform: translateX(-50%) rotate(-20deg); }
.hero-art-orbit i { position: absolute; width: 9px; height: 9px; background: #2454ff; }
.hero-art-orbit i:first-child { left: 24px; top: 22px; }
.hero-art-orbit i:nth-child(2) { right: 34px; top: 11px; background: #f6c945; }
.hero-art-orbit i:last-child { left: 90px; bottom: 10px; background: var(--ink); }
.motion-ready .hero-visual { animation: visual-rise 700ms cubic-bezier(.22,.8,.25,1) both; }
.motion-ready .hero-art-cross { animation: art-cross-in 800ms 220ms cubic-bezier(.22,.8,.25,1) both, art-cross-float 6s 1.4s ease-in-out infinite; }
.motion-ready .hero-art-frame { animation: art-frame-in 850ms 120ms cubic-bezier(.22,.8,.25,1) both; }
.motion-ready .hero-art-orbit { animation: art-orbit-in 800ms 420ms cubic-bezier(.22,.8,.25,1) both; }

[data-reveal] { transition: opacity 700ms cubic-bezier(.22,.8,.25,1), transform 700ms cubic-bezier(.22,.8,.25,1); }
.motion-ready [data-reveal] { opacity: 0; transform: translateY(28px); }
.motion-ready [data-reveal].is-visible { opacity: 1; transform: translateY(0); }

.products-section { padding: 88px max(var(--gutter), calc((100% - var(--container)) / 2)); border-top: 1px solid var(--line); background: var(--surface); }
.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; margin-bottom: 40px; }
.section-heading h2, .contact-section h2 { margin: 0; font-size: 42px; line-height: 1.2; }
.section-heading > p { max-width: 420px; margin: 0; color: var(--muted); }
.product-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.product-card { display: flex; flex-direction: column; border: 1px solid var(--line); background: var(--surface); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
.product-card:hover { border-color: var(--ink); box-shadow: 7px 7px 0 var(--line); transform: translateY(-5px); }
.product-visual { min-height: 350px; display: grid; place-items: center; }
.dsh-visual { display: flex; flex-direction: column; align-items: stretch; justify-content: space-between; padding: 28px; background: var(--ink); color: var(--surface); }
.terminal-top { display: flex; justify-content: space-between; color: #aaa8a3; font-size: 11px; }
.dsh-visual strong { font-size: 46px; line-height: 1.05; }
.dsh-visual code { padding: 16px; border: 1px solid #555; color: #d6d4cf; font-family: inherit; font-size: 12px; }
.mengya-visual { background: var(--paper); }
.phone { width: 250px; padding: 18px; border: 2px solid var(--ink); background: var(--surface); }
.phone header { display: grid; grid-template-columns: 1fr auto 1fr; padding-bottom: 15px; border-bottom: 2px solid var(--ink); font-size: 10px; }
.phone header span:last-child { text-align: right; }
.phone > div { min-height: 56px; display: grid; grid-template-columns: 15px 1fr auto; gap: 10px; align-items: center; border-bottom: 1px solid var(--line); font-size: 11px; }
.phone i { width: 10px; height: 10px; border: 1px solid var(--ink); border-radius: 50%; }
.phone > div:nth-child(3) i { background: var(--ink); }
.phone footer { margin-top: 16px; padding: 10px; background: var(--ink); color: var(--surface); font-size: 11px; text-align: center; }
.puppy-visual { align-content: center; justify-items: start; padding: 42px; background: #fff8e8; color: #302817; }
.puppy-visual img { width: 80px; height: 80px; object-fit: contain; }
.puppy-visual > p { margin: 24px 0 18px; font-size: 20px; font-weight: 700; }
.weight-result { width: 100%; padding: 18px 0; border-top: 1px solid #d9cda9; border-bottom: 1px solid #d9cda9; }
.weight-result span, .weight-result strong { display: block; }
.weight-result span, .puppy-visual small { color: #746748; font-size: 11px; }
.weight-result strong { margin-top: 4px; color: #a86616; font-size: 34px; }
.puppy-visual small { margin-top: 14px; }
.positionwise-visual { align-content: start; justify-items: stretch; padding: 28px; background: #171917; color: #f3f4ef; }
.positionwise-visual header { display: flex; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid #3c403b; color: #aeb3aa; font-size: 10px; }
.portfolio-total { display: grid; grid-template-columns: 1fr auto; gap: 4px 16px; padding: 34px 0 26px; }
.portfolio-total small { grid-column: 1 / -1; color: #aeb3aa; }
.portfolio-total strong { font-size: 29px; }
.portfolio-total span { align-self: end; color: #d6d9d2; font-size: 11px; }
.market-row { min-height: 58px; display: grid; grid-template-columns: 1fr auto auto; gap: 14px; align-items: center; border-top: 1px solid #3c403b; font-size: 11px; }
.market-row span { color: #aeb3aa; }
.market-row em { color: #e06b62; font-style: normal; }
.market-row:last-of-type em { color: #75aa76; }
.positionwise-visual footer { margin-top: 28px; padding-top: 16px; border-top: 1px solid #3c403b; color: #aeb3aa; font-size: 10px; }
.product-copy { flex: 1; display: flex; flex-direction: column; padding: 28px; }
.product-meta { margin: 0 0 14px; color: var(--muted); font-size: 12px; font-weight: 600; }
.product-copy h3 { margin: 0; font-size: 27px; line-height: 1.25; }
.product-copy > p:not(.product-meta) { margin: 18px 0 0; color: var(--ink-soft); }
.product-links { display: flex; flex-wrap: wrap; align-items: center; gap: 20px; margin-top: auto; padding-top: 28px; }
.product-links a, .product-links span { min-height: 46px; display: inline-flex; align-items: center; font-size: 13px; font-weight: 600; text-decoration: none; }
.card-button { padding: 0 18px; background: var(--ink); color: var(--surface); }
.product-links span { color: var(--muted); }

.contact-section { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; display: grid; grid-template-columns: 1fr 0.8fr; gap: 80px; align-items: end; padding: 88px 0 96px; }
.contact-section > div:first-child > p:last-child { max-width: 560px; margin: 22px 0 0; color: var(--ink-soft); }
.contact-list { border-top: 1px solid var(--ink); }
.contact-list > * { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 1px solid var(--ink); font-size: 13px; text-decoration: none; }
.contact-list span { color: var(--muted); }
.wechat-contact { align-items: flex-start; padding: 20px 0; }
.wechat-contact figure { width: 150px; margin: 0; text-align: center; }
.wechat-contact figure a { display: block; padding: 8px; border: 1px solid var(--line); background: #fff; }
.wechat-contact img { width: 100%; aspect-ratio: 1; display: block; object-fit: contain; }
.wechat-contact figcaption { margin-top: 9px; color: var(--muted); font-size: 11px; }

@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; gap: 42px; padding-top: 64px; padding-bottom: 72px; }
  .hero::before { left: -16px; }
  .hero::after { right: 1%; bottom: 50px; width: 58px; height: 9px; }
  h1 { font-size: 42px; }
  .intro { font-size: 17px; }
  .products-section { padding-top: 68px; padding-bottom: 72px; }
  .section-heading { align-items: flex-start; flex-direction: column; gap: 18px; }
  .section-heading h2, .contact-section h2 { font-size: 34px; }
  .product-grid, .contact-section { grid-template-columns: 1fr; }
  .product-visual { min-height: 300px; }
  .contact-section { gap: 44px; padding-top: 68px; padding-bottom: 72px; }
  .wechat-contact figure { width: 132px; }
  .hero-visual { min-height: 300px; }
  .hero-art-cross { top: 50%; left: 50%; right: auto; transform: translate(-50%, -50%) scale(.78) rotate(15deg); transform-origin: center; }
  .hero-art-frame { top: 50%; left: 50%; right: auto; width: 190px; height: 220px; padding: 18px; }
  .hero-art-frame span { font-size: 23px; }
  .hero-art-orbit { left: 50%; right: auto; bottom: 5%; transform: translateX(-50%) scale(.78) rotate(-20deg); transform-origin: center; }
}

@keyframes editorial-rise {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes visual-rise {
  from { opacity: 0; transform: translateY(26px) scale(.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes art-cross-in {
  from { opacity: 0; transform: translate(-50%, -50%) rotate(28deg) scale(.78); }
  to { opacity: 1; transform: translate(-50%, -50%) rotate(15deg) scale(1); }
}

@keyframes art-cross-float {
  0%, 100% { transform: translate(-50%, -50%) rotate(15deg); }
  50% { transform: translate(-50%, calc(-50% - 6px)) rotate(12deg); }
}

@keyframes art-frame-in {
  from { opacity: 0; transform: translate(calc(-50% + 18px), calc(-50% + 12px)); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

@keyframes art-orbit-in {
  from { opacity: 0; transform: translateX(-50%) rotate(-28deg) scale(.78); }
  to { opacity: 1; transform: translateX(-50%) rotate(-20deg) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .editorial-reveal,
  .motion-ready .editorial-reveal,
  .motion-ready [data-reveal],
  .editorial-reveal-2 span,
  .motion-ready .editorial-reveal-2 span,
  .motion-ready .hero-visual,
  .motion-ready .hero-art-cross,
  .motion-ready .hero-art-frame,
  .motion-ready .hero-art-orbit { opacity: 1; transform: none; animation: none; transition: none; }
  .primary-button, .text-link, .product-card { transition: none; }
  .hero-visual::before { animation: none; transform: none; opacity: 1; }
}
</style>
