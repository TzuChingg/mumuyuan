<template>
  <div v-if="showNav">
    <div class="container-fluid bg-primary">
    
        <div class="row">
          <footer class="navbar navbar-expand-lg navbar-light mt-4">
            <div class="container-fluid">
              <router-link to="/">
                <img class="w-100" src="/首頁圖片/logo-footer.png" alt="" />
              </router-link>
              <div class=" align-items-center" id="footerSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link fs-5 text-light text-decoration-none"
                      href="https://www.instagram.com/explore/locations/109668478495672/-/"><img src="/首頁圖片/instagram.png"
                        alt="instagram連結"></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fs-5 text-light text-decoration-none"
                      href="https://www.facebook.com/mumuyuan2022/"><img src="/首頁圖片/facebook.png" alt="facebook連結"></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fs-5 text-light text-decoration-none"
                      href="https://liff.line.me/1645278921-kWRPP32q/?accountId=960lyfwq"><img src="/首頁圖片/line.png"
                        alt="line連結" style="height: 48px; width: 48px;"></a>

                  </li>
                </ul>
              </div>
            </div>
          </footer>
          <p class="text-light">#5-木木苑串燒專門店 ©2023 Copyrights All Rights Reserved</p>
        </div>
     
    </div>
  </div>
</template>

<script>
import { docCookies } from '../../assets/cookie';
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
    currentRoute(newRoute, oldRoute) {
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

<style>
</style>
