<template>
  <div class="d-flex">
    <aside class="sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column">
      <BackendFunctions v-once></BackendFunctions>
    </aside>
    <transition name="fade" mode="out-in">
      <main v-if="select == 1" class="main">
        <div class="container mt-6">
          <div class="mt-3">
            <div class="row justify-content-between">
              <div class="col-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  新增活動
                </button>
              </div>
              <div class="col-2">
                <select-list :options="options" @updata="get" v-once></select-list>
              </div>
            </div>
          </div>
          <div class="row row-cols-2 mt-2">
            <div class="col" v-for="(journey, index) in thisPage" :key="index">
              <div class="card my-4 bg-light">
                <div class="cardbody px-4">
                  <h5 class="text-center my-4 text-nowrap">{{ journey.title }}</h5>
                  <select class="form-select mx-auto w-50 shadow-none my-2" aria-label="Default select example"
                    v-model="journey.coupon">
                    <option v-for="(coupon, index) in coupons" :key="index" :value="coupon.id">
                      {{ coupon.title }}
                    </option>
                  </select>
                  <textarea id="title" placeholder="內容" class="px-4 form-control border-1 shadow-none w-100"
                    style="height: 150px" v-model="journey.newsContent"></textarea>
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
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="goDown(journey.id)">
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
                    <div class="modal-body fs-3">是否修改 {{ journey.title }} 活動?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="update(journey.id, journey.coupon, journey.newsContent)">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center h-25 mt-4">
            <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
            <strong class="fs-3 text-primary mx-3"> {{ page }} </strong>
            <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">
              下一页
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">活動內容</h5>
                </div>
                <div class="modal-body bg-secondary">
                  <div class="card border-0 bg-secondary">
                    <div class="cardbody mt-4">
                      <div class="d-flex h-25 justify-content-center mt-3">
                        <input class="form-control w-50" type="file" id="formFile" @change="uploadFile" />
                      </div>
                      <div class="d-flex h-25 justify-content-center mt-5 mb-2">
                        <label for="title" class="fs-3 me-2">活動:</label>
                        <input type="text" id="title" placeholder="活動名" class="form-control border-1 shadow-none w-50"
                          v-model="dataForm.newsTitle" />
                      </div>
                      <div class="d-flex h-25 justify-content-center mb-2">
                        <label for="title" class="fs-3 me-2">內容:</label>
                        <textarea id="title" placeholder="內容" class="form-control border-1 shadow-none w-50"
                          v-model="dataForm.newsContent"></textarea>
                      </div>
                      <div class="d-flex h-25 justify-content-center mt-3 mb-2">
                        <select class="form-select w-50 shadow-none" aria-label="Default select example"
                          v-model="dataForm.couponId">
                          <option v-for="(coupon, index) in coupons" :key="index" :value="coupon.id">
                            {{ coupon.title }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="pushData()">
                    新增
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main v-else-if="select == 2" class="main">
        <div class="container mt-6">
          <div class="my-2">
            <div class="row justify-content-end">
              <div class="col-2">
                <select-list :options="options2" @updata="get" v-once></select-list>
              </div>
            </div>
          </div>
          <div class="row row-cols-4">
            <div class="col" v-for="(dj, index) in thisPage2" :key="index">
              <div class="card my-4 bg-light">
                <div class="cardbody">
                  <h5 class="text-center mt-4 text-nowrap">{{ dj.title }}</h5>
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
                    <div class="modal-body fs-3">是否上架活動?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="goon(dj.id)">
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
                    <div class="modal-body fs-3">是否刪除活動?</div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="del(dj.id)">
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
      journey: [],
      downJourney: [],
      thisPage: [],
      thisPage2: [],
      page: 1,
      pg: 12,
      select: '1',
      options: [
        { value: '1', label: '活動管理' },
        { value: '2', label: '下架活動' }
      ],
      options2: [
        { value: '2', label: '下架活動' },
        { value: '1', label: '活動管理' }
      ],
      dataForm: {
        newsImage: '',
        newsTitle: '',
        newsContent: '',
        couponId: '3',
        isLook: false
      },
      coupons: []
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
      this.thisPage = this.journey.slice(this.startIndex, this.endIndex)
    },
    updatePage() {
      this.thisPage2 = this.downJourney.slice(this.startIndex, this.endIndex)
    },
    uploadFile(event) {
      const file = event.target.files[0]
      this.dataForm.image = file
    },
    get(data) {
      this.select = data
    },
    goDown(id) {
      const data = { isLook: true }
      this.$axios.patch(`/news/${id}`, data).then(() => {
        location.reload()
      })
    },
    goon(id) {
      const data = { isLook: false }
      this.$axios.patch(`/news/${id}`, data).then(() => {
        location.reload()
      })
    },
    update(id, coupon, newsContent) {
      const data = { couponId: `${coupon}`, newsContent: `${newsContent}` }
      this.$axios.patch(`/news/${id}`, data).then(() => {
        location.reload()
      })
    },
    pushData() {
      this.$axios.post('/news', this.dataForm).then(() => {
        location.reload()
      })
    },
    del(id) {
      this.$axios.delete(`/news/${id}`).then(() => {
        location.reload()
      })
    }
  },
  mounted() {
    this.$axios.get('/news').then((res) => {
      res.data.forEach((element) => {
        if (element.isLook == false) {
          this.journey.push({
            title: element.newsTitle,
            coupon: element.couponId,
            newsContent: element.newsContent,
            id: element.id
          })
        } else {
          this.downJourney.push({
            title: element.newsTitle,
            id: element.id
          })
        }
      })
      this.updateThisPage()
      this.updatePage()
    })
    this.$axios.get('/coupons').then((res) => {
      res.data.forEach((element) => {
        if (element.isLook == false) {
          this.coupons.push({
            title: element.name,
            id: element.id
          })
        }
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
