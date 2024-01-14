//工具
import { createRouter, createWebHashHistory } from 'vue-router'

//頁面
import mumuyuan from '/src/views/ching/mumuyuan.vue'
import PageIndex from '/src/views/eric/PageIndex.vue'

//Router
import loginRouter from './loginRouter';

const routes = [
  {
    path: '/',
    component: mumuyuan,
  },
  {
    path: '/2',
    component: PageIndex,
  },
  {
    ...loginRouter
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router