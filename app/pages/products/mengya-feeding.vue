<template>
  <div class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <NuxtLink to="/#products" class="back-link">← 返回产品</NuxtLink>
      <p class="product-meta">原生微信小程序 · 家庭照护记录</p>
      <h1 id="product-title">萌芽喂养</h1>
      <p class="product-intro">记录宝宝的喂养、睡眠与成长，也让家人之间的照护交接更清楚。</p>
      <div class="hero-actions">
        <a href="#article" class="primary-button">阅读完整介绍</a>
        <a href="#use" class="text-link">获取小程序</a>
      </div>

      <div class="app-preview" role="img" aria-label="萌芽喂养小程序照护记录界面示意">
        <div class="preview-copy">
          <p>今天的照护</p>
          <strong>一笔记录，<br>让家人接着照顾。</strong>
          <span>喂养 · 睡眠 · 尿布 · 成长 · 任意记</span>
          <dl>
            <div><dt>12</dt><dd>今日记录</dd></div>
            <div><dt>7 天</dt><dd>趋势回顾</dd></div>
            <div><dt>24h</dt><dd>照护交接</dd></div>
          </dl>
        </div>

        <div class="phone">
          <header><span>09:41</span><b>萌芽喂养</b><span>今天</span></header>
          <div class="baby-row"><span>宝宝今天</span><b>12 条照护记录</b></div>
          <div class="record active"><i></i><span><b>睡眠中</b><small>08:55 开始</small></span><em>46 分钟</em></div>
          <div class="record"><i></i><span><b>母乳亲喂</b><small>08:20</small></span><em>18 分钟</em></div>
          <div class="record"><i></i><span><b>换尿布</b><small>07:48</small></span><em>已记录</em></div>
          <div class="quick-actions"><span>喂养</span><span>睡眠</span><span>尿布</span><span>更多</span></div>
          <footer>＋ 记录一次照护</footer>
        </div>
      </div>
    </section>

    <section class="feature-strip" aria-label="核心能力">
      <article><span>01</span><h2>快速记录</h2><p>八类高频入口，减少重复填写。</p></article>
      <article><span>02</span><h2>家庭协作</h2><p>共同查看与记录，换人照顾更清楚。</p></article>
      <article><span>03</span><h2>回顾交接</h2><p>查看趋势，生成照护卡与阶段摘要。</p></article>
      <article><span>04</span><h2>数据可信</h2><p>弱网快照、自动重试和隐私控制。</p></article>
    </section>

    <article id="article" class="article-content prose">
      <ContentRenderer :value="page" />
    </article>

    <section id="use" class="use-section" aria-labelledby="use-title">
      <div>
        <p>如何使用</p>
        <h2 id="use-title">微信扫码，打开即用。</h2>
        <p>打开微信扫描右侧小程序码，即可进入萌芽喂养。手机访问时可以长按图片识别。</p>
      </div>
      <figure class="qr-code">
        <a href="https://img.imnice.top/img/2026/08/17-2032-loL1cR.jpg" target="_blank" rel="noreferrer" aria-label="打开萌芽喂养小程序码原图">
          <img src="https://img.imnice.top/img/2026/08/17-2032-loL1cR.jpg" alt="萌芽喂养微信小程序码" loading="lazy">
        </a>
        <figcaption>微信扫码进入萌芽喂养</figcaption>
      </figure>
    </section>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('product-mengya-feeding', () =>
  queryCollection('content').path('/products/mengya-feeding').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: '产品介绍不存在' })
}

useSeoMeta({
  title: () => `${page.value.title} · 恒言Tech`,
  description: () => page.value.description
})
</script>

<style scoped>
.product-page { background: var(--surface); }
.product-hero, .feature-strip, .use-section { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; }
.product-hero { padding: 64px 0 88px; }
.back-link { min-height: 44px; display: inline-flex; align-items: center; margin-bottom: 46px; color: var(--muted); font-size: 13px; text-decoration: none; }
.product-meta, .use-section > div > p:first-child { margin: 0 0 16px; color: var(--muted); font-size: 13px; font-weight: 600; }
h1 { margin: 0; font-size: 62px; line-height: 1.1; }
.product-intro { max-width: 760px; margin: 24px 0 0; color: var(--ink-soft); font-size: 19px; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 34px; }
.primary-button, .text-link { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; text-decoration: none; }
.primary-button { min-width: 180px; padding: 0 22px; background: var(--ink); color: var(--surface); }
.text-link { border-bottom: 1px solid var(--ink); }

