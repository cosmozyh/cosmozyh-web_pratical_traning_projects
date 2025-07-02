import App from './App'
// 引入 uView-Plus UI 框架
import uviewPlus from '@/uni_modules/uview-plus'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false

// 在 Vue 2 中注册 uView-Plus（有些组件依赖 Vue.use）
Vue.use(uviewPlus)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  
  // 在 Vue 3 中注册 uView-Plus
  app.use(uviewPlus)
  
  return {
    app
  }
}
// #endif