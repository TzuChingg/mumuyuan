//工具
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

//Router
import loginRouter from './loginRouter'
import reserveRouter from './reserveRouter'
import searchRouter from './searchRouter'

//頁面
import backend from './backend'
//測試
import pagePost from '/src/views/eric/test/pagePost.vue'
//主頁
import IndexTest from '/src/views/eric/IndexTest.vue'
import memberRouter from './memberRouter'
// import views
import MenuPage from '/src/views/claire/MenuPage.vue'
import CartPage from '/src/views/claire/CartPage.vue'

const routes = [
  { path: '/', component: IndexTest },
  { path: '/:postId', component: pagePost },
  ...backend,
  { ...loginRouter },
  { ...reserveRouter },
  { ...searchRouter },
  ...memberRouter,
  // add MenuPage router
  { path: '/menu', name: '線上點餐', component: MenuPage },
  // add CartPage router
  { path: '/cart', name: '購物車', component: CartPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
