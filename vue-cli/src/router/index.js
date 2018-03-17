import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestFocus from '@/components/TestFocus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TestFocus
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ]
})
