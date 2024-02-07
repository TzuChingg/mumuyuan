<template>
  <div class="py-5">
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
                <button class="btn btn-outline-primary active" type="button">
                  <router-link
                    to="/member/discount"
                    class="d-block text-light link-underline link-underline-opacity-0"
                    >我的優惠券</router-link
                  >
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link
                    to="/member/exchange"
                    class="d-block link-underline link-underline-opacity-0"
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
              <h3 class="text-center">我的優惠券</h3>
              <hr class="pt-3"/>
              <div class="row justify-content-center">
                <div class="col-11 mb-4">
                  <div class="d-flex flex-wrap">
                    <!-- card 1 -->
                    <div class="card mb-4 me-2" style="width: 13rem" v-for="i in myCoupons">
                      <img :src="`/木木苑食材修圖/${i.image}.jpg`" class="card-img-top" alt="image error" />
                      <div class="card-body">
                        <h5 class="card-title">{{i.name +'1'+ i.unit}}</h5>
                        <p class="card-text mb-0">{{i.description}}</p>
                      </div>
                    </div>
                    <!-- card 1 end -->
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
      myCoupons: []
    }
  },
  created() {},
  methods: {
    signOut() {
      docCookies.removeItem('token')
      docCookies.removeItem('identity')
      docCookies.removeItem("id");
    },
    async filterCoupons() {
      try {
        const getCoupons = await this.$axios.get('/coupons')
        const getUsers = await this.$axios.get(`/users/${docCookies.getItem('id')}`)
        const splitCoupons = getUsers.data.coupon.split(',')
        splitCoupons.forEach((iCoupons) => {
          const findIndex = getCoupons.data.findIndex((every) => every.id === iCoupons - 0)
          this.myCoupons.push(getCoupons.data[findIndex])
        })
      } catch (error) {}
    }
  },
  mounted() {
    this.filterCoupons()
  }
}
</script>
<style lang="scss" scoped>
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
}
</style>
