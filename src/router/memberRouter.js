import newsPage from '/src/views/ching/newsPage.vue'
import memberView from '/src/views/chia/memberView.vue'
import onlineOrder from '/src/views/ching/onlineOrder.vue'
import cart from '/src/views/ching/cartPage.vue'

export default [
  { path: '/news/:id', component: newsPage },
  {
    path: '/member',
    component: memberView,
    children: [
      { path: '', component: () => import('@/components/chia/memberCenter.vue') },
      { path: 'orderlog', component: () => import('@/components/chia/memberOrderLog.vue') },
      { path: 'discount', component: () => import('@/components/chia/memberDiscount.vue') },
      { path: 'exchange', component: () => import('@/components/chia/memberExchange.vue') }
    ]
  },
  { path: '/onlineOrder', component: onlineOrder },
  { path: '/cartPage', component: cart },
  { path: '/onlineOrder', name: '固定套餐', component: onlineOrder },
  { path: '/onlineOrder', name: '秘捲', component: onlineOrder },
  { path: '/onlineOrder', name: '肉品', component: onlineOrder },
  { path: '/onlineOrder', name: '海鮮', component: onlineOrder },
  { path: '/onlineOrder', name: '酒食', component: onlineOrder },
  { path: '/onlineOrder', name: '蔬菜', component: onlineOrder },
  { path: '/onlineOrder', name: '經典', component: onlineOrder }
]
