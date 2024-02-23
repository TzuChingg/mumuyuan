<template>
  <div v-if="tidyResponse.length !== 0">
    <div v-for="(obj, idx) in tidyResponse" :key="idx" class="card col-lg-4 col-md-6 col-12">
      <div class="g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title">日期 : {{ obj.day }}</h5>
            <p class="card-text">訂位人 : {{ obj.name }}</p>
            <p class="card-text">手機 : {{ obj.phone }}</p>
            <p class="card-text">人數 : {{ obj.personCount }}</p>
            <p class="card-text">時段 : {{ obj.time }}</p>
            <p class="card-text">
              <button type="button" class="text-light btn btn-danger" @click="cancelSeat(obj.id)">取消</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="notice col-lg-8 col-md-10 py-4 m-auto">
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
      console.log(ordersId)
      this.$axios
        .delete(`/bookingfrom/${ordersId}`)
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            this.tidyResponse = []
            alert('成功取消')
          }
        })
        .catch(err => {
          console.log(err)
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
