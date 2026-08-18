const BAIDU_ANALYTICS_ID = 'e15730fb7750ed50246c321990ff8230'

export default defineNuxtPlugin((nuxtApp) => {
  window._hmt = window._hmt || []

  if (!document.querySelector(`script[data-baidu-analytics="${BAIDU_ANALYTICS_ID}"]`)) {
    const script = document.createElement('script')
    script.src = `https://hm.baidu.com/hm.js?${BAIDU_ANALYTICS_ID}`
    script.async = true
    script.dataset.baiduAnalytics = BAIDU_ANALYTICS_ID
    document.head.appendChild(script)
  }

  let previousPath = window.location.pathname + window.location.search

  nuxtApp.$router.afterEach((to) => {
    const nextPath = to.fullPath.split('#')[0]
    if (nextPath === previousPath) return

    window._hmt.push(['_trackPageview', nextPath])
    previousPath = nextPath
  })
})
