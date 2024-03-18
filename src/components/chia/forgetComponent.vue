<script>
export default {
  data() {
    return {
      useGetPassword: ''
    }
  },
  methods: {
    forgetPassword() {
      this.$axios
        .get(`/users/?email=${this.useGetPassword}`)
        .then(res => {
          this.socket.send(
            JSON.stringify({
              email: this.useGetPassword,
              ubPassword: res.data[0].copyPassword
            })
          )
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '查無郵件',
            text: '請重新輸入',
            timer: 3000
          })
        })
    },
    handleMessage(event) {
      const resStr = event.data.includes('OK');
      if (resStr) {
        this.$swal({
          icon: 'success',
          title: '密碼找回信件已寄出',
          text: '請察看信箱',
          timer: 3000
        }).then(() => {
          this.$router.push('/');
        });
      } else {
        this.$swal({
          icon: 'error',
          title: '寄信失敗',
          text: '請稍後再試',
          timer: 3000
        }).then(() => {
          this.$router.push('/');
        });
      }
    }
  },
  computed: {
    findBtn() {
      return this.useGetPassword.trim() === '' ? true : false
    }
  },
  mounted() {
    const ws_path = import.meta.env.VITE_WS
    this.socket = new WebSocket(ws_path)
    this.socket.addEventListener('message', this.handleMessage);

  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.close()
    }
  }
}
</script>
<template>
  <div class="mb-4">
    <label for="mumuyuanPhone" class="form-label fw-bolder fs-5">帳號</label>
    <input type="email" class="form-control" id="mumuyuanPhone" placeholder="請輸入帳號" v-model="useGetPassword" />
  </div>
  <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="forgetPassword" :disabled="findBtn">
    找回
  </button>
  <div class="text-center">
    <span class="text-center fs-6">已經有會員了?</span>
    <router-link to="/login" class="signin mx-2 text-decoration-none">登入</router-link>
  </div>
</template>
<style scoped lang="scss">
.signin {
  color: #0a0ae4;
  cursor: pointer;
}
</style>
