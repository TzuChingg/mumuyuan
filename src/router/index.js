//工具
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'

//Router
import loginRouter from './loginRouter';
import reserveRouter from './reserveRouter';
import searchRouter from './searchRouter';

//頁面
import backend   from './backend';
//測試
import pagePost from '/src/views/eric/test/pagePost.vue'
//主頁
import IndexTest from '/src/views/eric/IndexTest.vue'




const routes = [
  {path:'/',component:IndexTest,},
  {path:'/:postId',component:pagePost,},
  ...backend,
  {...loginRouter},
  {...reserveRouter},
  {...searchRouter},
]


const router = createRouter({
  history:  createWebHashHistory(),
  routes,
});


export default router