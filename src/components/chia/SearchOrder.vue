<template>
  <div class="accordion mb-4" id="accordionExample">
    <div class="accordion-item" v-for="(obj, index) in tidyResponse" :key="index">
      <h2 class="accordion-header" id="headingOne">
        <div class="accordion-button collapsed col-12" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne">
          <div class="w-50">
            <div class="row">
              <p class="mb-1 fw-bolder text-dark fs-5" style="letter-spacing: 2px;">訂單編號</p>
              <p class="mb-0 fw-bolder">{{ obj.orderid }}</p>
            </div>
          </div>
          <div class="w-50">
            <div class="row">
              <p class="mb-1 fw-bolder text-dark fs-5" style="letter-spacing: 2px;">日期</p>
              <p class="mb-0 fw-bolder fs-6">{{ obj.day }}</p>
            </div>
          </div>
        </div>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
        <div class="px-2">
          <div class="status mb-3">
            <p class="fs-4 fw-bolder text-center text-muted my-4" style="letter-spacing: 3px;">出餐狀態</p>
            <div class="progress" style="height: 35px">
              <div class="progress-bar progress-bar-striped progress-bar-animated fs-4" role="progressbar"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ref="loading"></div>
            </div>
          </div>
          <table class="table table-borderless">
            <thead class="fs-5">
              <tr>
                <th>圖片</th>
                <th>品項</th>
                <th>數量</th>
                <th>金額</th>
              </tr>
            </thead>
            <tbody class="tbody-fs">
              <tr v-for="(food, index) in obj.product" :key="index">
                <td class="col-1 col-sm-1">
                  <div :style="{ backgroundImage: `url(./木木苑食材修圖small/${food.image})` }" class="product-image"></div>
                </td>
                <td class="col-5 col-sm-2 product-size">{{ food.productName }}</td>
                <td class="col-3 col-sm-1 product-size">{{ food.quantity }}</td>
                <td class="col-3 col-sm-1 product-size">{{ food.quantity * food.price }}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="detail row">
            <div class="col-md-6 col-sm-12">
              <div class="my-1">
                <label class="fs-6 col-4">訂購人</label>
                <input class="col input-set" type="text" :value="obj.name" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">手機</label>
                <input class="col input-set" type="text" :value="obj.phone" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">訂單時間</label>
                <input class="col input-set" type="text" :value="obj.day" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">附贈餐具</label>
                <input class="col input-set" type="text" :value="obj.tableware ? '要' : '不要'" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">購買提袋</label>
                <input class="col input-set" type="text" :value="obj.bags ? '要' : '不要'" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">取餐方式</label>
                <input class="col input-set" type="text" :value="obj.type ? '自取' : '外送'" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">地址</label>
                <input class="col input-set" type="text" :value="obj.type ? '無' : obj.address" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">{{ obj.type ? '預計取餐時間' : '預計送達時間' }}</label>
                <input class="col input-set" type="text" :value="obj.pickTime" disabled readonly />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="my-1">
                <label class="fs-6 col-4">付款方式</label>
                <input class="col input-set" type="text" :value="obj.payment ? '線上付款' : '現金'" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4" col-6>口味</label>
                <input class="col input-set" type="text" :value="flavor(obj.flavor)" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4" col-6>辣度</label>
                <input class="col input-set" type="text" :value="spicy(obj.spicy)" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4">總金額</label>
                <input class="col input-set" type="text" :value="obj.price" disabled readonly />
              </div>
              <div class="my-1">
                <label class="fs-6 col-4 mb-1 d-block">備註</label>
                <textarea class="col-md-10 col-12 input-set p-2 textarea" :value="obj.comment"
                  style="resize: none;min-height: 100px;" disabled readonly></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="notice col-md-6 col-sm-12 fs-4 py-5 m-auto">
    <p class="my-0 fs-4 fw-bolder text-dark">注意事項</p>
    <ul class="list fs-5 text-dark">
      <li>取餐時，請現場清點餐點，確保商品製作無誤。</li>
      <li>請務必當場清點找零</li>
      <li>依現場排隊取餐</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['getResponse'],
  data() {
    return {
      socket: null,
      status: 0
    }
  },
  computed: {
    tidyResponse() {
      return this.getResponse
    },
    spicy() {
      return level => {
        switch (level) {
          case 1:
            return '不辣'
          case 2:
            return '小辣'
          default:
            return '大辣'
        }
      }
    },
    flavor() {
      return level => {
        switch (level) {
          case 1:
            return '梅粉'
          case 2:
            return '秘粉'
          default:
            return '椒鹽'
        }
      }
    }
  },
  watch: {
    status() {
      const loadingElement = this.$refs.loading[0]
      if (this.status == 1) {
        loadingElement.classList.add('wait')
        loadingElement.classList.remove('wait2')
        loadingElement.classList.remove('wait3')
        loadingElement.innerText = '待接單'
      } else if (this.status == 2) {
        loadingElement.classList.add('wait2')
        loadingElement.classList.remove('wait')
        loadingElement.classList.remove('wait3')
        loadingElement.innerText = '準備中'
      } else if (this.status == 3) {
        loadingElement.classList.add('wait3')
        loadingElement.classList.remove('wait2')
        loadingElement.classList.remove('wait')
        loadingElement.innerText = '餐點完成'
      }
    },
    tidyResponse() {
      this.status = this.getResponse[0].status
      const loadingElement = this.$refs.loading[0]
      if (this.status == 1) {
        loadingElement.classList.add('wait')
        loadingElement.classList.remove('wait2')
        loadingElement.classList.remove('wait3')
        loadingElement.innerText = '待接單'
      } else if (this.status == 2) {
        loadingElement.classList.add('wait2')
        loadingElement.classList.remove('wait')
        loadingElement.classList.remove('wait3')
        loadingElement.innerText = '準備中'
      } else if (this.status == 3) {
        loadingElement.classList.add('wait3')
        loadingElement.classList.remove('wait2')
        loadingElement.classList.remove('wait')
        loadingElement.innerText = '餐點完成'
      }
    }
  },
  mounted() {
    const ws_path = import.meta.env.VITE_WS
    this.socket = new WebSocket(ws_path)
    let ids = []
    this.getResponse.forEach(id => {
      ids.push(id.orderid)
    })
    this.socket.onmessage = event => {
      const receivedData = JSON.parse(event.data)
      if (ids.includes(receivedData.num)) {
        this.status = receivedData.status
      }
    }
    this.status = this.getResponse[0].status
    const loadingElement = this.$refs.loading[0]
    if (this.status == 1) {
      loadingElement.classList.add('wait')
      loadingElement.classList.remove('wait2')
      loadingElement.classList.remove('wait3')
      loadingElement.innerText = '待接單'
    } else if (this.status == 2) {
      loadingElement.classList.add('wait2')
      loadingElement.classList.remove('wait')
      loadingElement.classList.remove('wait3')
      loadingElement.innerText = '準備中'
    } else if (this.status == 3) {
      loadingElement.classList.add('wait3')
      loadingElement.classList.remove('wait2')
      loadingElement.classList.remove('wait')
      loadingElement.innerText = '餐點完成'
    }
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.close()
    }
  }
}
</script>

<style scoped lang="scss">
.dot {
  width: 10px;
  height: 10px;
  background: gray;
  border-radius: 50%;

  &:nth-of-type(1) {
    left: 0px;
  }

  &:nth-of-type(2) {
    left: 25%;
  }

  &:nth-of-type(3) {
    left: 50%;
  }

  &:nth-of-type(4) {
    left: 75%;
  }

  &:nth-of-type(5) {
    left: 100%;
  }
}

.input-set {
  background: transparent;
  border: none;
}

.product-image {
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.textarea {
  background: #fcfcb8;
}

.wait {
  width: 20%;
}

.wait2 {
  width: 50%;
}

.wait3 {
  width: 100%;
}

@media (min-width:576px) {
  .product-size {
    font-size: 16px;
  }
}

@media (min-width:768px) {
  .product-size {
    font-size: 24px;
  }

  .product-image {
    width: 80px;
    height: 80px;
  }
}
</style>
