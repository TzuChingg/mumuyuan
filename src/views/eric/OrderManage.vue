<template>
  <div class="d-flex">
    <aside class="sidebar border-5 border-end d-flex bg-secondary flex-column">
      <BackendFunctions v-once></BackendFunctions>
    </aside>
    <transition name="fade" mode="out-in">
      <main v-if="select == 1" class="main container">
        <div class="w-25 mt-5">
          <select-list :options="options" @updata="get" v-once></select-list>
        </div>
        <div class="card mt-2 shadow-sm w-100 mb-3" v-for="(order, index) in order" :key="index">
          <div class="card-body">
            <div class="accordion accordion-flush" :id="'accordionFlushExample' + index">
              <div class="accordion-item">
                <h2 class="accordion-header" :id="'flush-heading' + index">
                  <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                    :aria-controls="'flush-collapseOne' + index">
                    <strong class="me-5 fs-4">{{ order.name }}</strong>
                    <span class="ms-5 mt-11 fs-4">手機:{{ order.phone }}</span><span class="ms-5 mt-11 fs-4">日期:{{
        order.day }}</span>
                  </button>
                </h2>
                <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse"
                  :aria-labelledby="'flush-heading' + index" :data-bs-parent="'#accordionFlushExample' + index">
                  <div class="accordion-body">
                    <div class="row row-cols-2">
                      <div class="col d-flex flex-wrap h-25">
                        <div class="row text-center h-25 w-100">
                          <div class="col-4 fs-4 text-nowrap" v-for="(food, index) in order.product" :key="index">
                            {{ food }}
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <table class="table table-striped align-middle table-sm h-100">
                          <tbody>
                            <tr>
                              <td class="fs-5"><strong>口味:</strong>{{ order.flavor }}</td>
                            </tr>
                            <tr>
                              <td class="fs-5"><strong>辣度:</strong>{{ order.spicy }}</td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>是否要餐具:</strong>{{ order.tableware ? '要' : '不要' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>是否要加購提袋:</strong>{{ order.bags ? '要' : '不要' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>訂購方式:</strong>{{ order.way ? '自取' : '外送' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>預計取餐時間:</strong><span class="text-danger">{{ order.time }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>付款方式:</strong>{{ order.payment ? '現金' : '線上付款' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5"><strong>總金額:</strong>{{ order.total }}</td>
                            </tr>
                            <tr>
                              <td class="fs-5"><strong>備註:</strong>{{ order.remark }}</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <button type="btn" class="btn btn-primary w-100 mb-1" data-bs-toggle="modal"
                              :data-bs-target="'#ok' + index">
                              接受
                            </button>
                            <button type="btn" class="btn btn-primary w-100 mt-1" data-bs-toggle="modal"
                              :data-bs-target="'#reject' + index">
                              拒絕
                            </button>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- model -->
            <div class="modal fade" :id="'ok' + index" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              0
              <div class="modal-dialog">
                <div class="modal-content border-0">
                  <div class="modal-body fs-3">是否接受訂單?</div>
                  <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      取消
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                      @click="ok(order.id, order.userId, order.orderNum)">
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- model -->
            <div class="modal fade" :id="'reject' + index" data-bs-backdrop="static" data-bs-keyboard="false"
              tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              0
              <div class="modal-dialog">
                <div class="modal-content border-0">
                  <div class="modal-body fs-3">是否拒絕訂單?</div>
                  <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      取消
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="reject(order.id)">
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main v-else-if="select == 2" class="main container">
        <div class="w-25 mt-5">
          <select-list :options="options2" @updata="get" v-once></select-list>
        </div>
        <div class="card mt-2 shadow-sm w-100" v-for="(order, index) in finishorder" :key="index">
          <div class="card-body">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" :id="'flush-heading' + index">
                  <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                    aria-controls="flush-collapseOne">
                    <strong class="me-5 fs-4">{{ order.name }}</strong>
                    <span class="ms-5 mt-11 fs-4">手機:{{ order.phone }}</span>
                  </button>
                </h2>
                <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse"
                  :aria-labelledby="'flush-heading' + index" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div class="row row-cols-2">
                      <div class="col d-flex flex-wrap h-25">
                        <div class="row row-cols-4 text-center h-25 w-100">
                          <div class="col-4 fs-4 text-nowrap" v-for="(food, foodIndex) in order.product"
                            :key="foodIndex">
                            {{ food }}
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <table class="table table-striped align-middle table-sm h-100">
                          <tbody>
                            <tr>
                              <td class="fs-5"><strong>口味:</strong>{{ order.flavor }}</td>
                            </tr>
                            <tr>
                              <td class="fs-5"><strong>辣度:</strong>{{ order.spicy }}</td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>是否要餐具:</strong>{{ order.tableware ? '要' : '不要' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>是否要加購提袋:</strong>{{ order.bags ? '要' : '不要' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>訂購方式:</strong>{{ order.way ? '自取' : '外送' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>預計取餐時間:</strong><span class="text-danger">{{ order.time }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5">
                                <strong>付款方式:</strong>{{ order.payment ? '現金' : '線上付款' }}
                              </td>
                            </tr>
                            <tr>
                              <td class="fs-5"><strong>總金額:</strong>{{ order.total }}</td>
                            </tr>
                            <tr>
                              <td class="fs-5"><strong>備註:</strong>{{ order.remark }}</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <button type="btn" class="btn btn-primary w-100 mt-1" data-bs-toggle="modal"
                              :data-bs-target="'#finish' + index">
                              完成
                            </button>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- model -->
            <div class="modal fade" :id="'finish' + index" data-bs-backdrop="static" data-bs-keyboard="false"
              tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              0
              <div class="modal-dialog">
                <div class="modal-content border-0">
                  <div class="modal-body fs-3">是否完成訂單?</div>
                  <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      取消
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                      @click="pushForCustomer(order.id, order.userId, order.orderNum)">
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </transition>
  </div>
</template>

<script>
import BackendFunctions from '@/components/eric/BackendFunctions.vue'
import SelectList from '@/components/eric/SelectList.vue'
export default {
  components: {
    BackendFunctions,
    SelectList
  },
  data() {
    return {
      order: [],
      finishorder: [],
      select: '1',
      options: [
        { value: '1', label: '待確認訂單' },
        { value: '2', label: '待完成訂單' }
      ],
      options2: [
        { value: '2', label: '待完成訂單' },
        { value: '1', label: '待確認訂單' }
      ],
      socket: null,
      messages: []
    }
  },
  computed: {},
  methods: {
    ok(id, userId, orderid) {
      const data = { status: 2 }
      const data2 = {
        userId: userId,
        orderId: id
      }
      const loadingData = 2
      this.$axios
        .post('notice', data2)
        .then(() => {
          return this.$axios.patch(`/orders/${id}`, data)
        })
        .then(() => {
          location.reload()
        })
        .catch((err) => {
          console.error(err.response)
        })
      this.socket.send(
        JSON.stringify({
          status: loadingData,
          num: orderid,
          userId: userId
        })
      )
    },
    reject(id) {
      this.$axios.delete(`/orders/${id}`).then(() => {
        location.reload()
      })
    },
    get(data) {
      this.select = data
    },
    pushForCustomer(id, userId, orderid) {
      const data = { status: 3 }
      const loadingData = 3
      this.$axios
        .patch(`/orders/${id}`, data)
        .then(() => {
          location.reload()
        })
        .catch(() => { })
      this.socket.send(
        JSON.stringify({
          status: loadingData,
          num: orderid,
          userId: userId
        })
      )
    }
  },
  mounted() {
    this.$axios.get('/orders').then((res) => {
      res.data.forEach((element) => {
        const foods = []
        let taste = ''
        let spicy = ''
        element.product.forEach((item) => {
          foods.push(item.productName + 'X' + item.quantity)
        })

        if (element.flavor == 1) {
          taste = '梅粉'
        } else if (element.flavor == 2) {
          taste = '秘粉'
        } else if (element.flavor == 3) {
          taste = '椒鹽'
        }

        if (element.spicy == 1) {
          spicy = '不辣'
        } else if (element.spicy == 2) {
          spicy = '小辣'
        } else if (element.spicy == 3) {
          spicy = '大辣'
        }

        if (element.status == 1) {
          this.order.push({
            name: element.name,
            phone: element.phone,
            tableware: element.tableware,
            bags: element.bags,
            way: element.type,
            time: element.pickTime,
            payment: element.payment,
            remark: element.comment,
            total: element.price,
            product: foods,
            flavor: taste,
            spicy: spicy,
            day: element.day,
            id: element.id,
            orderNum: element.orderid,
            status: element.status,
            isMember: element.isMember,
            userId: element.userId,
            orderScore: element.orderScore
          })
        } else if (element.status == 2) {
          this.finishorder.push({
            name: element.name,
            phone: element.phone,
            tableware: element.tableware,
            bags: element.bags,
            way: element.type,
            time: element.pickTime,
            payment: element.payment,
            remark: element.comment,
            total: element.price,
            product: foods,
            flavor: taste,
            spicy: spicy,
            day: element.day,
            id: element.id,
            orderNum: element.orderid,
            status: element.status,
            isMember: element.isMember,
            userId: element.userId,
            orderScore: element.orderScore
          })
        }
      })
    })
    const ws_path = import.meta.env.VITE_WS
    this.socket = new WebSocket(ws_path)
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.d-flex {
  background: $secondary;
  height: 100vh;
}

td {
  white-space: pre-line;
}

.sidebar {
  flex: 0 0 auto;
  width: 280px;
  overflow: hidden;
  transition: width 0.5s;
}

.main {
  flex: 1;
  overflow-y: auto;
  width: 100%;
  transition:
    width 0.5s,
    margin-left 0.5s;
}

.sidebar:not(:hover) {
  width: 0;
}

.sidebar:hover {
  width: 280px;

  .main {
    width: calc(100vw - var(--sidebar-width));
  }
}

.reduce-spacing td {
  margin: 0;
  padding: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
