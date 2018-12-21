import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sales from '@/components/Sales'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sales',
      name: 'sales',
      component: Sales
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
