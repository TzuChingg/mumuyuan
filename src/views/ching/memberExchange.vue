<template>
  <div>
    <div class="memberexchange container py-5">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="logoCard d-flex justify-content-center mb-2">
                <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
              </div>
              <div class="btn-group-vertical d-flex justify-content-center">
                <button class="btn btn-outline-primary" type="button">
                  <router-link
                    to="/memberCenter"
                    class="d-block link-underline link-underline-opacity-0"
                    >會員中心</router-link
                  >
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link
                    to="/member/orderLog"
                    class="d-block link-underline link-underline-opacity-0"
                    >歷史訂單</router-link
                  >
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link
                    to="/member/discount"
                    class="d-block link-underline link-underline-opacity-0"
                    >我的優惠券</router-link
                  >
                </button>
                <button class="btn btn-outline-primary active" type="button">
                  <router-link
                    to="/member/exchange"
                    class="d-block text-light link-underline link-underline-opacity-0"
                    >點數兌換</router-link
                  >
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link
                    to="/"
                    class="d-block link-underline link-underline-opacity-0"
                    @click="signOut"
                    >登出</router-link
                  >
                </button>
              </div>
            </div>
            <div class="col-9">
              <h3 class="text-center">點數兌換</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="col-11 mb-4">
                  <h5 class="text-center">會員點數：{{ userInfo.point }} 點</h5>
                  <hr />
                  <div class="d-flex flex-wrap">
                    <!-- card 1 -->
                    <div class="mb-4 col-sm-6 col-xl-4 p-2" v-for="i in coupons">
                      <img
                        :src="`/木木苑食材修圖/${i.image}.jpg`"
                        class="card-img-top"
                        alt="image error"
                      />
                      <div class="card-body p-2 bg-light">
                        <h5 class="card-title fw-bolder">{{ i.name + '1' + i.unit }}</h5>
                        <p class="card-text text-start mb-3">{{ i.point }} 點</p>
                        <div class="row d-flex justify-content-center">
                          <div class="col-auto">
                            <button
                              type="button"
                              class="btn btn-primary items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              @click="chooseDiscount(i)"
                              :disabled="userInfo.point<i.point"
                            >
                              兌換
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card 1 end -->
                  </div>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">點數兌換</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          是否使用 {{ choose.point }} 點兌換 {{ choose.name }} 1 {{ choose.unit }}
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            取消
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            @click="confirm(choose)"
                            data-bs-dismiss="modal"
                          >
                            確認
                          </button>
                        </div>
                      </div>
                    </div>
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
import { docCookies } from '../../assets/cookie'

export default {
  data() {
    return {
      userInfo: {},
      coupons: [],
      choose: {}
    }
  },
  created() {
    this.$axios.get(`/coupons?isLook=true`).then((res) => {
      this.coupons = res.data
      this.getUserInfo()
    })
  },
  methods: {
    getUserInfo() {
      this.$axios.get(`/users/${docCookies.getItem('id')}`).then((res) => {
        this.userInfo = res.data
      })
    },
    chooseDiscount(iChoose) {
      this.choose = iChoose
    },
    confirm(getPoint) {
      const point = this.userInfo.point - getPoint.point
      let coupon = this.userInfo.coupon
      coupon.push(getPoint.id)
      this.$axios
        .patch(`/users/${this.userInfo.id}`, { point, coupon })
        .then((response) => {
          if (response.status === 200) {
            this.getUserInfo()
            alert('更新成功')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signOut() {
      docCookies.removeItem('token')
      docCookies.removeItem('identity')
      docCookies.removeItem('id')
    }
  }
}
</script>
<style lang="scss" scoped>
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

  .card {
    img {
      object-fit: cover;
      height: 150px;
    }
  }
}
</style>
