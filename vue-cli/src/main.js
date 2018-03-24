import Vue from 'vue'
import App from '@/App'
import axios from 'axios'
import router from '@/router'
import store from '@/store'

// MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//i18n国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('@/lang/zh-CN.js'),   // 中文语言包
    'en-US': require('@/lang/en-US.js')    // 英文语言包
  }
})

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// 自定义keycode
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 13,
  up: [38, 87]
}

Vue.nextTick(function () {
  console.log("nextTick");
  
})

import '@/assets/less/style.less'
window.Vue = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})


