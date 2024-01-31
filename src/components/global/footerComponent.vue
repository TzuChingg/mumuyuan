<template>
  <div v-if="showNav">
    <div class="container-fluid bg-primary">
      <div class="container">
        <div class="row">
          <footer class="navbar navbar-expand-lg navbar-light mt-4">
            <div class="container-fluid">
              <router-link to="/">
                <img class="w-100" src="/首頁圖片/logo-footer.png" alt="" />
              </router-link>
              <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#footerSupportedContent" aria-controls="footerSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> -->
              <div class=" align-items-center" id="footerSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link fs-5 text-light text-decoration-none"><img
                        src="/首頁圖片/instagram.png" alt="instagram連結"></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link fs-5 text-light text-decoration-none"><img
                        src="/首頁圖片/facebook.png" alt="facebook連結"></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link fs-5 text-light text-decoration-none"><img src="/首頁圖片/line.png"
                        alt="Line連結" style="height: 48px; width: 48px;"></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          <p class="text-light">#5-木木苑串燒專門店 ©2023 Copyrights All Rights Reserved</p>
        </div>
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

<style></style>