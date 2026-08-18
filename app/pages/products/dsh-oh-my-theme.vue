<template>
  <div class="product-page">
    <section class="product-hero" aria-labelledby="product-title">
      <NuxtLink to="/#products" class="back-link">← 返回产品</NuxtLink>
      <p class="product-meta">npm 插件 · v0.6.0 · 已发布</p>
      <h1 id="product-title">dsh-oh-my-theme</h1>
      <p class="product-intro">为 DeepSeek Harness 网页端打造的主题与文件工作台插件，把主题定制、文件引用、代码预览、Git 只读视图和实时余额放进同一个工作流。</p>
      <div class="hero-actions">
        <a href="#article" class="primary-button">阅读完整介绍</a>
        <a href="https://github.com/zhxqc/dsh-oh-my-theme" target="_blank" rel="noreferrer" class="text-link">GitHub ↗</a>
      </div>

      <div class="workspace-interface" role="img" aria-label="dsh-oh-my-theme 文件工作台界面示意">
        <header><span>项目工作台</span><span>文件&nbsp;&nbsp; Git</span></header>
        <div class="interface-main">
          <aside><i></i><i></i><i></i></aside>
          <div class="file-tree">
            <p>项目文件</p>
            <div><span>⌄</span><b>src</b></div>
            <div class="nested"><span>◇</span><b>components</b></div>
            <div class="nested"><span>·</span><b>app.vue</b></div>
            <div><span>·</span><b>README.md</b></div>
          </div>
          <div class="file-preview">
            <div class="preview-tabs"><span>README.md</span><span>app.vue</span></div>
            <strong># 项目说明</strong>
            <p>在 dsh 中浏览文件、预览代码，<br>并通过 @路径 精确引用上下文。</p>
            <code>@src/app.vue</code>
          </div>
        </div>
        <footer><span>当前分支 main · 2 个文件有变化</span><b>只读工作台</b></footer>
      </div>
    </section>

    <article id="article" class="article-content prose">
      <ContentRenderer :value="page" />
    </article>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('product-dsh-oh-my-theme', () =>
  queryCollection('content').path('/products/dsh-oh-my-theme').first()
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
.product-hero { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; padding: 64px 0 88px; }
.back-link { min-height: 44px; display: inline-flex; align-items: center; margin-bottom: 46px; color: var(--muted); font-size: 13px; text-decoration: none; }
.product-meta { margin: 0 0 16px; color: var(--muted); font-size: 13px; font-weight: 600; }
h1 { margin: 0; font-size: 62px; line-height: 1.1; overflow-wrap: anywhere; }
.product-intro { max-width: 760px; margin: 24px 0 0; color: var(--ink-soft); font-size: 19px; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 34px; }
.primary-button, .text-link { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; text-decoration: none; }
.primary-button { min-width: 180px; padding: 0 22px; background: var(--ink); color: var(--surface); }
.text-link { border-bottom: 1px solid var(--ink); }

.workspace-interface { margin-top: 64px; border: 1px solid #444; background: var(--ink); color: var(--surface); }
.workspace-interface header, .workspace-interface footer { min-height: 54px; display: flex; align-items: center; justify-content: space-between; padding: 0 22px; color: #b8b6b1; font-size: 12px; }
.workspace-interface header { border-bottom: 1px solid #444; }
.workspace-interface footer { border-top: 1px solid #444; }
.workspace-interface footer b { color: var(--surface); }
.interface-main { min-height: 360px; display: grid; grid-template-columns: 64px 0.7fr 1.3fr; }
.interface-main aside { display: grid; align-content: start; justify-content: center; gap: 18px; padding-top: 26px; border-right: 1px solid #444; }
.interface-main aside i { width: 12px; height: 12px; border: 1px solid #aaa; }
.interface-main aside i:first-child { background: var(--surface); }
.file-tree { padding: 28px 22px; border-right: 1px solid #444; }
.file-tree > p { margin: 0 0 18px; color: #b8b6b1; font-size: 12px; }
.file-tree > div { min-height: 42px; display: grid; grid-template-columns: 24px 1fr; align-items: center; border-top: 1px solid #414141; font-size: 12px; }
.file-tree .nested { padding-left: 20px; }
.file-tree span { color: #aaa8a3; }
.file-preview { min-width: 0; padding: 22px 28px; }
.preview-tabs { display: flex; gap: 8px; margin: -22px -28px 34px; border-bottom: 1px solid #444; }
.preview-tabs span { min-height: 46px; display: inline-flex; align-items: center; padding: 0 18px; border-right: 1px solid #444; color: #b8b6b1; font-size: 11px; }
.file-preview > strong { font-size: 25px; }
.file-preview > p { color: #c6c4bf; }
.file-preview code { display: block; margin-top: 34px; padding: 14px; border: 1px solid #505050; color: #dedcd7; font-family: inherit; font-size: 12px; }

.article-content { width: min(calc(100% - (var(--gutter) * 2)), 820px); margin: 0 auto; padding: 88px 0 104px; border-top: 1px solid var(--line); }
.article-content :deep(> div > p:first-child) { margin-top: 0; font-size: 19px; }
.article-content :deep(h2) { margin-top: 64px; padding-top: 18px; border-top: 1px solid var(--line); font-size: 30px; }
.article-content :deep(h3) { margin-top: 38px; font-size: 21px; }
.article-content :deep(p), .article-content :deep(li) { line-height: 1.85; }
.article-content :deep(pre) { margin: 24px 0; }

@media (max-width: 720px) {
  .product-hero { padding-top: 44px; padding-bottom: 64px; }
  .back-link { margin-bottom: 34px; }
  h1 { font-size: 42px; }
  .product-intro { font-size: 17px; }
  .workspace-interface { margin-top: 48px; }
  .interface-main { min-height: 440px; grid-template-columns: 44px 1fr; }
  .file-tree { border-right: 0; }
  .file-preview { grid-column: 1 / -1; border-top: 1px solid #444; }
  .workspace-interface footer { align-items: flex-start; flex-direction: column; justify-content: center; gap: 3px; }
  .article-content { padding-top: 64px; padding-bottom: 76px; }
  .article-content :deep(h2) { margin-top: 50px; font-size: 26px; }
}
</style>
