<template>
  <div>
    <div class="memberdiscount container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="logoCard d-flex justify-content-center mb-2">
                <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
              </div>
              <div class="btn-group-vertical d-flex justify-content-center">
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/memberCenter"
                    class="d-block link-underline link-underline-opacity-0 ">會員中心</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/orderLog"
                    class="d-block link-underline link-underline-opacity-0">歷史訂單</router-link>
                </button>
                <button class="btn btn-outline-primary active" type="button">
                  <router-link to="/member/discount"
                    class="d-block text-light link-underline link-underline-opacity-0">我的優惠券</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/exchange"
                    class="d-block link-underline link-underline-opacity-0">點數兌換</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/" class="d-block link-underline link-underline-opacity-0">登出</router-link>
                </button>
              </div>
            </div>
            <div class="col-9">
              <h3 class="text-center">我的優惠券</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="col-11 mb-4">
                  <h5>我的優惠券</h5>
                  <hr />
                  <div class="d-flex flex-wrap">
                    <!-- card 1 -->
                    <div class="card mb-4 me-2" style="width: 13rem">
                      <img src="/31.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">香腸 1 根</h5>
                        <p class="card-text mb-0">
                          兌換券
                        </p>
                      </div>
                    </div>
                    <!-- card 1 end -->
                    <!-- card 2  -->
                    <div class="card mb-4 me-2" style="width: 13rem">
                      <img src="/46.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">杏包菇 2 串</h5>
                        <p class="card-text mb-0">
                          兌換券
                        </p>
                      </div>
                    </div>
                    <!-- card 2 end -->
                    <!-- card 3  -->
                    <div class="card mb-4 me-2" style="width: 13rem">
                      <img src="/14.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">干貝捲牛肉 2 串</h5>
                        <p class="card-text mb-0">
                          兌換券
                        </p>
                      </div>
                    </div>
                    <!-- card 3 end -->
                    <!-- card 4  -->
                    <div class="card mb-4 me-3" style="width: 13rem">
                      <img src="/37.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">花椰菜 2 串</h5>
                        <p class="card-text mb-0">
                          兌換券
                        </p>
                      </div>
                    </div>
                    <!-- card 4 end -->
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
<script>
import { docCookies } from '../../assets/cookie';

export default {
  methods: {
    signOut() {
      docCookies.removeItem("token");
      docCookies.removeItem("identity");
    }
  }
}
</script>
<style lang="scss">
.memberdiscount {
  min-height: calc(100vh - 174px);

  button:hover {
    a {
      color: white;
    }
  }

  .questionIcon:hover {
    cursor: pointer;
  }
}</style>