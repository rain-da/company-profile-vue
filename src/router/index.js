import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/pages/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/about.vue')
  },
  {
    path: '/call',
    name: 'call',
    component: () => import('../components/pages/call.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../components/pages/news.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../components/pages/service.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
