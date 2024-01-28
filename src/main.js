//框架、狀態管理
import { createApp } from 'vue';
import { createPinia } from 'pinia';

//BS框架
import './assets/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap'

//API
import axios from 'axios';
import VueAxios from 'vue-axios';

//路由器
import router from './router'

//全域組件
import navbarComponent from "./components/global/navbarComponent.vue";
import footerComponent from "./components/global/footerComponent.vue";

//套件工具
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from 'apexcharts';
import ws from 'ws';
//網站起始點掛載
import App from './App.vue';

const app = createApp(App);
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://localhost:3000',
  })
app.config.globalProperties.$ws = ws;
app.config.globalProperties.$apexcharts = ApexCharts;
app.component('navbarComponent', navbarComponent);
app.component('footerComponent', footerComponent);

app.use(VueApexCharts);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);


//debug
app.config.errorHandler = (err,vm,info) =>{
  console.log(err);
  console.log(info);
}

app.mount('#app');