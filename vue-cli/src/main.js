import Vue from 'vue'
import App from '@/App'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios


window.Vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})