<script>
export default {
  data() {
    return {
      userInfo: {
        email: '',
        password: '',
        copyPassword: '',
        name: '',
        phone: '',
        identity: 'user',
        point: 0,
        coupon: []
      },
      dbCheckPassword: false,
      noUsed: false,
      checkEmail: true
    }
  },
  computed: {
    isSome() {
      return this.userInfo.password === this.userInfo.copyPassword
    },
    signinBtn() {
      return this.userInfo.email.trim() === '' ||
        this.userInfo.password.trim() === '' ||
        this.userInfo.copyPassword.trim() === '' ||
        this.userInfo.name.trim() === '' ||
        this.userInfo.phone.trim() === '' ||
        !this.isSome
        ? true
        : false
    }
  },
  watch: {
    'userInfo.email'(newValue) {
      this.$refs.formmail.validate('信箱', newValue).then((result) => {
        if (result.valid) {
          this.checkEmail = false
        } else {
          this.checkEmail = true
        }
      })
    }
  },
  methods: {
    startSignin() {
      this.$axios.get(`/users?email=${this.userInfo.email}`).then((response) => {
        response.data.length ?
          this.$swal({
            icon: 'warning',
            title: '已被註冊',
            text: '請重新輸入',
            timer: 2000
          }) :
          (this.noUsed = !this.noUsed)
      })
    },
    finishSignin() {
      if (!this.isSome) return
      this.$refs.form.validate().then((isValid) => {
        if (isValid.valid) {
          this.$axios
            .post('/users', {
              ...this.userInfo
            })
            .then(() => {
              this.$swal({
                icon: 'success',
                title: '成功註冊',
                text: '待跳轉至首頁',
                timer: 2000
              }).then(() => {
                window.location.href = import.meta.env.VITE_BASE;
              });
            })
        } else {
          this.$swal({
            icon: 'error',
            title: '註冊失敗',
            text: '請稍後再試',
            timer: 2000
          }).then(() => {
            window.location.href = import.meta.env.VITE_BASE;
          });
        }
      })
    }
  }
}
</script>
<template>
  <div v-if="!noUsed">
    <div class="mb-3" style="min-height: 95px">
      <VForm ref="formmail" v-slot="{ errors }">
        <label for="mumuyuanMail" class="form-label fw-bolder fs-5">信箱</label>
        <VField id="mumuyuanMail" name="信箱" type="email" class="form-control" :class="{ 'is-invalid': errors['信箱'] }"
          v-model="userInfo.email" placeholder="請輸入信箱" rules="email|required">
        </VField>
        <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
      </VForm>
    </div>
    <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="startSignin"
      :disabled="checkEmail">
      註冊
    </button>
    <router-link to="/login" class="btn btn-light d-block mx-auto w-100 pt-2 mb-3">返回</router-link>
  </div>
  <div v-else>
    <VForm ref="form" v-slot="{ errors }">
      <div class="mb-1" style="min-height: 95px">
        <label for="mumuyuanPassword" class="form-label fw-bolder fs-5 mb-0">密碼</label>
        <VField id="mumuyuanPassword" name="密碼" type="password" class="form-control"
          :class="{ 'is-invalid': errors['密碼'] }" v-model="userInfo.password" placeholder="請輸入密碼"
          rules="required|alpha_num" />
        <ErrorMessage name="密碼" class="invalid-feedback" />
      </div>
      <div class="mb-1" style="min-height: 95px">
        <label for="doubleCheck" class="form-label fw-bolder fs-5 mb-0">密碼確認</label>
        <VField id="doubleCheck" name="密碼確認" type="password" class="form-control"
          :class="{ 'is-invalid': errors['密碼確認'] }" v-model="userInfo.copyPassword" placeholder="請再次輸入密碼"
          rules="required|confirmed:@密碼" />
        <ErrorMessage name="密碼確認" class="invalid-feedback" />
      </div>
      <div class="mb-1" style="min-height: 95px">
        <label for="mumuyuanName" class="form-label fw-bolder fs-5 mb-0">姓名</label>
        <VField id="mumuyuanName" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
          v-model="userInfo.name" placeholder="請輸入姓名" rules="required"></VField>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3" style="min-height: 95px">
        <label for="mumuyuanPhone" class="form-label fw-bolder fs-5 mb-0">手機</label>
        <VField id="mumuyuanPhone" name="手機" type="tel" class="form-control" :class="{ 'is-invalid': errors['手機'] }"
          v-model="userInfo.phone" placeholder="請輸入電話" rules="required|min:10|numeric|max:10"></VField>
        <ErrorMessage name="手機" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="d-flex">
        <router-link to="/login" class="btn btn-light d-block me-2 w-50 pt-2 mb-3">取消</router-link>
        <button type="button" class="btn btn-dark d-block w-50 pt-2 mb-3" @click="finishSignin" :disabled="signinBtn">
          完成註冊
        </button>
      </div>
    </VForm>
  </div>
</template>
