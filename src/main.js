//框架、狀態管理
import { createApp, h } from 'vue'
import { createPinia } from 'pinia'

//BS框架
import './assets/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//API
import axios from 'axios'
import VueAxios from 'vue-axios'

//路由器
import router from './router'

//全域組件
import navbarComponent from '@/components/global/NavbarComponent.vue'
import footerComponent from '@/components/global/FooterComponent.vue'

// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from './assets/zh_TW.json'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true //有輸入時就驗證
})
setLocale('zh_TW')

//Vue loading
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import LoaderComponent from '@/components/ching/LoadingComponent.vue'

//Vue sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
//套件工具
import VueApexCharts from 'vue3-apexcharts'
import ApexCharts from 'apexcharts'
import ws from 'ws'
//網站起始點掛載
import App from './App.vue'

const app = createApp(App)

const api = import.meta.env.VITE_API
app.config.globalProperties.$axios = axios.create({
  baseURL: api
})
app.config.globalProperties.$ws = ws
app.config.globalProperties.$apexcharts = ApexCharts
app.component('navbarComponent', navbarComponent)
app.component('footerComponent', footerComponent)

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(
  LoadingPlugin,
  {
    backgroundColor: '#000'
  },
  {
    default: h(LoaderComponent)
  }
)
app.use(VueApexCharts)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)

app.mount('#app')
