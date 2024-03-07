import { defineAsyncComponent } from 'vue'

const orderManage = defineAsyncComponent(() => import('/src/views/eric/orderManage.vue'))
const memberManage = defineAsyncComponent(() => import('/src/views/eric/memberManage.vue'))
const salesStatistics = defineAsyncComponent(() => import('/src/views/eric/salesStatistics.vue'))
const productManage = defineAsyncComponent(() => import('/src/views/eric/productManage.vue'))
const bookingManage = defineAsyncComponent(() => import('/src/views/eric/bookingManage.vue'))
const discountManage = defineAsyncComponent(() => import('/src/views/eric/discountManage.vue'))
const journeyManage = defineAsyncComponent(() => import('/src/views/eric/journeyManage.vue'))

export default [
  { path: '/order', component: orderManage },
  { path: '/memberMange', component: memberManage },
  { path: '/sales', component: salesStatistics },
  { path: '/product', component: productManage },
  { path: '/booking', component: bookingManage },
  { path: '/discount', component: discountManage },
  { path: '/journey', component: journeyManage }
]
