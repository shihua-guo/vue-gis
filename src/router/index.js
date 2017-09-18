import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Maptest from '@/components/Map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Maptest
    }
  ]
})
