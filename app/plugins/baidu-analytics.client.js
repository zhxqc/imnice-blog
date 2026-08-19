export default defineNuxtPlugin((nuxtApp) => {
  // hm.js 已由 app.vue 的 useHead 注入到服务端返回的 HTML <head> 中，
  // 这里只负责 SPA 路由切换时的页面浏览上报，避免脚本被重复加载。
  window._hmt = window._hmt || []

  let previousPath = window.location.pathname + window.location.search

  nuxtApp.$router.afterEach((to) => {
    const nextPath = to.fullPath.split('#')[0]
    if (nextPath === previousPath) return

    window._hmt.push(['_trackPageview', nextPath])
    previousPath = nextPath
  })
})
