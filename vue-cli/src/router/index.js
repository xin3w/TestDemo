import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/common/Home'
import PageSide from '@/components/common/PageSide'
import PageContent from '@/components/common/PageContent'

import HelloWorld from '@/components/page/HelloWorld'
import TestFocus from '@/components/page/TestFocus'

import TestI18n1 from '@/components/page/TestI18n1'
import TestI18n2 from '@/components/page/TestI18n2'

import TestEleForm from '@/components/page/TestEleForm'
import TestEleForm2 from '@/components/page/TestEleForm2'

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
        }, {
          path: 'TestI18n1',
          components: {
            side: PageSide,
            content: TestI18n1
          }
        }, {
          path: 'TestI18n2',
          components: {
            side: PageSide,
            content: TestI18n2
          }
        }, {
          path: 'TestEleForm',
          components: {
            side: PageSide,
            content: TestEleForm
          }
        }, {
          path: 'TestEleForm2',
          components: {
            side: PageSide,
            content: TestEleForm2
          }
        }]
     
    }
  ]
})
