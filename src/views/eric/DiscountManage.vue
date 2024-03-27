<template>
  <div class="d-flex">
    <aside class="sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column">
      <BackendFunctions v-once></BackendFunctions>
    </aside>
    <transition name="fade" mode="out-in">
      <main v-if="select == 1" class="main">
        <div class="container mt-5">
          <div class="mt-3">
            <div class="row justify-content-between">
              <div class="col-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  新增優惠券
                </button>
              </div>
              <div class="col-2">
                <select-list :options="options" @updata="get" v-once></select-list>
              </div>
            </div>
          </div>
          <div class="row row-cols-4 mt-2">
            <div class="col" v-for="(discount, index) in thisPage" :key="index">
              <div class="card my-2 bg-light">
                <div class="cardbody">
                  <h4 class="text-center mt-4">{{ discount.title }}</h4>
                  <div class="row px-3 justify-content-center align-items-center py-3">
                    <div class="col-4 fs-4">
                      <label for="money" class="ms-3">點數:</label>
                    </div>
                    <div class="col-6">
                      <input v-model="discount.point" type="number" id="money" class="form-control shadow-none"
                        :placeholder="discount.point" />
                    </div>
                  </div>
                  <div class="row text-center align-items-center py-3">
                    <div class="col-6">
                      <button type="button" class="btn btn-danger ms-6" data-bs-toggle="modal"
                        :data-bs-target="'#goDown' + index">
                        下架
                      </button>
                    </div>
                    <div class="col-6">
                      <button type="button" class="btn btn-primary me-6" data-bs-toggle="modal"
                        :data-bs-target="'#update' + index">
                        修改
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- model -->
              <div class="modal fade" :id="'goDown' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                0
                <div class="modal-dialog">
                  <div class="modal-content border-0">
                    <div class="modal-body fs-3">是否下架折價券?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="goDown(discount.id)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- model -->
              <div class="modal fade" :id="'update' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                0
                <div class="modal-dialog">
                  <div class="modal-content border-0">
                    <div class="modal-body fs-3">是否修改 {{ discount.title }} 產品價錢?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="update(discount.id, discount.point)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center h-25 mt-3">
            <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
            <strong class="fs-3 text-primary mx-3"> {{ page }} </strong>
            <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">
              下一页
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <VForm @submit="pushData">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">折價券內容</h5>
                  </div>
                  <div class="modal-body bg-secondary">
                    <div class="card border-0 bg-secondary">
                      <div class="cardbody mt-4">
                        <div class="d-flex h-25 justify-content-center mt-3">
                          <VField class="form-control w-50" type="file" id="formFile" name="圖片" @change="uploadFile"
                            rules="required"></VField>
                          <ErrorMessage name="圖片" class="text-danger"></ErrorMessage>
                        </div>
                        <div class="d-flex h-25 justify-content-center mt-5 mb-2">
                          <label for="title" class="fs-3 me-2">券名:</label>
                          <VField type="text" id="title" name="券名" placeholder="優惠券名稱"
                            class="form-control border-1 shadow-none w-50" rules="required" v-model="dataForm.name">
                          </VField>
                          <ErrorMessage name="券名" class="text-danger"></ErrorMessage>
                        </div>
                        <div class="d-flex h-25 justify-content-center mb-2">
                          <label for="point" class="fs-3 me-2">點數:</label>
                          <VField type="text" id="point" name="點數" placeholder="點數"
                            class="form-control border-1 shadow-none w-50" rules="required|numeric"
                            v-model="dataForm.calc"></VField>
                          <ErrorMessage name="點數" class="text-danger"></ErrorMessage>
                        </div>
                        <div class="d-flex h-25 justify-content-center mb-2">
                          <label for="money" class="fs-3 me-2">折扣:</label>
                          <VField type="text" id="money" name="折扣" placeholder="折抵金額"
                            class="form-control border-1 shadow-none w-50" rules="required|numeric"
                            v-model="dataForm.point"></VField>
                          <ErrorMessage name="折扣" class="text-danger"></ErrorMessage>
                        </div>
                        <div class="d-flex h-25 justify-content-center mb-2">
                          <label for="de" class="fs-3 me-2">介紹:</label>
                          <VField as="textarea" id="description" name="介紹" placeholder="內容"
                            class="form-control border-1 shadow-none w-50" rules="required"
                            v-model="dataForm.description"></VField>
                          <ErrorMessage name="介紹" class="text-danger"></ErrorMessage>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      關閉
                    </button>
                    <button type="submit" class="btn btn-primary">
                      新增
                    </button>
                  </div>
                </div>
              </div>
            </VForm>
          </div>
        </div>
      </main>
      <main v-else-if="select == 2" class="main">
        <div class="container mt-5">
          <div class="my-3">
            <div class="row justify-content-end">
              <div class="col-2">
                <select-list :options="options2" @updata="get" v-once></select-list>
              </div>
            </div>
          </div>
          <div class="row row-cols-4">
            <div class="col" v-for="(down, index) in thisPage2" :key="index">
              <div class="card my-2 bg-light">
                <div class="cardbody">
                  <h4 class="text-center mt-4">{{ down.title }}</h4>
                  <div class="row px-3 text-center align-items-center py-1">
                    <div class="col-6 fs-4">
                      <label for="money" class="ms-5">點數:</label>
                    </div>
                    <div class="col-6 mt-2">
                      <h4 class="me-6">{{ down.point }}</h4>
                    </div>
                  </div>
                  <div class="row text-center align-items-center py-3">
                    <div class="col-6">
                      <button type="button" class="btn btn-danger ms-6" data-bs-toggle="modal"
                        :data-bs-target="'#goon' + index">
                        上架
                      </button>
                    </div>
                    <div class="col-6">
                      <button type="button" class="btn btn-danger me-6" data-bs-toggle="modal"
                        :data-bs-target="'#del' + index">
                        刪除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- model -->
              <div class="modal fade" :id="'goon' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                0
                <div class="modal-dialog">
                  <div class="modal-content border-0">
                    <div class="modal-body fs-3">是否上架折價券?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="goon(down.id)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- model -->
              <div class="modal fade" :id="'del' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                0
                <div class="modal-dialog">
                  <div class="modal-content border-0">
                    <div class="modal-body fs-3">是否刪除折價券?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="del(down.id)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center h-25 mt-3">
            <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
            <strong class="fs-3 text-primary mx-3"> {{ page }} </strong>
            <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">
              下一页
            </button>
          </div>
        </div>
      </main>
    </transition>
  </div>
