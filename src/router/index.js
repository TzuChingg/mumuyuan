import PageIndex from '/src/views/eric/PageIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/2',
    component:PageIndex,
  },
]


const router = createRouter({
  history:createWebHistory(),
  routes,
});


export default router