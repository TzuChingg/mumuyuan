<template>
  <div class="sticky-top" style="z-index: 1000;" v-if="showNav">
    <div class="bg-image bg-primary">
      <div class="container">
        <h1 class="position-absolute" style="z-index:-1;">木木苑串燒專門店mumuyuan</h1>
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-light my-4 w-100">
            <div class="col-lg-4 col-6">
              <router-link to="/">
                <img class="w-100" src="/首頁圖片/logo.png" alt="返回首頁" />
              </router-link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="col-lg-8 col-12">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto align-items-center">
                  <li class="nav-item">
                    <router-link to="/onlineOrder"
                      class="nav-link fs-5 text-light text-decoration-none">線上點餐</router-link>
                    <div :class="{ 'breath': this.$route.path == '/onlineOrder' }"></div>
                  </li>
                  <li class="nav-item">
                    <router-link to="/reserve" class="nav-link fs-5 text-light text-decoration-none">立即訂位</router-link>
                    <div :class="{ 'breath': this.$route.path == '/reserve' }"></div>
                  </li>
                  <li class="nav-item">
                    <router-link to="/search"
                      class="nav-link fs-5 text-light text-decoration-none">訂位/訂單查詢</router-link>
                    <div :class="{ 'breath': this.$route.path == '/search' }"></div>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'FAQ', hash: '#FAQ' }"
                      class="nav-link fs-5 text-light text-decoration-none">常見問題</router-link>
                    <div :class="{ 'breath': this.$route.hash === '#FAQ' }"></div>
                  </li>
                  <li class="nav-item" v-if="hasToken">
                    <router-link :to="identityHref" class="nav-link fs-5 text-light text-decoration-none"><img
                        src="/首頁圖片/user.png" alt="會員中心"></router-link>
                    <div :class="{ 'breath': this.$route.path == '/memberCenter' }"></div>
                    <div :class="{ 'breath': this.$route.path == '/member/orderLog' }"></div>
                    <div :class="{ 'breath': this.$route.path == '/member/discount' }"></div>
                    <div :class="{ 'breath': this.$route.path == '/member/exchange' }"></div>
                  </li>
                  <li class="nav-item" v-if="hasToken">
                    <button type="button" class="btn position-relative bg-transparent" ref="liveToastBtn" @click="show">
                      <i class="bi bi-bell fs-2 text-white"></i>
                      <span
                        class="position-absolute top-25 start-75 translate-middle p-2 bg-danger border border-light rounded-circle"
                        :class="{ 'd-none': notice }"></span>
                    </button>
                    <div class="position-absolute top-60 end-30 p-3" style="z-index: 9999">
                      <div ref="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                          <strong class="me-auto">通知紀錄</strong>
                          <button type="button" class="btn-close shadow-sm" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                        </div>
                        <div v-if="news.length > 0" class="toast-body">
                          <div v-for="(no, index) in news" :key="index">
                            你的訂單{{ no.num }}正在 [{{ no.status }}]狀態
                          </div>
                        </div>
                        <div v-else-if="news.length == 0" class="toast-body">
                          目前沒有通知
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item" v-else>
                    <router-link to="/login" class="nav-link fs-5 text-light text-decoration-none">登入/註冊</router-link>
                    <div :class="{ 'breath': this.$route.path == '/login' }"></div>
                    <div :class="{ 'breath': this.$route.path == '/login/forget' }"></div>
                    <div :class="{ 'breath': this.$route.path == '/login/signin' }"></div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { docCookies } from '@/assets/cookie';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  data() {
    return {
      hasToken: false,
      identityHref: "#/member",
      identity: 'user',
      showNav: true,
      notice: true,
      newStatus: 0,
      orderId: 0,
      news: [],
      showToast: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route;
    }
  },
  watch: {
    currentRoute(newRoute) {
      this.identityHref = (docCookies.getItem("identity") === "admin") ? "/order" : "/member";
      if (newRoute.fullPath === '/') {
        this.hasToken = docCookies.hasItem("token");
      }
      this.showNav = ((docCookies.getItem("identity") === "admin") &&
        (newRoute.fullPath === '/order' ||
          newRoute.fullPath === '/memberMange' ||
          newRoute.fullPath === '/sales' ||
          newRoute.fullPath === '/product' ||
          newRoute.fullPath === '/booking' ||
          newRoute.fullPath === '/discount' ||
          newRoute.fullPath === '/journey')) ? false : true;
    },
    newStatus() {
      this.news.forEach(item => {
        if (item.num.includes(this.orderId)) {
          item.status = this.newStatus
          if (item.status == 1) {
            item.status = "待接受"
          } else if (item.status == 2) {
            item.status = "準備中"
          } else if (item.status == 3) {
            item.status = "已完成"
          }
        }
      })
    }
  },
  methods: {
    show() {
      var toast = new Toast(this.$refs.liveToast)
      if (this.showToast) {
        toast.hide()
        this.showToast = !this.showToast
        return
      }
      toast.show()
      this.notice = true
      this.showToast = !this.showToast
    }
  },
  mounted() {
    this.hasToken = docCookies.hasItem("token");
    const ws_path = import.meta.env.VITE_WS
    this.socket = new WebSocket(ws_path);
    let myId = docCookies.getItem("id")
    this.socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      if (receivedData.userId == myId) {
        this.notice = false
        if (receivedData.status == 2) {
          receivedData.status = "準備中"
          this.news.push(receivedData)
        } else if (receivedData.status == 3) {
          this.news.map(item => {
            if (item.num.includes(receivedData.num)) {
              this.orderId = receivedData.num
              this.newStatus = receivedData.status
            }
          })
        }
      }
    };

    this.$axios.get(`/notice/?userId=${myId}&_expand=order`)
      .then(res => {
        let text = ""
        res.data.forEach(element => {
          if (element.order.status == 1) {
            text = "待接受"
          } else if (element.order.status == 2) {
            text = "準備中"
          } else if (element.order.status == 3) {
            text = "已完成"
          }
          this.news.push({
            num: element.order.orderid,
            status: text
          })
        })
      })
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.close();
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.bg-image {
  background-image: url('./首頁圖片/bg-shape.png');
  background-size: cover;
}

