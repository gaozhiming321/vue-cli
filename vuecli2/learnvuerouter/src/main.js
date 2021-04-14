import Vue from 'vue'
import App from './App'
//如果导入的是文件夹，会默认的找index.js文件，index.js可以省略
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
