<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/navLogo.png" alt="" height="75" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">線上點餐</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/reserve">立即訂位</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/search">訂位/訂單查詢</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">常見問題</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/login">登入/註冊</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {

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