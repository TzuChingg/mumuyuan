
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
    { path: '/order', component: orderManage,meta:{transition:"fade"} },
    { path: '/unOrder', component: unOrderManage ,meta:{transition:"fade"}},
    { path: '/member', component: memberManage,meta:{transition:"fade"} },
    { path: '/badMember', component: badMemberManage ,meta:{transition:"fade"}},
    { path: '/sales', component: salesStatistics ,meta:{transition:"fade"}},
    { path: '/product', component: productManage,meta:{transition:"fade"} },
    { path: '/downProduct', component: downProductManage ,meta:{transition:"fade"}},
    { path: '/booking', component: bookingManage,meta:{transition:"fade"} },
    { path: '/finishBooking', component: finishBookingManage,meta:{transition:"fade"} },
    { path: '/discount', component: discountManage ,meta:{transition:"fade"}},
    { path: '/downDiscount', component: downDiscountManage ,meta:{transition:"fade"}},
    { path: '/journey', component: journeyManage ,meta:{transition:"fade"}},
    { path: '/downJourney', component: downJourneyManage ,meta:{transition:"fade"}}
  ];