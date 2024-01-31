<template>
  <div v-if="showNav">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/navLogo.png" alt="" height="75" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">首頁(暫時放後台)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/menu">線上點餐</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/reserve">立即訂位</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/search">訂位/訂單查詢</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">常見問題(往下滾)</a>
            </li>
            <li class="nav-item" v-if="!hasToken">
              <a class="nav-link" href="#/login">登入/註冊</a>
            </li>
            <li class="nav-item" style="width: 60px;" v-else>
              <a class="nav-link" :href="identityHref">
                <img style="margin: 0 auto;height: 40px; border-radius: 50%;background-color: rgb(238, 231, 193);"
                  src="/user.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <div class="bg-image bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light mt-4 mb-4">
              <div class="container-fluid">
                <router-link to="/">
                  <img class="w-100" src="/首頁圖片/logo.png" alt="" />
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                      <router-link to="/menu" class="nav-link fs-5 text-light text-decoration-none">線上點餐</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/reserve" class="nav-link fs-5 text-light text-decoration-none">立即訂位</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/search"
                        class="nav-link fs-5 text-light text-decoration-none">訂位/訂單查詢</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name: 'FAQ', hash: '#FAQ'}" class="nav-link fs-5 text-light text-decoration-none">常見問題</router-link>
                    </li>
                    <li class="nav-item" v-if="!hasToken">
                      <router-link to="/login" class="nav-link fs-5 text-light text-decoration-none">登入/註冊</router-link>
                    </li>
                    <li class="nav-item " v-else>
                      <router-link  :to="identityHref" class="nav-link fs-5 text-light text-decoration-none"><img
                          src="/首頁圖片/user.png" alt="會員中心"></router-link>
                    </li>
                  </ul>
                 </div>
              </div>
            </nav>
          </div>
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
      hasToken: false,
      identityHref: "#/memberCenter",
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
      this.identityHref = (docCookies.getItem("identity") === "admin") ? "/order" : "/memberCenter";
      if (newRoute.fullPath === '/') {
        this.hasToken = docCookies.hasItem("token");
      }
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

<style scoped lang="scss">
.bg-image {
  background-image: url('/首頁圖片/bg-shape.png');
  background-size: cover;
}

ul.nav {
  .nav-item {
    margin: 0 0.6rem;

    &:last-child {
      margin: 0;
    }
  }
}
</style>