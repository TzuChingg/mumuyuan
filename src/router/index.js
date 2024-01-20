//工具
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

//Router
import loginRouter from './loginRouter'
import backend from './backend'
//測試
import pagePost from '/src/views/eric/test/pagePost.vue'
//主頁
import IndexTest from '/src/views/eric/IndexTest.vue'
// import views
import MenuPage from '/src/views/claire/MenuPage.vue'
import CartPage from '/src/views/claire/CartPage.vue'
// import views

const routes = [
  { path: '/', component: IndexTest },
  { path: '/:postId', component: pagePost },
  ...backend,
  { ...loginRouter },
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
