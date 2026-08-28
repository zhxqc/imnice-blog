<template>
  <div class="home-page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span aria-hidden="true">●</span> 独立开发者 · 产品与实践记录</p>
          <h1 id="hero-title">把遇到的问题，做成可以被使用的小产品。</h1>
          <p class="lead">这里记录产品构建、AI 工具、工程实践与真实验证。保留来源、过程和边界，也保留那些并不顺利的部分。</p>
          <div class="hero-actions">
            <NuxtLink :to="latestDailyPath" class="ui-button">阅读最新日报 <span aria-hidden="true">→</span></NuxtLink>
            <NuxtLink to="/ai-daily" class="ui-button secondary">浏览全部归档 <span aria-hidden="true">↗</span></NuxtLink>
          </div>
        </div>

        <div class="hero-visual" role="img" aria-label="恒言Tech 技术编辑部抽象视觉">
          <div class="visual-grid" aria-hidden="true"></div>
          <div class="visual-card">
            <div class="visual-label"><span>ISSUE / 028</span><span>2026.08</span></div>
            <h2>技术不是答案，<br>验证才是。</h2>
            <div class="visual-lines" aria-hidden="true"><i></i><i></i><i></i></div>
          </div>
          <span class="signal-bar" aria-hidden="true"></span>
          <span class="orb" aria-hidden="true"></span>
        </div>
      </div>

      <div v-if="latestDailies.length" class="issue-strip">
        <div class="strip-head">
          <h2>最新智能日报</h2>
          <NuxtLink to="/ai-daily" class="text-link">查看全部日报 <span aria-hidden="true">↗</span></NuxtLink>
        </div>
        <div class="issue-grid" :class="{ 'two-items': latestDailies.length === 2 }">
          <NuxtLink v-for="(post, index) in latestDailies" :key="post.path" :to="post.path" class="issue-card" :class="{ featured: index === 0 }">
            <div class="issue-meta"><time :datetime="post.date || post.meta?.date">{{ formatDate(post.date || post.meta?.date) }}</time><span>{{ index === 0 ? 'LATEST' : 'DAILY' }}</span></div>
            <h3>{{ post.title }}</h3>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section id="products" class="products-section" aria-labelledby="products-title">
      <div class="section-header">
        <div><p class="eyebrow">Products / 04</p><h2 id="products-title">持续做小而完整的产品。</h2></div>
        <p>聚焦真实问题，记录产品阶段与下一步验证。</p>
      </div>

      <div class="product-grid">
        <article class="product-card">
          <span class="product-number">01 / THEME</span>
          <div class="product-demo"><small>$ dsh plugin add</small><strong>dsh<br>oh my theme</strong><div class="meter"></div></div>
          <h3>dsh-oh-my-theme</h3>
          <p>主题、文件工作台与代码预览，让开发者工作流更紧凑。</p>
          <NuxtLink to="/products/dsh-oh-my-theme" class="text-link">查看产品说明 <span aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="product-card">
          <span class="product-number">02 / CARE</span>
          <div class="product-demo"><small>09:41 / TODAY</small><strong>萌芽<br>喂养记录</strong><div class="meter"></div></div>
          <h3>萌芽喂养</h3>
          <p>面向家庭共同照护的微信小程序，强调记录和交接。</p>
          <NuxtLink to="/products/mengya-feeding" class="text-link">查看使用入口 <span aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="product-card">
          <span class="product-number">03 / REVIEW</span>
          <div class="product-demo"><small>POSITIONWISE / LOCAL</small><strong>事实 → 纪律<br>→ 计划 → 复盘</strong><div class="meter"></div></div>
          <h3>PositionWise</h3>
          <p>本地优先的交易纪律、盯盘与复盘工具。</p>
          <NuxtLink to="/products/positionwise" class="text-link">查看产品说明 <span aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="product-card">
          <span class="product-number">04 / TOOL</span>
          <div class="product-demo puppy-demo"><small>PUPPYWEIGHTCALC / WEB</small><strong>58–72 lb<br><span>成年体重区间</span></strong><div class="meter"></div></div>
          <h3>PuppyWeightCalc</h3>
          <p>根据幼犬年龄、体重与品种，估算成年后的典型体重区间。</p>
          <NuxtLink to="/products/puppy-weight-calc" class="text-link">打开产品介绍 <span aria-hidden="true">→</span></NuxtLink>
        </article>
      </div>
    </section>

    <section class="newsletter" aria-labelledby="newsletter-title">
      <div class="newsletter-inner">
        <div><p class="eyebrow">Weekly signal, no noise.</p><h2 id="newsletter-title">每周只发真正值得跟进的变化。</h2></div>
        <div class="newsletter-copy">
          <p>目前是交互预览入口。提交后只显示本地反馈，不会发送或保存邮箱。</p>
          <form class="subscribe" @submit.prevent="submitNewsletter">
            <label class="sr-only" for="newsletter-email">邮箱地址</label>
            <input id="newsletter-email" v-model="newsletterEmail" type="email" autocomplete="email" placeholder="name@example.com" required>
            <button class="ui-button" type="submit">订阅周报 <span aria-hidden="true">→</span></button>
          </form>
          <p class="subscribe-status" role="status" aria-live="polite">{{ newsletterStatus }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const newsletterEmail = ref('')
const newsletterStatus = ref('')

const { data: dailyPages } = await useAsyncData('home-latest-dailies', () => queryCollection('content').all())

const latestDailies = computed(() =>
  (dailyPages.value || [])
    .filter((page) => page.path.startsWith('/ai-daily/') && (page.date || page.meta?.date))
    .sort((a, b) => new Date(b.date || b.meta?.date) - new Date(a.date || a.meta?.date))
    .slice(0, 3)
)

const latestDailyPath = computed(() => latestDailies.value[0]?.path || '/ai-daily')

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '.')
}