.nav-item {
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
}

.nav-item * {
  box-sizing: border-box;
  transition: all 0.35s ease;
}

.nav-item li {
  display: inline-block;
  list-style: outside none none;
  margin: 0.5em 1em;
  padding: 0;
}

.nav-item a,
.nav-item button {
  padding: 0.5em 0.8em;
  position: relative;
  text-decoration: none;
  font-size: 20px;
}

.nav-item a::before,
.nav-item a::after,
.nav-item button::before,
.nav-item button::after {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}

.nav-item a::before,
.nav-item button::before {
  content: "";
  right: 0;
  top: 0;
  border-top: 3px solid rgb(241, 238, 233);
  border-right: 3px solid rgb(241, 238, 233);
  transform: translate(-100%, 50%);
}

.nav-item a:after,
.nav-item button:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid rgb(241, 238, 233);
  border-left: 3px solid rgb(241, 238, 233);
  transform: translate(100%, -50%);
}

.nav-item a:hover:before,
.nav-item a:hover:after,
.nav-item button:hover:before,
.nav-item button:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}

.nav-item a:hover,
.nav-item button:hover {
  color: black;
}

.breath {
  border-top: 2px solid $secondary;
  opacity: 0.8;
  margin: 0px;
  overflow: hidden;

  animation-name: breath;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.categoryNav {
  background: #d8d0ae;
}

@keyframes breath {
  from {
    opacity: 0.4;
  }

  50% {
    opacity: 0.8;

  }

  to {
    opacity: 0.4;
  }
}
</style>
