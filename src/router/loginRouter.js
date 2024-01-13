import { createRouter, createWebHashHistory } from 'vue-router'
import aComponent from '../components/chia/a.vue'
import bComponent from '../components/chia/b.vue'
import indexComponent from '../components/chia/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: indexComponent
    },
    {
      path: '/a',
      // name: 'home',
      component: aComponent
    },
    {
      path: '/b',
      // name: bComponent,
      component: bComponent

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
