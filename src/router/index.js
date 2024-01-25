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
import IndexTest from '/src/views/eric/IndexTest.vue'
import indexPage from '/src/views/ching/indexPage.vue'

//線上點餐
import MenuPage from '/src/views/claire/MenuPage.vue'
import CartPage from '/src/views/claire/CartPage.vue'

const routes = [
  // { path: '/', component: IndexTest },
  { path: '/', component: indexPage },
  { path: '/menu', component: MenuPage },
  { path: '/cart', component: CartPage },
  { ...loginRouter },
  { ...reserveRouter },
  { ...searchRouter },
  ...backend,
  ...memberRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
