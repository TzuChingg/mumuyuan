<template>
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

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-9">
        <div class="row">
          <div class="col-3 border-end">
            <div class="logoCard d-flex justify-content-center mb-2">
              <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
            </div>
            <div class="btn-group-vertical d-flex justify-content-center">
              <button class="btn btn-outline-primary " type="button">
                <a href="#/memberCenter" class="d-block link-underline link-underline-opacity-0 "
                  >會員中心</a
                >
              </button>
              <button class="btn btn-outline-primary active" type="button">
                <a href="#/member/orderLog" class="d-block text-light link-underline link-underline-opacity-0">歷史訂單</a>
              </button>
              <button class="btn btn-outline-primary" type="button">
                <a href="#/member/discount" class="d-block link-underline link-underline-opacity-0">我的優惠券</a>
              </button>
              <button class="btn btn-outline-primary" type="button">
                <a href="#/member/exchange" class="d-block link-underline link-underline-opacity-0">點數兌換</a>
              </button>
            </div>
          </div>
          <div class="col-9">
            <h3 class="text-center">歷史訂單</h3>
            <hr />
            <div class="row justify-content-center">
              <div class="col-8 mb-4">
                <h5>歷史訂單</h5>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
    <p class="col-md-4 ms-5 text-muted my-auto">© 2023 Company, Inc</p>
    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="" class="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>
</template>

<style lang="scss">
button:hover {
  a {
    color: white;
  }
}
.questionIcon:hover {
  cursor: pointer;
}
</style>
