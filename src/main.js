//BS框架
import './assets/main.scss'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

//框架、狀態管理
import { createApp } from 'vue';
import { createPinia } from 'pinia';

//API
import axios from 'axios';
import VueAxios from 'vue-axios';

//路由器
import router from './router/'

//全域組件
import navbarComponent from "./components/global/navbarComponent.vue";

//網站起始點掛載
import App from './App.vue';


const app = createApp(App);
app.component('navbarComponent', navbarComponent);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);


app.mount('#app');


