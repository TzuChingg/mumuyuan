<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
              <a class="nav-link" href="#">線上點餐(claire放這)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/reserve">立即訂位</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/search">訂位/訂單查詢</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">常見問題(未做)</a>
            </li>
            <li class="nav-item" v-if="!hasToken">
              <a class="nav-link" href="#/login">登入/註冊</a>
            </li>
            <li class="nav-item" style="width: 60px;" v-else>
              <a class="nav-link" href="#/memberCenter">
                <img style="margin: 0 auto;height: 40px; border-radius: 50%;background-color: rgb(238, 231, 193);"
                  src="/user.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { docCookies } from '../../assets/cookie';
export default {
  data() {
    return {
      // hasToken: false
    }
  },
  computed: {
    hasToken() {
      return docCookies.hasItem("token");
    }
  }
}
</script>

<style scoped lang="scss">
ul.nav {
  .nav-item {
    margin: 0 0.6rem;

    &:last-child {
      margin: 0;
    }
  }
}
</style>