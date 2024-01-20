<template>
  <div>
    <div class="memberexchange container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="logoCard d-flex justify-content-center mb-2">
                <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
              </div>
              <div class="btn-group-vertical d-flex justify-content-center">
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/memberCenter" class="d-block link-underline link-underline-opacity-0 ">會員中心</a>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/member/orderLog" class="d-block link-underline link-underline-opacity-0">歷史訂單</a>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/member/discount" class="d-block link-underline link-underline-opacity-0">我的優惠券</a>
                </button>
                <button class="btn btn-outline-primary active" type="button">
                  <a href="#/member/exchange" class="d-block text-light link-underline link-underline-opacity-0">點數兌換</a>
                </button>
              </div>
            </div>
            <div class="col-9">
              <h3 class="text-center">點數兌換</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="col-8 mb-4">
                  <h5>點數兌換</h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss">
.memberexchange {
  min-height: calc(100vh - 174px);

  button:hover {
    a {
      color: white;
    }
  }

  .questionIcon:hover {
    cursor: pointer;
  }
}
</style>
  