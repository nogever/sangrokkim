import Vue from 'vue'
import Router from 'vue-router'
import SrHello from '@/components/Hello'
import SrSnake from '@/components/games/snake'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: SrHello,
    },
    {
      path: '/games/snake',
      name: 'snake',
      component: SrSnake,
    },
  ]
})
