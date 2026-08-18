<template>
  <div class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <NuxtLink to="/#products" class="back-link">← 返回产品</NuxtLink>
      <p class="product-meta">本地优先桌面应用 · Windows / macOS · 暂未公开</p>
      <h1 id="product-title">PositionWise</h1>
      <p class="product-intro">把交易事实、纪律、计划、盯盘与复盘放进一条可追溯的个人工作流。</p>
      <div class="hero-actions">
        <a href="#article" class="primary-button">阅读完整介绍</a>
        <a href="#access" class="text-link">联系获取安装包</a>
      </div>

      <div class="workbench-preview" role="img" aria-label="PositionWise 交易工作台界面示意">
        <header><div><i></i><i></i><i></i></div><b>PositionWise</b><span>本地数据 · 盯盘运行中</span></header>
        <div class="workbench-body">
          <aside><strong>总览</strong><span>仓位管理</span><span>设置</span><small>LOCAL FIRST</small></aside>
          <main>
            <div class="account-heading"><div><small>账户总额</small><strong>¥ 286,420.00</strong></div><span>仓位 63%</span></div>
            <div class="metric-row"><div><small>持仓市值</small><b>¥ 180,444</b></div><div><small>可用资金</small><b>¥ 105,976</b></div><div><small>待复核风险</small><b class="risk">2</b></div></div>
            <div class="decision-list">
              <p>当前决策</p>
              <div><b>510300 沪深300ETF</b><span>继续观察</span><em>纪律通过</em></div>
              <div><b>600519 贵州茅台</b><span>优先复核</span><em class="danger">风险事件</em></div>
              <div><b>159915 创业板ETF</b><span>条件盯盘</span><em>运行中</em></div>
            </div>
          </main>
        </div>
        <footer><span>事实 → 纪律 → 计划 → 复盘</span><b>不连接券商 · 不自动下单</b></footer>
      </div>
    </section>

    <section class="feature-strip" aria-label="核心能力">
      <article><span>01</span><h2>事实先行</h2><p>持仓、成交和行情不会被 AI 改写。</p></article>
      <article><span>02</span><h2>纪律门禁</h2><p>风险、仓位、止损与交易规则确定执行。</p></article>
      <article><span>03</span><h2>后台盯盘</h2><p>桌面驻留检查已确认的条件和风险。</p></article>
      <article><span>04</span><h2>闭环复盘</h2><p>分别评价判断、执行和结果，积累样本。</p></article>
    </section>

    <article id="article" class="article-content prose">
      <ContentRenderer :value="page" />
    </article>

    <section id="access" class="access-section" aria-labelledby="access-title">
      <div>
        <p>获取安装包</p>
        <h2 id="access-title">暂未公开，联系获取。</h2>
        <span>微信扫码联系恒言，并注明需要 Windows 还是 macOS 版本。安装包不会通过公开下载页分发。</span>
      </div>
      <figure>
        <a href="https://img.imnice.top/img/2026/08/17-2032-lmmg2e.jpg" target="_blank" rel="noreferrer" aria-label="打开恒言的微信二维码原图">
          <img src="https://img.imnice.top/img/2026/08/17-2032-lmmg2e.jpg" alt="恒言的微信二维码" loading="lazy">
        </a>
        <figcaption>微信扫码联系恒言</figcaption>
      </figure>
    </section>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('product-positionwise', () =>
  queryCollection('content').path('/products/positionwise').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: '产品介绍不存在' })
}

useSeoMeta({
  title: () => `${page.value.title} · 恒言`,
  description: () => page.value.description
})
</script>

<style scoped>
.product-page { background: var(--surface); }
.product-hero, .feature-strip, .access-section { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; }
.product-hero { padding: 64px 0 88px; }
.back-link { min-height: 44px; display: inline-flex; align-items: center; margin-bottom: 46px; color: var(--muted); font-size: 13px; text-decoration: none; }
.product-meta, .access-section > div > p { margin: 0 0 16px; color: var(--muted); font-size: 13px; font-weight: 600; }
h1 { margin: 0; font-size: 62px; line-height: 1.1; overflow-wrap: anywhere; }
.product-intro { max-width: 760px; margin: 24px 0 0; color: var(--ink-soft); font-size: 19px; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 34px; }
.primary-button, .text-link { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; text-decoration: none; }
.primary-button { min-width: 180px; padding: 0 22px; background: var(--ink); color: var(--surface); }
.text-link { border-bottom: 1px solid var(--ink); }

