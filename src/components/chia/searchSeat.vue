<template>
  <div class="row g-3" v-if="tidyResponse.length !== 0">
    <div v-for="(obj, idx) in tidyResponse" :key="idx" class="col-xl-4 col-lg-6 col-md-6">
      <div class="col-md-12">
        <div class="card card-body position-relative">
          <div class="position-absolute" style="top: 12px; right: 10px;">
            <span class="fs-6 fw-bolder text-dark">{{ obj.day }}</span>
          </div>
          <div class="mb-3 row fs-5 fw-bolder">
            <span class="col-sm-3 text-primary">訂位人</span>
            <span class="col-sm-9">{{ obj.name }}</span>
          </div>
          <div class="mb-3 row fs-5 fw-bolder">
            <span class="col-sm-3 text-primary">手機</span>
            <span class="col-sm-9">{{ obj.phone }}</span>
          </div>
          <div class="mb-3 row fs-5 fw-bolder">
            <span class="col-sm-3 text-primary">人數</span>
            <span class="col-sm-9">{{ obj.personCount }}</span>
          </div>
          <div class="position-absolute" style="top: 32px; right: 10px;">
            <span class="fs-6 fw-bolder text-dark">{{ obj.time }}</span>
          </div>
          <button type="button" class="text-light btn btn-danger w-100" @click="cancelSeat(obj.id)">取消</button>
        </div>
      </div>
    </div>
  </div>
  <div class="notice col-lg-7 col-md-10 py-4 m-auto">
    <p class="my-0 fs-4 fw-bolder text-dark">注意事項</p>
    <ul class="list fs-5 text-dark">
      <li>現場保留時間為10分，請客人盡早準時抵達。</li>
      <li>人數異動、臨時取消，請提前告知店家，避免影響雙方權益</li>
      <li>響應食材不浪費，離開前如有浪費食物疑慮，即額外收取相關費用</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['getResponse'],
  data() {
    return {
      tidyResponse: []
    }
  },
  watch: {
    getResponse() {
      this.tidyResponse = this.getResponse
    }
  },
  mounted() {
    this.tidyResponse = this.getResponse
  },
  methods: {
    cancelSeat(ordersId) {
      this.$axios
        .delete(`/bookingfrom/${ordersId}`)
        .then(response => {
          if (response.status === 200) {
            this.tidyResponse = []
            this.$swal({
              icon: 'success',
              title: '成功取消',
              text: '歡迎您再次預定',
              timer: 1500
            })
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '訂位取消失敗',
            text: '請稍後再試',
            timer: 1500
          }).then(() => {
            this.$router.push({ path: '/' })
          });
        })
    }
  }
}
</script>

<style scoped lang="scss">
@media (min-width:576px) {
  .tbody-fs {
    font-size: 16px;
  }
}

@media (min-width:768px) {
  .tbody-fs {
    font-size: 20px;
  }
}
</style>
