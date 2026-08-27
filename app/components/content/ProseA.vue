<template>
  <a
    :href="href"
    :title="title"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script setup>
defineOptions({ inheritAttrs: false })

defineProps({
  href: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: undefined
  }
})
</script>
