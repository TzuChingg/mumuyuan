import NewsPage from '@/views/ching/NewsPage.vue'
import MemberView from '@/views/chia/MemberView.vue'
import OnlineOrder from '@/views/ching/OnlineOrder.vue'
import CartPage from '@/views/ching/CartPage.vue'

export default [
  { path: '/news/:id', component: NewsPage },
  {
    path: '/member',
    component: MemberView,
    children: [
      { path: '', component: () => import('@/components/chia/MemberCenter.vue') },
      { path: 'orderlog', component: () => import('@/components/chia/MemberOrderLog.vue') },
      { path: 'discount', component: () => import('@/components/chia/MemberDiscount.vue') },
      { path: 'exchange', component: () => import('@/components/chia/MemberExchange.vue') }
    ]
  },
  { path: '/onlineOrder', component: OnlineOrder },
  { path: '/cartPage', component: CartPage },
  { path: '/onlineOrder', name: '固定套餐', component: OnlineOrder },
  { path: '/onlineOrder', name: '秘捲', component: OnlineOrder },
  { path: '/onlineOrder', name: '肉品', component: OnlineOrder },
  { path: '/onlineOrder', name: '海鮮', component: OnlineOrder },
  { path: '/onlineOrder', name: '酒食', component: OnlineOrder },
  { path: '/onlineOrder', name: '蔬菜', component: OnlineOrder },
  { path: '/onlineOrder', name: '經典', component: OnlineOrder }
]
