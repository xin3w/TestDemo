import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '1',
        component:Page1
      }, {
          path: '2',
          component: Page2
        }, {
          path: '3',
          component: Page3
        }]
    }
  ]
})