.workbench-preview { margin-top: 64px; border: 1px solid #3d403c; background: #181a18; color: #f1f2ed; }
.workbench-preview > header, .workbench-preview > footer { min-height: 54px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; padding: 0 22px; color: #aeb3aa; font-size: 11px; }
.workbench-preview > header { border-bottom: 1px solid #3d403c; }
.workbench-preview > header div { display: flex; gap: 7px; }
.workbench-preview > header i { width: 8px; height: 8px; border: 1px solid #757a73; border-radius: 50%; }
.workbench-preview > header span { text-align: right; }
.workbench-preview > footer { grid-template-columns: 1fr auto; border-top: 1px solid #3d403c; }
.workbench-preview > footer b { color: #d9dbd5; }
.workbench-body { min-height: 420px; display: grid; grid-template-columns: 180px 1fr; }
.workbench-body aside { display: flex; flex-direction: column; gap: 4px; padding: 28px 18px; border-right: 1px solid #3d403c; color: #9da29a; font-size: 12px; }
.workbench-body aside strong, .workbench-body aside span { padding: 12px; }
.workbench-body aside strong { background: #30332f; color: #fff; }
.workbench-body aside small { margin-top: auto; padding: 12px; color: #747971; }
.workbench-body main { padding: 34px; }
.account-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; padding-bottom: 28px; border-bottom: 1px solid #3d403c; }
.account-heading small, .account-heading strong { display: block; }
.account-heading small { color: #9da29a; }
.account-heading strong { margin-top: 6px; font-size: 32px; }
.account-heading > span { color: #c6c9c2; font-size: 12px; }
.metric-row { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid #3d403c; }
.metric-row > div { padding: 22px 18px 22px 0; }
.metric-row small, .metric-row b { display: block; }
.metric-row small { color: #8e948b; font-size: 10px; }
.metric-row b { margin-top: 8px; font-size: 15px; }
.metric-row .risk { color: #e06b62; }
.decision-list > p { margin: 26px 0 12px; color: #9da29a; font-size: 11px; }
.decision-list > div { min-height: 58px; display: grid; grid-template-columns: 1fr auto 90px; gap: 18px; align-items: center; border-top: 1px solid #363936; font-size: 11px; }
.decision-list > div:last-child { border-bottom: 1px solid #363936; }
.decision-list span { color: #c1c5bd; }
.decision-list em { color: #77a979; font-style: normal; text-align: right; }
.decision-list .danger { color: #e06b62; }

.feature-strip { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.feature-strip article { min-height: 205px; padding: 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.feature-strip article > span { color: var(--muted); font-size: 12px; }
.feature-strip h2 { margin: 32px 0 12px; font-size: 21px; }
.feature-strip p { margin: 0; color: var(--ink-soft); font-size: 14px; }

.article-content { width: min(calc(100% - (var(--gutter) * 2)), 820px); margin: 0 auto; padding: 88px 0 104px; }
.article-content :deep(> div > p:first-child) { margin-top: 0; font-size: 19px; }
.article-content :deep(h2) { margin-top: 64px; padding-top: 18px; border-top: 1px solid var(--line); font-size: 30px; }
.article-content :deep(p), .article-content :deep(li) { line-height: 1.85; }

.access-section { display: grid; grid-template-columns: 1fr 260px; gap: 80px; align-items: center; padding: 72px 0 84px; border-top: 1px solid var(--line); }
.access-section h2 { margin: 0; font-size: 38px; }
.access-section > div > span { max-width: 620px; display: block; margin-top: 20px; color: var(--ink-soft); }
.access-section figure { width: 260px; margin: 0; text-align: center; }
.access-section figure a { display: block; padding: 10px; border: 1px solid var(--line); background: #fff; }
.access-section img { width: 100%; aspect-ratio: 1; display: block; object-fit: contain; }
.access-section figcaption { margin-top: 12px; color: var(--muted); font-size: 12px; }

@media (max-width: 760px) {
  .product-hero { padding-top: 44px; padding-bottom: 64px; }
  .back-link { margin-bottom: 34px; }
  h1 { font-size: 42px; }
  .product-intro { font-size: 17px; }
  .workbench-preview { margin-top: 48px; }
  .workbench-preview > header { grid-template-columns: 1fr auto; }
  .workbench-preview > header div { display: none; }
  .workbench-body { min-height: 500px; grid-template-columns: 1fr; }
  .workbench-body aside { display: grid; grid-template-columns: repeat(3, 1fr); border-right: 0; border-bottom: 1px solid #3d403c; }
  .workbench-body aside small { display: none; }
  .workbench-body main { padding: 24px 18px; }
  .account-heading { align-items: flex-start; flex-direction: column; }
  .metric-row { grid-template-columns: 1fr; }
  .metric-row > div { padding: 14px 0; border-bottom: 1px solid #303330; }
  .decision-list > div { grid-template-columns: 1fr auto; padding: 12px 0; }
  .decision-list em { grid-column: 1 / -1; text-align: left; }
  .workbench-preview > footer { align-items: flex-start; grid-template-columns: 1fr; gap: 4px; padding-top: 12px; padding-bottom: 12px; }
  .feature-strip { grid-template-columns: repeat(2, 1fr); }
  .feature-strip article { min-height: 185px; padding: 22px; }
  .article-content { padding-top: 64px; padding-bottom: 76px; }
  .article-content :deep(h2) { margin-top: 50px; font-size: 26px; }
  .access-section { grid-template-columns: 1fr; gap: 36px; padding-top: 56px; padding-bottom: 64px; }
  .access-section h2 { font-size: 32px; }
  .access-section figure { width: min(100%, 260px); }
}

@media (max-width: 430px) {
  .feature-strip { grid-template-columns: 1fr; }
  .feature-strip article { min-height: 155px; }
}
</style>
