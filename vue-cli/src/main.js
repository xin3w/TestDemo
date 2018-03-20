import Vue from 'vue'
import App from '@/App'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
//mint-ui
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
    'zh-CN': require('@/lang/cn.js'),   // 中文语言包
    'en-US': require('@/lang/en.js')    // 英文语言包
  }
})


Vue.config.productionTip = false

Vue.prototype.$axios = axios



window.Vue = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})