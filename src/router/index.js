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

const routes = [
  //{ path: '/', component: IndexTest },
  { path: '/', name: 'home', component: indexPage },
  { path: '/', name: 'FAQ', component: indexPage },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: notFoundPage },
  ...loginRouter,
  ...reserveRouter,
  ...searchRouter,
  ...backend,
  ...memberRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 在同頁錨點
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      const element = document.getElementById(to.hash)
      if (['#固定套餐', '#秘捲', '#肉品', '#海鮮', '#酒食', '#蔬菜', '#經典'].includes(to.hash)) {
        return { el: element, top: 130, behavior: 'smooth' }
      }
      if ('#FAQ' === to.hash) {
        return { el: element, top: 0, behavior: 'smooth' }
      }
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: 'smooth' })
        }, 400)
      })
    }
  }
})

export default router
