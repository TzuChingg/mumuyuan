<template>
  <div class="btn-group-vertical d-flex justify-content-center mt-5">
    <router-link to="/member" class="btn  btn-outline-primary"
      :class="{ localroute: linkSetting === '/member' ? true : false }">會員中心</router-link>
    <router-link to="/member/orderLog" class="btn  btn-outline-primary"
      :class="{ localroute: linkSetting === '/member/orderLog' ? true : false }">歷史訂單</router-link>
    <router-link to="/member/discount" class="btn  btn-outline-primary"
      :class="{ localroute: linkSetting === '/member/discount' ? true : false }">我的優惠券</router-link>
    <router-link to="/member/exchange" class="btn  btn-outline-primary"
      :class="{ localroute: linkSetting === '/member/exchange' ? true : false }">點數兌換</router-link>
    <router-link to="/" class="btn  btn-outline-primary" @click="signOut">登出</router-link>
  </div>
</template>
<script>
import { docCookies } from '@/assets/cookie.js';
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
      this.$swal({
        icon: 'success',
        title: '成功登出',
        text: '導覽至首頁'
      }).then(() => {
        window.location.href = import.meta.env.VITE_BASE
      });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/main.scss';

.btn-group-vertical {
  a:hover {
    color: white;
  }
}

.localroute {
  background-color: #B2815A;
  color: white;

  a {
    color: white;
  }
}
</style>
