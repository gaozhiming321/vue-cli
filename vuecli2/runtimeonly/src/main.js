import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//那么.vue文件中的template是有谁来处理呢？
//是由vue-template-compiler处理
//render--->vdom--->UI