const submitNewsletter = () => {
  newsletterStatus.value = '订阅演示成功：当前不会保存或发送你的邮箱。'
  newsletterEmail.value = ''
}

useSeoMeta({
  title: '恒言Tech · 独立开发者与产品记录',
  description: '记录恒言Tech 的产品构建、AI 工具、工程实践与真实验证。'
})
</script>

<style scoped>
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.home-page { overflow: hidden; }
.hero { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; padding: 84px 0 48px; }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.42fr) minmax(310px, .58fr); gap: 72px; align-items: center; }
.eyebrow { margin: 0 0 18px; color: var(--muted); font-family: var(--mono); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.eyebrow span { color: var(--accent); }
h1 { max-width: 760px; margin: 0; font-size: clamp(40px, 4.4vw, 60px); font-weight: 650; line-height: 1.16; letter-spacing: -.032em; }
.lead { max-width: 690px; margin: 28px 0 34px; color: var(--muted); font-size: clamp(18px, 2vw, 22px); line-height: 1.72; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

.hero-visual { min-height: 420px; position: relative; overflow: hidden; border: 1px solid color-mix(in srgb, var(--line) 72%, transparent); border-radius: var(--radius-lg); background: linear-gradient(145deg, var(--surface-strong), var(--accent-soft)); box-shadow: var(--shadow); }
.visual-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 44px 44px; opacity: .16; }
.visual-card { position: absolute; inset: 52px 48px 64px 52px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid color-mix(in srgb, var(--line-strong) 70%, transparent); border-radius: 24px; background: color-mix(in srgb, var(--surface-strong) 92%, transparent); box-shadow: var(--shadow-soft); }
.visual-label { display: flex; justify-content: space-between; color: var(--muted); font: 11px/1.4 var(--mono); }
.visual-card h2 { max-width: 250px; margin: 0; font-size: 34px; font-weight: 650; line-height: 1.08; letter-spacing: -.035em; }
.visual-lines { display: grid; gap: 9px; }
.visual-lines i { display: block; height: 6px; background: var(--line); }
.visual-lines i:nth-child(2) { width: 78%; }
.visual-lines i:nth-child(3) { width: 52%; background: var(--accent); }
.signal-bar { position: absolute; top: 154px; right: 22px; width: 120px; height: 14px; border-radius: 999px; background: var(--signal); transform: rotate(6deg); opacity: .9; }
.orb { position: absolute; right: -44px; bottom: -52px; width: 176px; height: 176px; border: 1px solid color-mix(in srgb, var(--accent) 44%, transparent); border-radius: 50%; background: color-mix(in srgb, var(--accent-soft) 55%, transparent); }

.issue-strip { margin-top: 44px; overflow: hidden; border: 1px solid var(--line); border-radius: var(--radius); background: color-mix(in srgb, var(--surface) 84%, transparent); box-shadow: var(--shadow-soft); }
.strip-head { min-height: 62px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--line); }
.strip-head h2 { margin: 0; font-size: 13px; }
.text-link { min-height: 44px; display: inline-flex; align-items: center; gap: 8px; color: var(--ink); font-size: 13px; font-weight: 700; text-decoration: none; }
.text-link:hover { color: var(--accent); }
.issue-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.issue-grid.two-items { grid-template-columns: 1.25fr 1fr; }
.issue-card { min-height: 108px; padding: 14px 20px; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid var(--line); color: var(--ink); text-decoration: none; transition: background 180ms ease; }
.issue-card:last-child { border-right: 0; }
.issue-card:hover { background: var(--surface); }
.issue-card.featured { background: linear-gradient(145deg, var(--accent), color-mix(in srgb, var(--accent) 76%, #8fa4e2)); color: var(--accent-ink); }
.issue-meta { display: flex; justify-content: space-between; gap: 16px; opacity: .8; font: 11px/1.5 var(--mono); }
.issue-card h3 { margin: 8px 0 0; font-size: clamp(18px, 1.7vw, 22px); line-height: 1.24; letter-spacing: -.025em; }

.products-section { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; padding: 100px 0; }
.section-header { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; margin-bottom: 42px; }
.section-header h2 { margin: 0; font-size: clamp(34px, 4vw, 56px); font-weight: 650; line-height: 1.12; letter-spacing: -.035em; }
.section-header > p { max-width: 540px; margin: 0; justify-self: end; color: var(--muted); }
.product-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.product-card { min-height: 380px; padding: 28px; display: flex; flex-direction: column; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow-soft); }
.product-number { color: var(--muted); font: 12px/1 var(--mono); }
.product-demo { height: 138px; margin: 42px 0 28px; padding: 18px; border-radius: 16px; background: var(--code); color: var(--code-ink); }
.product-demo small { color: #a9aea9; font: 10px/1.4 var(--mono); }
.product-demo strong { display: block; margin-top: 16px; font-size: 24px; line-height: 1.25; }
.puppy-demo { background: #f4efe3; color: #28574b; }
.puppy-demo small { color: #726744; }
.puppy-demo strong span { color: #726744; font-size: 13px; font-weight: 600; }
.puppy-demo .meter { background: #dfe8e3; }
.puppy-demo .meter::after { width: 62%; background: var(--signal); }
.meter { height: 5px; margin-top: 22px; background: #414742; }
.meter::after { width: 66%; height: 100%; display: block; background: var(--accent); content: ''; }
.product-card h3 { margin: 0 0 10px; font-size: 24px; letter-spacing: -.025em; }
.product-card p { margin: 0 0 20px; color: var(--muted); font-size: 14px; }
.product-card .text-link { margin-top: auto; align-self: flex-start; }

.newsletter { width: min(calc(100% - (var(--gutter) * 2)), var(--container)); margin: 0 auto; padding: 0 0 88px; }
.newsletter-inner { padding: 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: end; border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--accent-soft); }
.newsletter h2 { max-width: 640px; margin: 0; font-size: clamp(38px, 5vw, 64px); font-weight: 650; line-height: 1.1; letter-spacing: -.035em; }
.newsletter-copy > p { color: var(--muted); }
.subscribe { display: flex; gap: 8px; }
.subscribe input { min-width: 0; min-height: 50px; flex: 1; padding: 0 18px; border: 1px solid var(--line-strong); border-radius: 999px; background: var(--surface-strong); color: var(--ink); }
.subscribe-status { min-height: 28px; margin: 10px 0 0; font-size: 13px; }

@media (max-width: 820px) {
  .hero { padding-top: 56px; }
  .hero-grid, .section-header, .newsletter-inner { grid-template-columns: 1fr; }
  .hero-grid { gap: 38px; }
  .hero-visual { min-height: 360px; }
  .issue-grid, .issue-grid.two-items { grid-template-columns: 1fr; }
  .issue-card { min-height: 108px; border-right: 0; border-bottom: 1px solid var(--line); }
  .issue-card:last-child { border-bottom: 0; }
  .section-header > p { justify-self: start; }
  .product-grid { grid-template-columns: 1fr; }
  .newsletter-inner { padding: 40px; }
}

@media (max-width: 560px) {
  h1 { font-size: 40px; }
  .hero-visual { min-height: 310px; }
  .visual-card { inset: 36px 24px 48px 28px; padding: 20px; }
  .signal-bar { top: 118px; width: 94px; }
  .products-section { padding: 72px 0; }
  .newsletter-inner { padding: 28px 22px; }
  .subscribe { flex-direction: column; }
}
</style>
