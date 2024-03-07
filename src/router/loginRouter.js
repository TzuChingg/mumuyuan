import loginView from '../views/chia/loginView.vue'

export default [
  {
    path: '/login',
    component: loginView,
    children: [
      { path: '', component: () => import('../components/chia/loginComponent.vue') },
      { path: 'signin', component: () => import('../components/chia/signinComponent.vue') },
      { path: 'forget', component: () => import('../components/chia/forgetComponent.vue') }
    ]
  }
]
