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
import IndexPage from '/src/views/ching/IndexPage.vue'
import NotFound from '/src/views/ching/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: IndexPage },
  { path: '/', name: 'FAQ', component: IndexPage },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
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
        return { el: element, top: 210, behavior: 'smooth' }
      }
      if ('#FAQ' === to.hash) {
        return { el: element, top: 140, behavior: 'smooth' }
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
