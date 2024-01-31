<template>
  <div v-if="showNav">
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
                    <li class="nav-item "  v-if="hasToken">
                      <router-link  :to="identityHref" class="nav-link fs-5 text-light text-decoration-none"><img
                          src="/首頁圖片/user.png" alt="會員中心"></router-link>
                    </li>
                    <li class="nav-item "  v-if="hasToken">
                      <button type="button" class="btn position-relative bg-transparent">
                        <i class="bi bi-bell fs-2   text-white"></i>
                          <span class="position-absolute top-25 start-75 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                        </button>
                    </li>
                    <li class="nav-item" v-else>
                      <router-link to="/login" class="nav-link fs-5 text-light text-decoration-none">登入/註冊</router-link>
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
// .nav-item:hover{
//   transform: scale(1.1);
// }
.nav-item {
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
}

.nav-item * {
  box-sizing: border-box;
  transition: all 0.35s ease;
}

.nav-item li {
  display: inline-block;
  list-style: outside none none;
  margin: 0.5em 1em;
  padding: 0;
}

.nav-item a, .nav-item button {
  padding: 0.5em 0.8em;
  position: relative;
  text-decoration: none;
  font-size: 20px;
}

.nav-item a::before,.nav-item a::after,
.nav-item button::before, .nav-item button::after
{
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}

.nav-item a::before,
.nav-item button::before {
  content: "";
  right: 0;
  top: 0;
  border-top: 3px solid rgb(241, 238, 233);
  border-right: 3px solid rgb(241, 238, 233);
  transform: translate(-100%, 50%);
}

.nav-item a:after,
.nav-item button:after  {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid rgb(241, 238, 233);
  border-left: 3px solid rgb(241, 238, 233);
  transform: translate(100%, -50%);
}

.nav-item a:hover:before, .nav-item a:hover:after ,
.nav-item button:hover:before, .nav-item button:hover:after 
{
  transform: translate(0, 0);
  opacity: 1;
}

.nav-item a:hover ,
.nav-item button:hover{
  color: black;
}
</style>