import aComponent from '../components/chia/a.vue'
import bComponent from '../components/chia/b.vue'
import loginView from '../views/chia/loginView.vue'

export default {
  path: '/login',
  component: loginView,
  children: [
    { path: 'signin', component: aComponent },
    { path: 'forget', component: bComponent },
  ],
}