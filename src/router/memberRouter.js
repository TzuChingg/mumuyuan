import newsPage from '/src/views/ching/newsPage.vue'
import memberCenter from '/src/views/ching/memberCenter.vue'
import orderLog from '/src/views/ching/memberOrderLog.vue'
import memberDiscount from '/src/views/ching/memberDiscount.vue'
import memberExchange from '/src/views/ching/memberExchange.vue'


export default [
    { path: '/news/:id', component: newsPage, },
    { path: '/memberCenter', component: memberCenter, },
    { path: '/member/orderLog', component: orderLog, },
    { path: '/member/discount', component: memberDiscount, },
    { path: '/member/exchange', component: memberExchange, },
  ];