.app-preview { min-height: 540px; display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 80px; align-items: center; margin-top: 64px; padding: 60px 9%; border: 1px solid #cfd4c9; background: #f3f0e7; }
.preview-copy > p { margin: 0 0 18px; color: #657060; font-size: 13px; font-weight: 600; }
.preview-copy > strong { display: block; max-width: 520px; font-size: 40px; line-height: 1.25; }
.preview-copy > span { display: block; margin-top: 18px; color: #657060; font-size: 14px; }
.preview-copy dl { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: 480px; margin: 44px 0 0; border-top: 1px solid #bbc3b5; }
.preview-copy dl > div { padding: 18px 12px 0 0; }
.preview-copy dt { font-size: 20px; font-weight: 700; }
.preview-copy dd { margin: 4px 0 0; color: #657060; font-size: 11px; }
.phone { width: 300px; justify-self: end; padding: 20px; border: 2px solid #243023; background: #fffdf8; box-shadow: 14px 14px 0 #dbe2d3; }
.phone header { display: grid; grid-template-columns: 1fr auto 1fr; padding-bottom: 16px; border-bottom: 2px solid #243023; font-size: 10px; }
.phone header span:last-child { text-align: right; }
.baby-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 0 12px; color: #657060; font-size: 10px; }
.baby-row b { color: #243023; font-size: 13px; }
.record { min-height: 58px; display: grid; grid-template-columns: 15px 1fr auto; gap: 10px; align-items: center; border-bottom: 1px solid #d9ddd4; }
.record i { width: 10px; height: 10px; border: 1px solid #6f9e60; border-radius: 50%; }
.record.active i { background: #6f9e60; }
.record span b, .record span small { display: block; }
.record span b { font-size: 11px; }
.record span small, .record em { color: #657060; font-size: 10px; font-style: normal; }
.quick-actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; padding: 16px 0; }
.quick-actions span { padding: 8px 2px; background: #edf1e9; color: #43503f; font-size: 9px; text-align: center; }
.phone footer { padding: 11px; background: #6f9e60; color: #fff; font-size: 11px; font-weight: 600; text-align: center; }

.feature-strip { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.feature-strip article { min-height: 210px; padding: 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.feature-strip span { color: var(--muted); font-size: 12px; }
.feature-strip h2 { margin: 34px 0 12px; font-size: 21px; }
.feature-strip p { margin: 0; color: var(--ink-soft); font-size: 14px; }

.article-content { width: min(calc(100% - (var(--gutter) * 2)), 820px); margin: 0 auto; padding: 88px 0 104px; }
.article-content :deep(> div > p:first-child) { margin-top: 0; font-size: 19px; }
.article-content :deep(h2) { margin-top: 64px; padding-top: 18px; border-top: 1px solid var(--line); font-size: 30px; }
.article-content :deep(p), .article-content :deep(li) { line-height: 1.85; }
.article-content :deep(li) { margin-bottom: 8px; }

.use-section { display: grid; grid-template-columns: 1fr 260px; gap: 80px; align-items: center; padding: 72px 0 84px; border-top: 1px solid var(--line); }
.use-section h2 { max-width: 600px; margin: 0; font-size: 38px; line-height: 1.2; }
.use-section > div:first-child > p:last-child { max-width: 600px; margin: 24px 0 0; color: var(--ink-soft); }
.qr-code { width: 260px; margin: 0; text-align: center; }
.qr-code a { display: block; padding: 10px; border: 1px solid var(--line); background: #fff; }
.qr-code img { width: 100%; aspect-ratio: 1; display: block; object-fit: contain; }
.qr-code figcaption { margin-top: 12px; color: var(--muted); font-size: 12px; }

@media (max-width: 760px) {
  .product-hero { padding-top: 44px; padding-bottom: 64px; }
  .back-link { margin-bottom: 34px; }
  h1 { font-size: 42px; }
  .product-intro { font-size: 17px; }
  .app-preview { grid-template-columns: 1fr; gap: 40px; margin-top: 48px; padding: 40px 20px; }
  .preview-copy > strong { font-size: 32px; }
  .preview-copy dl { margin-top: 30px; }
  .phone { width: min(100%, 300px); justify-self: center; box-shadow: 9px 9px 0 #dbe2d3; }
  .feature-strip { grid-template-columns: repeat(2, 1fr); }
  .feature-strip article { min-height: 190px; padding: 22px; }
  .article-content { padding-top: 64px; padding-bottom: 76px; }
  .article-content :deep(h2) { margin-top: 50px; font-size: 26px; }
  .use-section { grid-template-columns: 1fr; gap: 36px; padding-top: 56px; padding-bottom: 64px; }
  .use-section h2 { font-size: 32px; }
  .qr-code { width: min(100%, 260px); }
}

@media (max-width: 430px) {
  .feature-strip { grid-template-columns: 1fr; }
  .feature-strip article { min-height: 160px; }
  .preview-copy dl { grid-template-columns: 1fr; }
  .preview-copy dl > div { display: grid; grid-template-columns: 70px 1fr; align-items: baseline; }
}
</style>
