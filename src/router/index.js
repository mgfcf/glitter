import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Essays from '../views/Essays.vue'
import Memos from '../views/Memos.vue'
import PostSpotlight from '../views/PostSpotlight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/essays',
      name: 'essays',
      component: Essays
    },
    {
      path: '/memos',
      name: 'memos',
      component: Memos
    },
    {
      path: '/p/:id',
      name: 'post',
      component: PostSpotlight
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
