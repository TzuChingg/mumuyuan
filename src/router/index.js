//工具
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

//Router
import loginRouter from './loginRouter' //登入
import reserveRouter from './reserveRouter' //訂位
import searchRouter from './searchRouter' //查詢
import memberRouter from './memberRouter' //會員中心

//頁面
import backend from './backend'

//主頁
import indexPage from '/src/views/ching/indexPage.vue'
import notFoundPage from '/src/views/ching/notFound.vue'
// 線上點餐
import Menu from './claire/menuRouter'
import Cart from './claire/cartRouter'

const routes = [
  { ...Menu },
  { ...Cart },
  // { path: '/', component: IndexTest },
  { path: '/', name: 'home', component: indexPage },
  { path: '/FAQ', name: 'FAQ', component: indexPage },
  { ...loginRouter },
  { ...reserveRouter },
  { ...searchRouter },
  ...backend,
  ...memberRouter,
  {path: '/:pathMatch(.*)*', name: 'notFound', component: notFoundPage}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) 
    {
      return { selector: to.hash }; // <==== the important part
    }


    return savedPosition || new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 , behavior:'smooth'})
      }, 400)
    })
  }
})

export default router
