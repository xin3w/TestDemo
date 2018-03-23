import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Page0 from '@/components/Page0'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Page0
        },{
        path: '1',
        component:Page1
      }, {
          path: '2',
          component: Page2
        }, {
          path: '3',
          component: Page3
        }, {
          path: '4',
          component: Page4
        }, {
          path: '5',
          component: Page5
        }]
    }
  ]
})
