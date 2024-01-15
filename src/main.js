import './assets/main.scss'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from 'apexcharts';
const app = createApp(App)

app.config.globalProperties.$apexcharts = ApexCharts;

app.use(VueApexCharts);
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)


app.mount('#app')


