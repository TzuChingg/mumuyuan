<template>
  <div v-if="showNav">
    <!-- <footer v-if="showNav" class="footer d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-light">
      <p class="col-md-4 ms-5 text-muted my-auto">© 2023 Company, Inc</p>
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#/" class="nav-link px-2 text-muted">木木苑</a></li>
        <li class="nav-item"><a href="#/reserve" class="nav-link px-2 text-muted">線上訂位</a></li>
        <li class="nav-item"><a href="#/search" class="nav-link px-2 text-muted">訂單/訂位查詢</a></li>
        <li class="nav-item"><a href="#/" class="nav-link px-2 text-muted">常見問題</a></li>
      </ul>
    </footer> -->
    <div class="container-fluid bg-primary">
      <div class="container">
        <div class="row">
          <footer class="navbar navbar-expand-lg navbar-light mt-4">
            <div class="container-fluid">
              <router-link to="/">
                <img src="/首頁圖片/logo-footer.png" alt="" />
              </router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
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