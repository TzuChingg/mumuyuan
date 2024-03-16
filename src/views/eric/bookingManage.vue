<template>
  <div class="d-flex">
    <aside class="sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column">
      <BackendFunctions v-once></BackendFunctions>
    </aside>
    <transition name="fade" mode="out-in">
      <main v-if="select == 1" class="main container">
        <div class="mt-5">
          <div class="row justify-content-between">
            <div class="col-8 mb-0 ms-2">
              <div class="d-flex h-50">
                <label for="search"><i class="bi bi-search fs-4"></i></label>
                <input type="search" placeholder="search" id="search" @input="currentDate"
                  class="form-control border-0 shadow-none mt-2 fs-4 bg-secondary" v-model="search" />
              </div>
            </div>
            <div class="col-2">
              <select-list :options="options" @updata="get" v-once></select-list>
            </div>
          </div>
        </div>
        <div v-if="isLoading">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-if="!isLoading">
          <div v-if="this.filteredBookingList.length == 0" class="card">
            <h5 class="card-body fs-4">查無此訂位</h5>
          </div>
          <div class="card mb-2 shadow-sm w-100 bg-light" :class="{ out: book.timeout }"
            v-for="(book, index) in filteredBookingList" :key="index">
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <strong>{{ book.name }}</strong>
                  <span class="ms-6">{{ book.people }}位</span>
                  <p class="m-0">日期:{{ book.data }}</p>
                </div>
                <div class="col-4">
                  <strong class="m-0">電話:{{ book.phone }}</strong>
                  <p class="m-0">{{ book.time }}</p>
                </div>
                <div class="col-2">
                  <p class="mt-2 fs-5" :class="{ timeout: !book.timeout }">已過期</p>
                </div>
                <div class="col">
                  <div v-if="book.timeout == false">
                    <i class="fs-3 float-end mt-1 me-3" :class="book.CancelIcon" @mouseover="handleMouseOver(book.id)"
                      @mouseleave="handleMouseLeave(book.id)" data-bs-toggle="modal"
                      :data-bs-target="'#CancelModal' + index"></i>
                    <i class="fs-3 float-end mt-1 me-3" :class="{ timeout: book.timeout, [book.CheckIcon]: true }"
                      @mouseover="handleMouseOver2(book.id)" @mouseleave="handleMouseLeave2(book.id)"
                      data-bs-toggle="modal" :data-bs-target="'#checkModal' + index"></i>
                  </div>
                  <div v-else>
                    <i class="fs-3 float-end mt-1 me-3" :class="{ [book.CancelIcon]: true }"
                      @mouseover="handleMouseOver(book.id)" @mouseleave="handleMouseLeave(book.id)"
                      @click="Cancel(book.id)"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- model -->
            <div class="modal fade" :id="'checkModal' + index" data-bs-backdrop="static" data-bs-keyboard="false"
              tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              0
              <div class="modal-dialog">
                <div class="modal-content border-0">
                  <div class="modal-body fs-3">是否確認接受?</div>
                  <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      取消
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="check(book.id)">
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- model -->
            <div class="modal fade" :id="'CancelModal' + index" data-bs-backdrop="static" data-bs-keyboard="false"
              tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              0
              <div class="modal-dialog">
                <div class="modal-content border-0">
                  <div class="modal-body fs-3">是否確認刪除?</div>
                  <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      取消
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Cancel(book.id)">
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
        <div class="mt-5">
          <div class="row justify-content-between">
            <div class="col-8 mb-0 ms-2">
              <div class="d-flex h-50">
                <label for="search"><i class="bi bi-search fs-4"></i></label>
                <input type="search" placeholder="search" @input="filteredFinishBooking" id="search"
                  class="form-control border-0 shadow-none mt-2 fs-4 bg-secondary" v-model="search" />
              </div>
            </div>
            <div class="col-2">
              <select-list :options="options2" @updata="get" v-once></select-list>
            </div>
          </div>
        </div>
        <div v-if="isLoading">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-if="!isLoading">
          <div v-if="this.filteredFinishBookingList.length == 0" class="card">
            <h5 class="card-body fs-4">查無此訂位</h5>
          </div>
          <div class="card mb-2 shadow-sm w-100 bg-light" v-for="(finish, index) in filteredFinishBookingList"
            :key="index">
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <strong>{{ finish.name }}</strong>
                  <span class="ms-6">{{ finish.people }}位</span>
                  <p class="m-0">日期:{{ finish.data }}</p>
                </div>
                <div class="col-4">
                  <strong class="m-0">電話:{{ finish.phone }}</strong>
                  <p class="m-0">{{ finish.time }}</p>
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
import SelectList from '@/components/eric/SelectList.vue'
import BackendFunctions from '@/components/eric/BackendFunctions.vue'
export default {
  components: {
    BackendFunctions,
    SelectList
  },
  data() {
    return {
      booking: [],
      finishBooking: [],
      filteredBookingList: [],
      filteredFinishBookingList: [],
      search: '',
      select: '1',
      isLoading: false,
      options: [
        { value: '1', label: '待確認訂位' },
        { value: '2', label: '已確認訂位' }
      ],
      options2: [
        { value: '2', label: '已確認訂位' },
        { value: '1', label: '待確認訂位' }
      ]
    }
  },
  methods: {
    filteredFinishBooking() {
      if (this.search) {
        this.isLoading = true
        setTimeout(() => {
          this.filteredFinishBookingList = this.finishBooking.filter((name) =>
            name.phone.includes(this.search)
          )
          this.isLoading = false
        }, 500)
      } else {
        this.isLoading = true
        setTimeout(() => {
          this.filteredFinishBookingList = this.finishBooking
          this.isLoading = false
        }, 500)
      }
    },
    currentDate() {
      if (this.search) {
        this.isLoading = true
        setTimeout(() => {
          this.filteredBookingList = this.booking.filter((name) => name.phone.includes(this.search))
          this.isLoading = false
        }, 500)
      } else {
        this.isLoading = true
        setTimeout(() => {
          this.filteredBookingList = this.booking
          this.isLoading = false
        }, 500)
      }
    },
    handleMouseOver(index) {
      const foundIndex = this.booking.findIndex((element) => element.id === index)
      this.booking[foundIndex].CancelIcon = 'bi bi-x-square-fill'
    },
    handleMouseLeave(index) {
      const foundIndex = this.booking.findIndex((element) => element.id === index)
      this.booking[foundIndex].CancelIcon = 'bi bi-x-square'
    },
    handleMouseOver2(index) {
      const foundIndex = this.booking.findIndex((element) => element.id === index)
      this.booking[foundIndex].CheckIcon = 'bi bi-check-square-fill'
    },
    handleMouseLeave2(index) {
      const foundIndex = this.booking.findIndex((element) => element.id === index)
      this.booking[foundIndex].CheckIcon = 'bi bi-check-square'
    },
    check(id) {
      const data = { isCheck: true }
      this.$axios.patch(`/bookingfrom/${id}`, data).then(() => {
        location.reload()
      })
    },
    Cancel(id) {
      this.$axios.delete(`/bookingfrom/${id}`).then(() => {
        location.reload()
      })
    },
    get(data) {
      this.select = data
    }
  },
  mounted() {
    this.$axios.get('/bookingfrom').then((res) => {
      let timeout = false
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      res.data.forEach((element) => {
        const thisYear = element.day.split('/')[0]
        const thisMonth = element.day.split('/')[1]
        const thisDay = element.day.split('/')[2]
        if (thisYear >= year && thisMonth >= month && thisDay >= day) {
          timeout = false
        } else {
          timeout = true
        }
        if (element.isCheck == false) {
          this.booking.push({
            name: element.name,
            phone: element.phone,
            people: element.personCount,
            data: element.day,
            id: element.id,
            time: element.time,
            timeout: timeout,
            CheckIcon: 'bi bi-check-square',
            CancelIcon: 'bi bi-x-square'
          })
        } else {
          this.finishBooking.push({
            name: element.name,
            phone: element.phone,
            time: element.time,
            people: element.personCount,
            data: element.day,
            id: element.id
          })
        }
      })
    })
    this.filteredBookingList = this.booking
    this.filteredFinishBookingList = this.finishBooking
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

.timeout {
  display: none;
}

.out {
  opacity: 0.4;
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
