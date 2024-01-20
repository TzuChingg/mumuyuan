<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="logoCard d-flex justify-content-center mb-2">
                <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
              </div>
              <div class="btn-group-vertical d-flex justify-content-center">
                <button class="btn btn-outline-primary active" type="button">
                  <a href="#/memberCenter" class="d-block text-light link-underline link-underline-opacity-0 "
                    >會員中心</a
                  >
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/member/orderLog" class="d-block link-underline link-underline-opacity-0">歷史訂單</a>
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
              <h3 class="text-center">會員中心</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="col-8 mb-4">
                  <h5>基本資料</h5>
                  <hr />
                  <div class="mb-3 row">
                    <label for="name" class="col-xxl-2 col-form-label">姓名：</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="name" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="phone" class="col-xxl-2 col-form-label">手機：</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="phone" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="email" class="col-xxl-2 col-form-label">信箱：</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="email" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="email" class="col-xxl-3 col-form-label">會員點數：</label>
                    <div class="col-sm-9">
                      <p class="mt-2">
                        10點
                        <span
                          class="questionIcon ms-3 bi-question-circle-fill"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="每消費100元集一點，用於優惠券兌換。"
                        ></span>
                      </p>
                    </div>
                  </div>
                  <div class="buttonSave d-flex justify-content-center">
                    <button class="btn btn-primary" type="button">儲存</button>
                  </div>
                </div>
                <div class="col-8 mb-4">
                  <h5>修改密碼</h5>
                  <hr />
                  <div class="mb-3 row">
                    <label for="name" class="col-xxl-4 col-form-label">目前密碼：</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control" id="password" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="phone" class="col-xxl-4 col-form-label">新密碼：</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control" id="newPassword" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="name" class="col-xxl-4 col-form-label">重新輸入新密碼：</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control" id="rePassword" />
                    </div>
                  </div>
                  <div class="buttonSave d-flex justify-content-center">
                    <button class="btn btn-primary" type="button">更改密碼</button>
                  </div>
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
button:hover {
  a {
    color: white;
  }
}
.questionIcon:hover {
  cursor: pointer;
}
</style>
