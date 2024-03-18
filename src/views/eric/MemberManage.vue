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
                <input type="search" placeholder="search" id="search" @input="filteredUser"
                  class="form-control border-0 shadow-none mt-2 fs-4 bg-secondary" v-model="search" />
              </div>
            </div>
            <div class="col-2">
              <select-list :options="options" @updata="get" v-once></select-list>
            </div>
          </div>
        </div>
        <div class="card shadow-sm w-100 bg-light">
          <div class="card-body">
            <div v-if="isLoading">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <table v-if="!isLoading" class="table table-hover align-middle table-sm reduce-spacing">
              <tbody class="fs-4 text-nowrap">
                <tr v-if="this.filteredUsersList.length == 0">
                  <td>查無此人</td>
                </tr>
              </tbody>
              <tbody class="fs-4 text-nowrap" v-for="(user, index) in filteredUsersList" :key="index">
                <tr>
                  <td>{{ user.name }}</td>
                  <td>手機:{{ user.phone }}</td>
                  <td class="text-end">
                    <button class="btn btn-outline-primary me-5" data-bs-toggle="modal"
                      :data-bs-target="'#goBad' + index">
                      黑名單
                    </button>
                  </td>
                </tr>
                <!-- model -->
                <div class="modal fade" :id="'goBad' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  0
                  <div class="modal-dialog">
                    <div class="modal-content border-0">
                      <div class="modal-body fs-3">是否加入黑名單?</div>
                      <div class="modal-footer border-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                          取消
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="goBad(user.id)">
                          確認
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <main v-else-if="select == 2" class="main container">
        <div class="mt-5">
          <div class="row justify-content-between">
            <div class="col-8 mb-0 ms-2">
              <div class="d-flex h-50">
                <label for="search"><i class="bi bi-search fs-4"></i></label>
                <input type="search" placeholder="search" id="search" @input="filteredBadUser"
                  class="form-control border-0 shadow-none mt-2 fs-4 bg-secondary" v-model="search" />
              </div>
            </div>
            <div class="col-2">
              <select-list :options="options2" @updata="get" v-once></select-list>
            </div>
          </div>
        </div>
        <div class="card shadow-sm w-100 bg-light">
          <div class="card-body">
            <div v-if="isLoading">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <table v-if="!isLoading" class="table table-hover align-middle table-sm reduce-spacing">
              <tbody class="fs-4 text-nowrap">
                <tr v-if="this.filteredBadUsersList.length == 0">
                  <td>查無此人</td>
                </tr>
              </tbody>
              <tbody class="fs-4 text-nowrap" v-for="(user, index) in filteredBadUsersList" :key="index">
                <tr>
                  <td>{{ user.name }}</td>
                  <td>手機:{{ user.phone }}</td>
                  <td class="text-end">
                    <button class="btn btn-primary me-5" data-bs-toggle="modal" :data-bs-target="'#goGood' + index">
                      原諒你
                    </button>
                  </td>
                </tr>
                <!-- model -->
                <div class="modal fade" :id="'goGood' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  0
                  <div class="modal-dialog">
                    <div class="modal-content border-0">
                      <div class="modal-body fs-3">是否原諒他?</div>
                      <div class="modal-footer border-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                          取消
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="goGood(user.id)">
                          確認
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
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
      users: [],
      badusers: [],
      search: '',
      filteredUsersList: [],
      filteredBadUsersList: [],
      select: '1',
      isLoading: false,
      options: [
        { value: '1', label: '會員資料' },
        { value: '2', label: '黑名單' }
      ],
      options2: [
        { value: '2', label: '黑名單' },
        { value: '1', label: '會員資料' }
      ]
    }
  },
  methods: {
    filteredUser() {
      if (this.search) {
        this.isLoading = true
        setTimeout(() => {
          this.filteredUsersList = this.users.filter((name) => name.phone.includes(this.search))
          this.isLoading = false
        }, 500)
      } else {
        this.isLoading = true
        setTimeout(() => {
          this.filteredUsersList = this.users
          this.isLoading = false
        }, 500)
      }
    },
    filteredBadUser() {
      if (this.search) {
        this.isLoading = true
        setTimeout(() => {
          this.filteredBadUsersList = this.badusers.filter((name) =>
            name.phone.includes(this.search)
          )
          this.isLoading = false
        }, 500)
      } else {
        this.isLoading = true
        setTimeout(() => {
          this.filteredBadUsersList = this.badusers
          this.isLoading = false
        }, 500)
      }
    },
    goBad(id) {
      const data = { identity: 'baduser' }
      this.$axios.patch(`/users/${id}`, data).then(() => {
        location.reload()
      })
    },
    goGood(id) {
      const data = { identity: 'user' }
      this.$axios.patch(`/users/${id}`, data).then(() => {
        location.reload()
      })
    },
    get(data) {
      this.select = data
    }
  },
  mounted() {
    this.$axios
      .get('/users')
      .then((res) => {
        res.data.forEach((element) => {
          if (element.identity == 'user') {
            this.users.push({ name: element.name, phone: element.phone, id: element.id })
          } else if (element.identity == 'baduser') {
            this.badusers.push({ name: element.name, phone: element.phone, id: element.id })
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })

    this.filteredUsersList = this.users
    this.filteredBadUsersList = this.badusers
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
