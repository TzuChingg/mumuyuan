<template>
  <div class="d-flex">
    <aside class="sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column">
      <BackendFunctions v-once></BackendFunctions>
    </aside>
    <transition name="fade" mode="out-in">
      <main v-if="select == 1" class="main">
        <div class="container mt-5">
          <div class="mt-2">
            <div class="row justify-content-between">
              <div class="col-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  新增商品
                </button>
              </div>
              <div class="col-6">
                <ul class="nav nav-pills">
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option1" :value="1" v-model="category" />
                    <label class="btn btn-outline-primary" for="option1">固定套餐</label>
                  </li>
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option2" :value="2" v-model="category" />
                    <label class="btn btn-outline-primary" for="option2">秘捲</label>
                  </li>
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option3" :value="3" v-model="category" />
                    <label class="btn btn-outline-primary" for="option3">肉品</label>
                  </li>
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option4" :value="4" v-model="category" />
                    <label class="btn btn-outline-primary" for="option4">海鮮</label>
                  </li>
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option5" :value="5" v-model="category" />
                    <label class="btn btn-outline-primary" for="option5">酒食</label>
                  </li>
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option6" :value="6" v-model="category" />
                    <label class="btn btn-outline-primary" for="option6">蔬菜</label>
                  </li>
                  <li class="nav-item mx-2">
                    <input type="radio" class="btn-check" name="options" id="option7" :value="7" v-model="category" />
                    <label class="btn btn-outline-primary" for="option7">經典</label>
                  </li>
                </ul>
              </div>
              <div class="col-2">
                <select-list :options="options" @updata="get" v-once></select-list>
              </div>
            </div>
          </div>
          <div class="row row-cols-4 mb-4">
            <div class="col" v-for="(product, index) in categoryProduct" :key="index">
              <div class="card mt-3 bg-light">
                <div class="cardbody">
                  <h4 class="text-center mt-4">{{ product.title }}</h4>
                  <div class="row px-3 justify-content-center align-items-center py-3">
                    <div class="col-2 fs-6">
                      <label for="money" class="ms-1 text-nowrap">價錢:</label>
                    </div>
                    <div class="col-4">
                      <input v-model="product.money" type="number" id="money" class="form-control shadow-none"
                        :placeholder="product.money" />
                    </div>
                    <div class="col-2 fs-6">
                      <label for="count" class="ms-1 text-nowrap">庫存:</label>
                    </div>
                    <div class="col-4">
                      <input v-model="product.count" type="number" id="count" class="form-control shadow-none"
                        :placeholder="product.count" />
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
                        :data-bs-target="'#updatePrice' + index">
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
                    <div class="modal-body fs-3">是否下架產品?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="goDown(product.id)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- model -->
              <div class="modal fade" :id="'updatePrice' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                0
                <div class="modal-dialog">
                  <div class="modal-content border-0">
                    <div class="modal-body fs-3">是否修改 {{ product.title }} 產品價錢?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="update(product.id, product.money, product.count, product.title)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center h-25">
            <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
            <strong class="fs-3 text-primary mx-3"> {{ page }} </strong>
            <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">
              下一页
            </button>
          </div>
        </div>
        <!-- Button trigger modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content border-0">
              <VForm ref="addForm" @submit="pushData()">
                <div class="modal-header border-0">
                  <h5 class="modal-title" id="exampleModalLabel">商品內容</h5>
                </div>
                <div class="modal-body bg-secondary">
                  <div class="card border-0">
                    <div class="cardbody bg-secondary">
                      <div class="d-flex h-25 justify-content-center mt-3">
                        <VField class="form-control w-50" type="file" id="formFile" name="圖片" @change="uploadFile"
                          rules="required"></VField>
                        <ErrorMessage name="圖片" class="text-danger"></ErrorMessage>
                      </div>
                      <div class="d-flex h-25 justify-content-center mt-3 mb-2">
                        <label for="title" class="fs-3 me-2 form-label">品名:</label>
                        <VField type="text" id="title" name="品名" placeholder="商品名稱"
                          class="form-control border-1 shadow-none w-50" rules="required"
                          v-model="dataForm.productName"></VField>
                        <ErrorMessage name="品名" class="text-danger"></ErrorMessage>
                      </div>
                      <div class="d-flex h-25 justify-content-center mb-2">
                        <label for="price" class="fs-3 me-2 form-label">價格:</label>
                        <VField type="text" id="price" name="價格" class="form-control border-1 shadow-none w-50"
                          rules="required|numeric" v-model="dataForm.price"></VField>
                        <ErrorMessage name="價格" class="text-danger"></ErrorMessage>
                      </div>
                      <div class="d-flex h-25 justify-content-center mb-2">
                        <label for="count" class="fs-3 me-2 form-label">庫存:</label>
                        <VField type="text" id="count" name="庫存" class="form-control border-1 shadow-none w-50"
                          rules="required|numeric" v-model="dataForm.count"></VField>
                        <ErrorMessage name="庫存" class="text-danger"></ErrorMessage>
                      </div>
                      <div class="d-flex h-25 justify-content-center mb-2">
                        <label for="description" class="fs-3 me-2 form-label">介紹:</label>
                        <VField as="textarea" id="description" name="介紹" class="form-control border-1 shadow-none w-50"
                          v-model="dataForm.description"></VField>
                      </div>
                      <div class="d-flex h-25 justify-content-center mt-3 mb-2">
                        <select class="form-select w-50 shadow-none" aria-label="Default select example"
                          v-model="dataForm.category">
                          <option :value="1">固定套餐</option>
                          <option :value="2">秘捲</option>
                          <option :value="3">肉品</option>
                          <option :value="4">海鮮</option>
                          <option :value="5">酒食</option>
                          <option :value="6">蔬菜</option>
                          <option :value="7">經典</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    關閉
                  </button>
                  <button type="submit" class="btn btn-primary">
                    新增
                  </button>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </main>
      <main v-else-if="select == 2" class="main">
        <div class="container mt-5">
          <div class="mt-2">
            <div class="row justify-content-end">
              <div class="col-2">
                <select-list :options="options2" @updata="get" v-once></select-list>
              </div>
            </div>
          </div>
          <div class="row row-cols-4 mb-4">
            <div class="col px-2" v-for="(down, index) in thisPage2" :key="index">
              <div class="card my-3 bg-light">
                <div class="cardbody">
                  <h4 class="text-center mt-3">{{ down.title }}</h4>
                  <div class="row text-center align-items-center py-3">
                    <div class="col-6">
                      <button type="button" class="btn btn-primary ms-6" data-bs-toggle="modal"
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
                    <div class="modal-body fs-3">是否上架產品?</div>
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
                    <div class="modal-body fs-3">是否刪除產品?</div>
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
          <div class="d-flex justify-content-center h-25">
            <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
            <strong class="fs-3 text-primary mx-3" v-for="(item, index) in page" :key="index">{{
        item
      }}</strong>
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
import { Modal } from 'bootstrap';
let addModal = '';
export default {
  components: {
    BackendFunctions,
    SelectList
  },
  data() {
    return {
      product: [],
      downProduct: [],
      thisPage: [],
      categoryPage: [],
      thisPage2: [],
      category: 1,
      page: 1,
      pg: 12,
      select: '1',
      options: [
        { value: '1', label: '商品管理' },
        { value: '2', label: '下架商品' }
      ],
      options2: [
        { value: '2', label: '下架商品' },
        { value: '1', label: '商品管理' }
      ],
      dataForm: {
        productName: '',
        category: 1,
        image: '',
        count: '',
        price: '',
        description: '',
        isLook: false
      }
    }
  },
  watch: {
    category() {
      this.updateThisPage()
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.pg
    },
    endIndex() {
      return this.startIndex + this.pg
    },
    categoryProduct() {
      return this.thisPage.filter((item) => item.category === this.category)
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
      this.thisPage = this.product
        .filter((item) => item.category === this.category)
        .slice(this.startIndex, this.endIndex)
    },
    updatePage() {
      this.thisPage2 = this.downProduct.slice(this.startIndex, this.endIndex)
    },
    uploadFile(event) {
      const file = event.target.files[0]
      this.dataForm.image = `./木木苑食材修圖/${file.name}`
    },
    goDown(id) {
      const data = { isLook: true }
      this.$axios.patch(`/products/${id}`, data).then(() => {
        location.reload()
      })
    },
    goon(id) {
      const data = { isLook: false }
      this.$axios.patch(`/products/${id}`, data).then(() => {
        location.reload()
      })
    },
    del(id) {
      this.$axios.delete(`/products/${id}`).then(() => {
        location.reload()
      })
    },
    update(id, money, count, name) {
      const data = {
        price: parseFloat(money),
        count: parseInt(count)
      }
      const coupon = { calc: parseInt(-money) }
      this.$axios.get(`/coupons?name=${name}`).then((res) => {
        const itemId = res.data[0].id
        this.$axios.patch(`/coupons/${itemId}`, coupon)
      })
      this.$axios.patch(`/products/${id}`, data)
    },
    pushData() {
      this.$axios.post('/products', this.dataForm)
        .then(() => {
          this.$refs.addForm.resetForm()
          addModal.hide()
          location.reload()
        }).catch((err) => {
          console.error(err)
        });
    },
    get(data) {
      this.select = data
    }
  },
  mounted() {
    addModal = new Modal(document.getElementById('exampleModal'))
    this.$axios
      .get('/products')
      .then((res) => {
        res.data.forEach((element) => {
          if (element.isLook == false) {
            this.product.push({
              title: element.productName,
              category: element.category,
              money: element.price,
              count: element.count,
              id: element.id
            })
          } else if (element.isLook == true) {
            this.downProduct.push({
              id: element.id,
              title: element.productName
            })
          }
        })
        this.updateThisPage()
        this.updatePage()
      })
      .catch((error) => {
        console.error(error)
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

.fades-enter-active,
.fades-leave-active {
  transition: opacity 0.4s;
}

.fades-enter-from,
.fades-leave-to {
  opacity: 0;
}
</style>
