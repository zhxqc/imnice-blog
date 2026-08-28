<template>
  <span class="site-logo" :class="{ light: tone === 'light' }" aria-hidden="true">
    <svg viewBox="0 0 48 48" focusable="false">
      <rect width="48" height="48" rx="12" fill="currentColor"/>
      <path d="M10 9h7v30h-7zM31 9h7v30h-7z" fill="#fff"/>
      <path d="M17 21h14v7H17z" fill="#dda75f"/>
    </svg>
    <span class="wordmark"><strong>恒言</strong><em>Tech</em></span>
  </span>
</template>

<script setup>
defineProps({
  tone: {
    type: String,
    default: 'dark'
  }
})
</script>

<style scoped>
.site-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
  white-space: nowrap;
}

svg { width: 36px; height: 36px; display: block; flex: 0 0 auto; color: var(--accent); }
.wordmark { display: inline-flex; align-items: baseline; }
.wordmark strong { font-size: 23px; font-weight: 750; line-height: 1; }
.wordmark em { margin-left: 3px; color: var(--accent); font-size: 16px; font-style: normal; font-weight: 700; line-height: 1; }
.site-logo.light { color: var(--ink); }
.site-logo.light .wordmark em { color: var(--accent); }

@media (max-width: 640px) {
  .site-logo { gap: 8px; }
  svg { width: 32px; height: 32px; }
  .wordmark strong { font-size: 21px; }
  .wordmark em { font-size: 14px; }
}
</style>
