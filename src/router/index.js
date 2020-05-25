import Vue from 'vue'
import Router from 'vue-router'
import TestBoo from '@/components/TestBootstrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestBoo',
      component: TestBoo
    }
  ]
})
