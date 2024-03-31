<template>
  <div class="mb-3">
    <label for="mumuyuanMail" class="form-label fw-bolder fs-5">信箱</label>
    <input type="email" class="form-control" id="mumuyuanMail" placeholder="請輸入信箱" v-model="userInput.email" />
  </div>
  <div class="mb-4">
    <label for="mumuyuanPassword" class="form-label fw-bolder fs-5">密碼</label>
    <input type="password" class="form-control" id="mumuyuanPassword" placeholder="請輸入密碼"
      v-model="userInput.password" />
    <div class="text-end pt-1">
      <router-link to="/login/forget" class="fotgetPassword">忘記密碼?</router-link>
    </div>
  </div>
  <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="userlogin" :disabled="loginBtn">
    登入
  </button>
  <div class="text-center">
    <span class="text-center">還沒加入會員嗎?</span>
    <router-link to="/login/signin" class="signin mx-2">註冊</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    loginBtn() {
      return this.userInput.email.trim() === '' || this.userInput.password.trim() === ''
        ? true
        : false
    }
  },
  methods: {
    userlogin() {
      this.$axios
        .post('/signin', {
          ...this.userInput
        })
        .then(response => {
          if (response.status === 200) {
            const { user, accessToken } = response.data
            document.cookie = `token=${accessToken};expires=${new Date().getTime() + 24 * 60 * 60 * 1000};`
            document.cookie = `identity=${user.identity};expires=${new Date().getTime() + 24 * 60 * 60 * 1000};`
            document.cookie = `id=${user.id};expires=${new Date().getTime() + 24 * 60 * 60 * 1000};`
            this.$swal({
              icon: 'success',
              title: '成功登入',
              text: '導覽至首頁',
              timer: 1500
            }).then(() => {
              window.location.href = import.meta.env.VITE_BASE
            });
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '登入失敗',
            text: '請重新輸入',
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.fotgetPassword {
  color: #f00000;
  cursor: pointer;
}

.signin {
  color: #0a0ae4;
  cursor: pointer;
}
</style>
