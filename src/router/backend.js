import { defineAsyncComponent } from 'vue'

const OrderManage = defineAsyncComponent(() => import('@/views/eric/OrderManage.vue'))
const MemberManage = defineAsyncComponent(() => import('@/views/eric/MemberManage.vue'))
const SalesStatistics = defineAsyncComponent(() => import('@/views/eric/SalesStatistics.vue'))
const ProductManage = defineAsyncComponent(() => import('@/views/eric/ProductManage.vue'))
const BookingManage = defineAsyncComponent(() => import('@/views/eric/BookingManage.vue'))
const DiscountManage = defineAsyncComponent(() => import('@/views/eric/DiscountManage.vue'))
const JourneyManage = defineAsyncComponent(() => import('@/views/eric/JourneyManage.vue'))

export default [
  { path: '/order', component: OrderManage },
  { path: '/memberMange', component: MemberManage },
  { path: '/sales', component: SalesStatistics },
  { path: '/product', component: ProductManage },
  { path: '/booking', component: BookingManage },
  { path: '/discount', component: DiscountManage },
  { path: '/journey', component: JourneyManage }
]
