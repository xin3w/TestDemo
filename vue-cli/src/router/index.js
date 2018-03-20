import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import TestFocus from '@/components/TestFocus'

import TestI18n1 from '@/components/TestI18n1'
import TestI18n2 from '@/components/TestI18n2'

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
    },
    {
      path: '/i18n1',
      component: TestI18n1
    },
    {
      path: '/i18n2',
      component: TestI18n2
    }
  ]
})
