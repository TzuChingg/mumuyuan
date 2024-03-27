<template>
  <div class="bg-primary py-3" v-if="showNav">
    <div class="container">
      <footer class="navbar navbar-expand-lg navbar-light py-4 justify-content-between align-items-center">
        <router-link class="col-md-4 col-sm-6 col-10 mx-auto" to="/">
          <img class="w-100" src="/首頁圖片/logo-footer.png" alt="返回首頁" />
        </router-link>
        <ul class="navbar-nav flex-row col-md-8 col-sm-6 col-12 justify-content-center justify-content-sm-end my-2">
          <li class="nav-item mx-2">
            <a class="nav-link fs-5 text-light text-decoration-none"
              href="https://www.instagram.com/explore/locations/109668478495672/-/"><img src="/首頁圖片/instagram.png"
                alt="instagram連結">
            </a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link fs-5 text-light text-decoration-none" href="https://www.facebook.com/mumuyuan2022/"><img
                src="/首頁圖片/facebook.png" alt="facebook連結">
            </a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link fs-5 text-light text-decoration-none"
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=960lyfwq"><img src="/首頁圖片/line.png" alt="line連結"
                style="height: 48px; width: 48px;">
            </a>
          </li>
        </ul>
      </footer>
      <p class="text-light m-0">#5-木木苑串燒專門店 ©2023 Copyrights All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import { docCookies } from '@/assets/cookie';
export default {
  data() {
    return {
      identity: 'user',
      showNav: true,
    }
  },
  computed: {
    currentRoute() {
      return this.$route;
    }
  },
  watch: {
    currentRoute(newRoute) {
      this.showNav = ((docCookies.getItem("identity") === "admin") &&
        (newRoute.fullPath === '/order' ||
          newRoute.fullPath === '/memberMange' ||
          newRoute.fullPath === '/sales' ||
          newRoute.fullPath === '/product' ||
          newRoute.fullPath === '/booking' ||
          newRoute.fullPath === '/discount' ||
          newRoute.fullPath === '/journey')) ? false : true;
    },
  }
}
</script>
