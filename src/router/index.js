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
import MenuRouter from './claire/menuRouter'
import CartRouter from './claire/cartRouter'

const routes = [
  //{ path: '/', component: IndexTest },
  { ...MenuRouter },
  { ...CartRouter },
  { ...loginRouter },
  { ...reserveRouter },
  { ...searchRouter },
  ...backend,
  ...memberRouter,
  { path: '/:pathMatch(.*)*', name: 'notFound', component: notFoundPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 在同頁錨點
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition){
      // console.log(savedPosition);
      return savedPosition
    }else if (to.hash) {
      const element = document.getElementById(to.hash)
      if (element) {
        return {el: element, behavior: 'smooth' } // <==== the important part
      }
    }else{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ left: 0, top: 0, behavior: 'smooth' })
            }, 400)
          })
      }
  }
})

export default router
