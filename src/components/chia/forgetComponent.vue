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

          window.location.href = "/"; 
        })
        .catch(error => {
          alert('查無郵件')
        })
    }
  },
  computed: {
    findBtn() {
      return this.useGetPassword.trim() === '' ? true : false
    }
  },
  mounted() {
    this.socket = new WebSocket('ws://localhost:8080/ws')
    this.socket.onopen = () => {
      console.log('WebSocket connection opened')
    }
  },
  beforeUnmount() {
    // Close the WebSocket connection when the component is destroyed
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
