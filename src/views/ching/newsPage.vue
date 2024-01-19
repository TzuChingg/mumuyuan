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
            <a class="nav-link active" aria-current="page" href="#">線上點餐</a>
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
      <div class="col-8">
        <div class="row">
          <div class="col-9">
            <h3>木木苑周年慶</h3>
            <hr />
            <div class="row news">
              <div class="d-flex justify-content-center mb-5">
                <img src="/newsImage.jpg" alt="" />
              </div>
            </div>
            <p>木木苑一周年啦！！</p>
            <p>感謝您在過去一年中對我們的支持，為此我們準備了優惠活動</p>
            <p>11/24(五)-11/26(日) 限期三天</p>
            <p>■巨無霸魷魚 買一送一 (每人限購一組)</p>
            <p>■金牌生啤 買一送一 (不列入會員集點)</p>
            <p>❕木木苑保有活動解釋權，造成不便敬請見諒❕</p>
          </div>
          <div class="otherNews col-sm-3 mb-3 mx-auto">
            <p class="fs-5 mt-3 mb-0">最新消息</p>
            <hr class="mb-0 mt-0">
            <p>
              <a
                href=""
                class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0"
                >鯖魚狂歡！買一送一</a
              >
            </p>
            <p>
              <a
                href=""
                class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0"
                >鳳梨蝦球！新品上市</a
              >
            </p>
            <P>
              <a
                href=""
                class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0"
                >冬季暖心美味，一碗味噌湯解凍你的寒冷心靈</a
              ></P
            >
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
.news {
  img {
    object-fit: contain;
    height: 300px;
  }
}
.otherNews {
  p {
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
