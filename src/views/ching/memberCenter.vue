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
  <div class="row justify-content-center" >
    <div class="col-9 ">
      <div class="row">
        <div class="col-3 border-end">
          <div class="logoCard d-flex justify-content-center mb-2">
            <img class="rounded-circle mt-2"  src="/logoCard.jpg" alt=""  style="height: 100px;">
          </div>
          <!-- <ul class=" list-unstyled ">
            <li class="mb-2 border"><a class="d-block" href="#/memberCenter">會員中心</a></li>
            <li class="mb-2"><a href="">歷史訂單</a></li>
            <li class="mb-2"><a href="">我的優惠券</a></li>
            <li class="mb-2"><a href="">點數兌換</a></li>
          </ul> -->
          <div class="btn-group-vertical d-flex justify-content-center">
            <button class="btn btn-outline-primary active" type="button"> <a href="#" class=" text-light link-underline link-underline-opacity-0">會員中心</a></button>
            <button class="btn btn-outline-primary " type="button"> <a href="#" class=" link-underline link-underline-opacity-0">歷史訂單</a></button>
            <button class="btn btn-outline-primary " type="button"> <a href="#" class=" link-underline link-underline-opacity-0">我的優惠券</a></button>
            <button class="btn btn-outline-primary " type="button"> <a href="#" class=" link-underline link-underline-opacity-0">點數兌換</a></button>
          </div>
        </div>
        <div class="col-9">
          <h3 class=" text-center">會員中心</h3>
          <hr>


        </div>

      </div>


    </div>
  </div>
</div>
  
</template>

<style lang="scss">
  button:hover{
    a{
      color:white;

    }
  }

</style>