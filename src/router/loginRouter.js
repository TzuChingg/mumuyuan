import signinComponent from '../components/chia/signinComponent.vue'
import forgetComponent from '../components/chia/forgetComponent.vue'
import loginComponent from '../components/chia/loginComponent.vue'
import loginView from '../views/chia/loginView.vue'

export default {
  path: '/login',
  component: loginView,
  children: [
    { path: '', component: loginComponent },
    { path: 'signin', component: signinComponent },
    { path: 'forget', component: forgetComponent },
  ],
}