</template>

<script>
import SelectList from '@/components/eric/SelectList.vue'
import BackendFunctions from '@/components/eric/BackendFunctions.vue'
export default {
  components: {
    BackendFunctions,
    SelectList
  },
  data() {
    return {
      discount: [],
      downDiscount: [],
      thisPage: [],
      thisPage2: [],
      page: 1,
      pg: 12,
      select: '1',
      options: [
        { value: '1', label: '優惠券管理' },
        { value: '2', label: '下架優惠券' }
      ],
      options2: [
        { value: '2', label: '下架優惠券' },
        { value: '1', label: '優惠券管理' }
      ],
      dataForm: {
        name: '',
        image: '',
        point: '',
        calc: '',
        isLook: false,
        description: ''
      }
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.pg
    },
    endIndex() {
      return this.startIndex + this.pg
    }
  },
  methods: {
    prevPage() {
      if (this.page > 1) {
        this.page--
        if (this.select == 1) {
          this.updateThisPage()
        } else if (this.select == 2) {
          this.updatePage()
        }
      }
    },
    nextPage() {
      if (this.thisPage.length >= this.pg) {
        this.page++
        if (this.select == 1) {
          this.updateThisPage()
        } else if (this.select == 2) {
          this.updatePage()
        }
      }
    },
    updateThisPage() {
      this.thisPage = this.discount.slice(this.startIndex, this.endIndex)
    },
    updatePage() {
      this.thisPage2 = this.downDiscount.slice(this.startIndex, this.endIndex)
    },
    uploadFile(event) {
      const file = event.target.files[0]
      this.dataForm.image = file
    },
    get(data) {
      this.select = data
    },
    pushData() {
      this.$axios.post('/coupons', this.dataForm).then(() => {
        location.reload()
      })
    },
    goDown(id) {
      const data = { isLook: true }
      this.$axios.patch(`/coupons/${id}`, data).then(() => {
        location.reload()
      })
    },
    goon(id) {
      const data = { isLook: false }
      this.$axios.patch(`/coupons/${id}`, data).then(() => {
        location.reload()
      })
    },
    update(id, point) {
      const data = { point: `${point}` }
      this.$axios.patch(`/coupons/${id}`, data)
    },
    del(id) {
      this.$axios.delete(`/coupons/${id}`).then(() => {
        location.reload()
      })
    }
  },
  mounted() {
    this.$axios.get('/coupons').then((res) => {
      res.data.forEach((element) => {
        if (element.isLook == false) {
          this.discount.push({
            title: element.name,
            point: element.point,
            id: element.id
          })
        } else {
          this.downDiscount.push({
            title: element.name,
            point: element.point,
            id: element.id
          })
        }
        this.updateThisPage()
        this.updatePage()
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.d-flex {
  background: $secondary;
  height: 100vh;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
