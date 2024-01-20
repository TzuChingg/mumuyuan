
import orderManage from '/src/views/eric/orderManage.vue'
import memberManage from '/src/views/eric/memberManage.vue'
import salesStatistics from '/src/views/eric/salesStatistics.vue'
import productManage from '/src/views/eric/productManage.vue'
import bookingManage from '/src/views/eric/bookingManage.vue'
import discountManage from '/src/views/eric/discountManage.vue'
import journeyManage from '/src/views/eric/journeyManage.vue'


export default [
    { path: '/order', component: orderManage, },
    { path: '/memberMange', component: memberManage, },
    { path: '/sales', component: salesStatistics ,},
    { path: '/product',component:productManage},
    { path: '/booking', component: bookingManage, },
    { path: '/discount', component: discountManage ,},
    { path: '/journey', component: journeyManage ,},
  ];