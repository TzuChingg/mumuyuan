// import PageIndex from '/src/views/eric/PageIndex.vue'
import pagePost from '/src/views/eric/pagePost.vue'
import IndexTest from '/src/views/eric/IndexTest.vue'
////////////////////////////////////////////////////////
import orderManage from '/src/views/eric/orderManage.vue'
import memberManage from '/src/views/eric/memberManage.vue'
import salesStatistics from '/src/views/eric/salesStatistics.vue'
import productManage from '/src/views/eric/productManage.vue'
import bookingManage from '/src/views/eric/bookingManage.vue'
import discountManage from '/src/views/eric/discountManage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 首頁
    path:'/',  
    component:IndexTest,
  },
  {
    path:'/:postId',
    component:pagePost,
  },

  {
    path:'/order',
    component:orderManage,
  },
  {
    path:'/member',
    component:memberManage,
  },
  {
    path:'/sales',
    component:salesStatistics,
  },
  {
    path:'/product',
    component:productManage,
  },
  {
    path:'/booking',
    component:bookingManage,
  },
  {
    path:'/discount',
    component:discountManage,
  },
]


const router = createRouter({
  history:createWebHistory(),
  routes,
});


export default router