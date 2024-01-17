
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


export default [
    { path: '/order', component: orderManage, },
    { path: '/unOrder', component: unOrderManage ,},
    { path: '/member', component: memberManage, },
    { path: '/badMember', component: badMemberManage ,},
    { path: '/sales', component: salesStatistics ,},
    { path: '/product',component:productManage},
    { path: '/downProduct', component: downProductManage ,},
    { path: '/booking', component: bookingManage, },
    { path: '/finishBooking', component: finishBookingManage, },
    { path: '/discount', component: discountManage ,},
    { path: '/downDiscount', component: downDiscountManage ,},
    { path: '/journey', component: journeyManage ,},
    { path: '/downJourney', component: downJourneyManage ,}
  ];