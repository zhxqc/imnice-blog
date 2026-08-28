<template>
  <div class="terminal-code">
    <div class="terminal-bar">
      <div class="terminal-context">
        <span class="terminal-title">terminal</span>
        <span class="terminal-language">{{ filename || displayLanguage }}</span>
      </div>
      <button type="button" class="copy-button" :aria-label="copyLabel" @click="copyCode">
        {{ copyLabel }}
      </button>
    </div>

    <pre v-if="isShell" class="terminal-pre"><code><span v-for="(line, index) in shellLines" :key="index" class="terminal-line"><span class="terminal-prompt" aria-hidden="true">$</span><span class="terminal-command">{{ line }}</span></span></code></pre>
    <pre v-else class="terminal-pre terminal-pre-source"><slot /></pre>
  </div>
</template>

<script setup>
const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: ''
  },
  filename: {
    type: String,
    default: ''
  }
})

const copyState = ref('idle')
let resetTimer

const displayLanguage = computed(() => props.language || 'text')
const isShell = computed(() => ['bash', 'sh', 'shell', 'zsh'].includes(props.language.toLowerCase()))
const shellLines = computed(() => props.code.replace(/\n$/, '').split('\n'))
const copyLabel = computed(() => {
  if (copyState.value === 'copied') return '已复制'
  if (copyState.value === 'error') return '复制失败'
  return '复制'
})

const copyCode = async () => {
  clearTimeout(resetTimer)

  try {
    await navigator.clipboard.writeText(props.code)
    copyState.value = 'copied'
  } catch {
    copyState.value = 'error'
  }

  resetTimer = setTimeout(() => {
    copyState.value = 'idle'
  }, 1800)
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<style scoped>
.terminal-code {
  margin: 24px 0;
  overflow: hidden;
  border: 1px solid #30363d;
  border-radius: 16px;
  background: #0d1117;
  color: #e6edf3;
}

.terminal-bar {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 8px 0 16px;
  border-bottom: 1px solid #30363d;
  background: #161b22;
}

.terminal-context {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 12px;
}

.terminal-title {
  color: #f0f6fc;
  font-weight: 700;
}

.terminal-language {
  overflow: hidden;
  color: #9da7b3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.copy-button {
  min-width: 64px;
  min-height: 44px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: #c9d1d9;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 180ms ease-out, border-color 180ms ease-out, color 180ms ease-out;
}

.copy-button:hover {
  border-color: #3d444d;
  background: #21262d;
  color: #ffffff;
}

.copy-button:active {
  background: #292e36;
}

.copy-button:focus-visible {
  outline: 2px solid #58a6ff;
  outline-offset: 1px;
}

.terminal-pre {
  margin: 0 !important;
  overflow-x: auto;
  padding: 24px !important;
  border-radius: 0 !important;
  background: #0d1117 !important;
  color: #e6edf3 !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 14px;
  line-height: 1.75;
  tab-size: 2;
}

.terminal-pre code {
  display: block;
  min-width: max-content;
  padding: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;
}

.terminal-line {
  display: flex;
  min-height: 25px;
  gap: 14px;
}

.terminal-prompt {
  flex: 0 0 auto;
  color: #7ee787;
  font-weight: 700;
  user-select: none;
}

.terminal-command {
  color: #e6edf3;
  white-space: pre;
}

.terminal-pre-source :deep(code),
.terminal-pre-source :deep(span) {
  font-family: inherit;
}

@media (max-width: 640px) {
  .terminal-bar { padding-left: 14px; }
  .terminal-pre { padding: 18px !important; font-size: 13px; }
  .terminal-context { gap: 8px; }
  .terminal-line { gap: 10px; }
}
</style>
