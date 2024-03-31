<template>
  <h3 class="text-center text-dark" style="font-weight: 600;letter-spacing: 2px;">我的優惠券</h3>
  <hr />
  <div class="row justify-content-center memberdiscount">
    <div class="col-12 mb-4">
      <h5 class="text-primary fw-bolder px-2" style="letter-spacing: 1px;">我的優惠券</h5>
      <hr />
      <div class="d-flex flex-wrap">
        <div class="mb-4 col-lg-4 col-6 p-2" v-for="i in myCoupons" :key="i.name">
          <img :src="`./木木苑食材修圖/${i.image}.jpg`" class="card-img-top" alt="折價券" />
          <div class="card-body p-2 bg-light">
            <h5 class="card-title fw-bolder mb-2">{{ i.name }}</h5>
            <p class="card-text mb-0">{{ i.description }}</p>
            <p class="card-text text-end text-danger mt-1 mb-0">使用期限到{{ i.expiryDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { docCookies } from '@/assets/cookie'

export default {
  data() {
    return {
      myCoupons: []
    }
  },
  methods: {
    async filterCoupons() {
      try {
        const getUsers = await this.$axios.get(`/users/${docCookies.getItem('id')}`)
        const today = new Date().toLocaleDateString()
        this.myCoupons = getUsers.data.coupon.filter(element => {
          let expiryDate = new Date(element.expiryDate)
          return expiryDate >= new Date(today)
        })
      } catch (error) { console.error(error); }
    }
  },
  mounted() {
    this.filterCoupons()
  }
}
</script>
<style lang="scss" scoped>
.memberdiscount {
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
