<template>
  <div class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <NuxtLink to="/#products" class="back-link">← 返回产品</NuxtLink>
      <p class="product-meta">英文工具站 · 免费使用 · 已公开</p>
      <h1 id="product-title">PuppyWeightCalc</h1>
      <p class="product-intro">根据幼犬年龄、当前体重、品种与成长模式，估算成年后的典型体重区间。</p>
      <div class="hero-actions">
        <a href="https://www.puppyweightcalc.com" target="_blank" rel="noreferrer" class="primary-button">打开在线工具 ↗</a>
        <a href="#article" class="text-link">阅读产品介绍</a>
      </div>

      <div class="calculator-preview" role="img" aria-label="PuppyWeightCalc 幼犬成年体重估算界面示意">
        <header>
          <div><img src="https://www.puppyweightcalc.com/logo.svg" alt=""><b>Puppy Weight Calculator</b></div>
          <span>Free · No sign-up</span>
        </header>
        <div class="calculator-body">
          <div class="input-panel">
            <p>Tell us about your puppy</p>
            <label><span>Current age</span><b>16 weeks</b></label>
            <label><span>Current weight</span><b>32 lb</b></label>
            <label><span>Breed</span><b>Labrador Retriever</b></label>
            <div class="calculate-button">Calculate adult weight</div>
          </div>
          <div class="result-panel">
            <p>Estimated adult weight</p>
            <strong>58–72 <small>lb</small></strong>
            <div class="growth-bar"><i></i></div>
            <dl>
              <div><dt>Growth stage</dt><dd>Adolescent</dd></div>
              <div><dt>Size class</dt><dd>Large</dd></div>
              <div><dt>Confidence</dt><dd>Higher</dd></div>
            </dl>
            <span>Based on age, weight, sex and typical breed growth patterns.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-strip" aria-label="核心特点">
      <article><span>01</span><h2>打开就算</h2><p>无需注册，第一屏直接进入计算。</p></article>
      <article><span>02</span><h2>输出区间</h2><p>提供典型范围，不制造过度精确感。</p></article>
      <article><span>03</span><h2>规则可解释</h2><p>确定性计算，相同输入得到相同结果。</p></article>
      <article><span>04</span><h2>隐私克制</h2><p>精确体重与结果不发送给分析平台。</p></article>
    </section>

    <article id="article" class="article-content prose">
      <ContentRenderer :value="page" />
    </article>

    <section class="visit-section" aria-labelledby="visit-title">
      <div>
        <p>在线工具</p>
        <h2 id="visit-title">免费使用，无需注册。</h2>
        <span>英文界面，适合手机和桌面浏览器。</span>
      </div>
      <a href="https://www.puppyweightcalc.com" target="_blank" rel="noreferrer" class="primary-button">访问 puppyweightcalc.com ↗</a>
    </section>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('product-puppy-weight-calc', () =>
  queryCollection('content').path('/products/puppy-weight-calc').first()
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
.product-hero, .feature-strip, .visit-section { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; }
.product-hero { padding: 64px 0 88px; }
.back-link { min-height: 44px; display: inline-flex; align-items: center; margin-bottom: 46px; color: var(--muted); font-size: 13px; text-decoration: none; }
.product-meta, .visit-section p { margin: 0 0 16px; color: var(--muted); font-size: 13px; font-weight: 600; }
h1 { margin: 0; font-size: 60px; line-height: 1.1; overflow-wrap: anywhere; }
.product-intro { max-width: 760px; margin: 24px 0 0; color: var(--ink-soft); font-size: 19px; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 34px; }
.primary-button, .text-link { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; text-decoration: none; }
.primary-button { padding: 0 22px; background: #28574b; color: #fff; }
.text-link { border-bottom: 1px solid var(--ink); }

.calculator-preview { margin-top: 64px; border: 1px solid #d5cba9; background: #fffdf7; color: #2f2a1e; }
.calculator-preview > header { min-height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 0 26px; border-bottom: 1px solid #d5cba9; color: #726744; font-size: 12px; }
.calculator-preview > header div { display: flex; align-items: center; gap: 12px; color: #2f2a1e; }
.calculator-preview > header img { width: 34px; height: 34px; object-fit: contain; }
.calculator-body { min-height: 430px; display: grid; grid-template-columns: 0.9fr 1.1fr; }
.input-panel, .result-panel { padding: 42px; }
.input-panel { border-right: 1px solid #d5cba9; }
.input-panel > p, .result-panel > p { margin: 0 0 24px; color: #726744; font-size: 12px; font-weight: 600; }
.input-panel label { min-height: 62px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-top: 1px solid #e3dcc6; font-size: 13px; }
.input-panel label span { color: #726744; }
.calculate-button { margin-top: 22px; padding: 15px 18px; background: #f4b942; font-size: 13px; font-weight: 700; text-align: center; }
.result-panel { background: #f7f9f4; }
.result-panel > strong { display: block; color: #28574b; font-size: 58px; line-height: 1; }
.result-panel > strong small { font-size: 18px; }
.growth-bar { height: 8px; margin: 28px 0 30px; background: #dfe8e3; }
.growth-bar i { width: 62%; height: 100%; display: block; background: #f4b942; }
.result-panel dl { margin: 0; border-top: 1px solid #d5ded8; }
.result-panel dl > div { min-height: 52px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #d5ded8; font-size: 12px; }
.result-panel dt { color: #60716b; }
.result-panel dd { margin: 0; font-weight: 700; }
.result-panel > span { display: block; margin-top: 22px; color: #60716b; font-size: 11px; }

.feature-strip { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.feature-strip article { min-height: 205px; padding: 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.feature-strip article > span { color: var(--muted); font-size: 12px; }
.feature-strip h2 { margin: 32px 0 12px; font-size: 21px; }
.feature-strip p { margin: 0; color: var(--ink-soft); font-size: 14px; }

.article-content { width: min(calc(100% - (var(--gutter) * 2)), 820px); margin: 0 auto; padding: 88px 0 104px; }
.article-content :deep(> div > p:first-child) { margin-top: 0; font-size: 19px; }
.article-content :deep(h2) { margin-top: 64px; padding-top: 18px; border-top: 1px solid var(--line); font-size: 30px; }
.article-content :deep(p), .article-content :deep(li) { line-height: 1.85; }

.visit-section { display: flex; align-items: center; justify-content: space-between; gap: 48px; padding: 72px 0 84px; border-top: 1px solid var(--line); }
.visit-section h2 { margin: 0; font-size: 38px; }
.visit-section span { display: block; margin-top: 16px; color: var(--ink-soft); }

@media (max-width: 760px) {
  .product-hero { padding-top: 44px; padding-bottom: 64px; }
  .back-link { margin-bottom: 34px; }
  h1 { font-size: 40px; }
  .product-intro { font-size: 17px; }
  .calculator-preview { margin-top: 48px; }
  .calculator-preview > header { align-items: flex-start; flex-direction: column; justify-content: center; padding: 14px 18px; }
  .calculator-body { grid-template-columns: 1fr; }
  .input-panel, .result-panel { padding: 28px 20px; }
  .input-panel { border-right: 0; border-bottom: 1px solid #d5cba9; }
  .result-panel > strong { font-size: 46px; }
  .feature-strip { grid-template-columns: repeat(2, 1fr); }
  .feature-strip article { min-height: 185px; padding: 22px; }
  .article-content { padding-top: 64px; padding-bottom: 76px; }
  .article-content :deep(h2) { margin-top: 50px; font-size: 26px; }
  .visit-section { align-items: flex-start; flex-direction: column; padding-top: 56px; padding-bottom: 64px; }
  .visit-section h2 { font-size: 32px; }
}

@media (max-width: 430px) {
  .feature-strip { grid-template-columns: 1fr; }
  .feature-strip article { min-height: 155px; }
}
</style>
