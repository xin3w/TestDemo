import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import TestFocus from '@/components/page/TestFocus'

import Home from '@/components/common/Home'
import PageSide from '@/components/common/PageSide'
import PageContent from '@/components/common/PageContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '',
        components: {
          side: PageSide,
          content: PageContent
        }
      }, {
          path: 'TestFocus',
          components: {
            side: PageSide,
            content:TestFocus
          }  
        }, {
          path: 'HelloWorld',
          components: {
            side: PageSide,
            content: HelloWorld
          }
        }]
     
    }
  ]
})
