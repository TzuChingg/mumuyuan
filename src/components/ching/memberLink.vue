<template>
  <div class="btn-group-vertical d-flex justify-content-center mt-5">
    <button class="btn btn-outline-primary" :class="{ localroute: linkSetting === '/member' ? true : false }"
      type="button">
      <router-link to="/member" class="d-block link-underline link-underline-opacity-0 ">會員中心</router-link>
    </button>
    <button class="btn btn-outline-primary" :class="{ localroute: linkSetting === '/member/orderLog' ? true : false }"
      type="button">
      <router-link to="/member/orderLog" class="d-block link-underline link-underline-opacity-0">歷史訂單</router-link>
    </button>
    <button class="btn btn-outline-primary" :class="{ localroute: linkSetting === '/member/discount' ? true : false }"
      type="button">
      <router-link to="/member/discount" class="d-block link-underline link-underline-opacity-0">我的優惠券</router-link>
    </button>
    <button class="btn btn-outline-primary" :class="{ localroute: linkSetting === '/member/exchange' ? true : false }"
      type="button">
      <router-link to="/member/exchange" class="d-block link-underline link-underline-opacity-0">點數兌換</router-link>
    </button>
    <button class="btn btn-outline-primary" type="button">
      <router-link to="/" class="d-block link-underline link-underline-opacity-0" @click="signOut">登出</router-link>
    </button>
  </div>
  {{ linkSetting }}
</template>
<script>
import { docCookies } from '../../assets/cookie.js';
export default {
  computed: {
    linkSetting() {
      return this.$route.path
    }
  },
  methods: {
    signOut() {
      docCookies.removeItem("token");
      docCookies.removeItem("identity");
      docCookies.removeItem("id");
      window.location.href = "/";
    }
  }
}
</script>
<style lang="scss" scoped>
@import '/src/assets/main.scss';

button:hover {
  a {
    color: white;
  }
}

.localroute {
  background-color: #B2815A;
  a{
    color: white;
  } 
}
</style>
