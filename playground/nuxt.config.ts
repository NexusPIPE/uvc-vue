export default defineNuxtConfig({
  modules: ['../src/module'],
  uvc: {},
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: v=>v==='nexus-uvc'
    }
  }
})