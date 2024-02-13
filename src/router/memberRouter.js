import newsPage from '/src/views/ching/newsPage.vue'
import memberCenter from '/src/views/ching/memberCenter.vue'
import orderLog from '/src/views/ching/memberOrderLog.vue'
import memberDiscount from '/src/views/ching/memberDiscount.vue'
import memberExchange from '/src/views/ching/memberExchange.vue'
import onlineOrder from '/src/views/ching/onlineOrder.vue'
import cart from '/src/views/ching/cartPage.vue'

export default [
    { path: '/news/:id', component: newsPage, },
    { path: '/memberCenter', component: memberCenter, },
    { path: '/member/orderLog', component: orderLog, },
    { path: '/member/discount', component: memberDiscount, },
    { path: '/member/exchange', component: memberExchange, },
    { path: '/onlineOrder', component: onlineOrder},
    { path: '/cartPage', component: cart},
    { path: '/onlineOrder', name: '固定套餐', component: onlineOrder },
    { path: '/onlineOrder', name: '秘捲', component: onlineOrder },
    { path: '/onlineOrder', name: '肉品', component: onlineOrder },
    { path: '/onlineOrder', name: '海鮮', component: onlineOrder },
    { path: '/onlineOrder', name: '酒食', component: onlineOrder },
    { path: '/onlineOrder', name: '蔬菜', component: onlineOrder },
    { path: '/onlineOrder', name: '經典', component: onlineOrder }
  ];