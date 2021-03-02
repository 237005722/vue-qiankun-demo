import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'
// 微应用注册信息
import microApps from './microApps'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(microApps, {
  beforeLoad: app => console.log('beforeLoad ===> ', app.name),
  beforeMount: app => console.log('beforeMount ===> ', app.name),
  afterMount: app => console.log('afterMount ===> ', app.name),
  beforeUnmount: app => console.log('beforeUnmount ===> ', app.name),
  afterUnmount: app => console.log('afterUnmount ===> ', app.name)
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler(event => {
  console.error(`addGlobalUncaughtErrorHandler event`, event)
  const { message: msg } = event
  // 加载失败时提示
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    ElementUI.Message({
      message: `微应用加载失败，请检查应用是否可运行`,
      type: `error`,
      duration: 5000
    })
  }
})

/**
 * 启动qiankun
 */
start()
