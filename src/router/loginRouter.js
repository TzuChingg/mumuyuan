import LoginView from '@/views/chia/LoginView.vue'

export default [
  {
    path: '/login',
    component: LoginView,
    children: [
      { path: '', component: () => import('@/components/chia/LoginComponent.vue') },
      { path: 'signin', component: () => import('@/components/chia/SigninComponent.vue') },
      { path: 'forget', component: () => import('@/components/chia/ForgetComponent.vue') }
    ]
  }
]
