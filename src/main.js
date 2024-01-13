import './assets/main.scss'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import loginRouter from './router/loginRouter'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(loginRouter)

app.mount('#app')


