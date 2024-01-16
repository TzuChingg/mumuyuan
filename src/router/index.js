// import PageIndex from '/src/views/eric/PageIndex.vue'
import pagePost from '/src/views/eric/test/pagePost.vue'
import IndexTest from '/src/views/eric/IndexTest.vue'
////////////////////////////////////////////////////////
import orderManage from '/src/views/eric/order/orderManage.vue'
import memberManage from '/src/views/eric/member/memberManage.vue'
import salesStatistics from '/src/views/eric/sales/salesStatistics.vue'
import productManage from '/src/views/eric/product/productManage.vue'
import bookingManage from '/src/views/eric/booking/bookingManage.vue'
import discountManage from '/src/views/eric/discount/discountManage.vue'

import unOrderManage from '/src/views/eric/order/unOrderManage.vue'
import badMemberManage from '/src/views/eric/member/badMemberManage.vue'
import downProductManage from '/src/views/eric/product/downProductManage.vue'
import finishBookingManage from '/src/views/eric/booking/finishBookingManage.vue'
import downDiscountManage from '/src/views/eric/discount/downDiscountManage.vue'
import journeyManage from '/src/views/eric/discount/journeyManage.vue'
import downJourneyManage from '/src/views/eric/discount/downJourneyManage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path:'/',component:IndexTest,},
  {path:'/:postId',component:pagePost,},
  {path:'/order',component:orderManage,},
  {path:'/unOrder',component:unOrderManage,},
  {path:'/member',component:memberManage,},
  {path:'/badMember',component:badMemberManage,},
  {path:'/sales',component:salesStatistics,},
  {path:'/product',component:productManage,},
  {path:'/downProduct',component:downProductManage,},
  {path:'/booking',component:bookingManage,},
  {path:'/finishBooking',component:finishBookingManage,},
  {path:'/discount',component:discountManage,},
  {path:'/downDiscount',component:downDiscountManage,},
  {path:'/journey',component:journeyManage,},
  {path:'/downJourney',component:downJourneyManage,},
]


const router = createRouter({
  history:createWebHistory(),
  routes,
});


export default router