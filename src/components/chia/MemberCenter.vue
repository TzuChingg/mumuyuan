<template>
  <h3 class="text-center text-dark" style="font-weight: 600;letter-spacing: 2px;">會員中心</h3>
  <hr />
  <div class="row justify-content-center membercenter">
    <div class="col-10 col-md-8 mb-4">
      <h5 class="text-primary fw-bolder" style="letter-spacing: 1px;">基本資料</h5>
      <hr />
      <div class="mb-3 row">
        <label for="name" class="col-md-4 col-form-label">姓名：</label>
        <div class="col-md-8">
          <input type="text" class="form-control" id="name" v-model="userInfo.name" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="phone" class="col-md-4 col-form-label">手機：</label>
        <div class="col-md-8">
          <input type="tel" class="form-control" id="phone" v-model="userInfo.phone" readonly />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="email" class="col-md-4 col-form-label">信箱：</label>
        <div class="col-md-8">
          <input type="email" class="form-control" id="email" v-model="userInfo.email" readonly />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-4 col-sm-3 col-4 col-form-label">會員點數：</label>
        <div class="col-md-8 col-sm-9 col-8">
          <p class="mt-2">
            <span>{{ userInfo.point }}</span>
            <span class="questionIcon ms-3 bi-question-circle-fill" data-bs-toggle="tooltip" data-bs-placement="right"
              title="每消費100元集一點，用於優惠券兌換。"></span>
          </p>
        </div>
      </div>
      <div class="buttonSave d-flex justify-content-center">
        <button class="btn btn-primary" type="button" @click="setUserInfo" :disabled="checkEmpty">儲存</button>
      </div>
    </div>
    <div class="col-10 col-md-8 mb-4">
      <h5 class="text-primary fw-bolder" style="letter-spacing: 1px;">修改密碼</h5>
      <hr />
      <div class="mb-3 row">
        <label for="name" class="col-md-4 col-form-label">目前密碼：</label>
        <div class="col-md-8">
          <input type="text" class="m-0 form-control" v-model="currentPassword" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="phone" class="col-md-4 col-form-label">新密碼：</label>
        <div class="col-md-8">
          <input type="password" class="form-control" id="newPassword" v-model="userInfo.newPassword" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="name" class="col-md-4 col-form-label">重新輸入新密碼：</label>
        <div class="col-md-8">
          <input type="password" class="form-control" id="rePassword" v-model="userInfo.dbCheckPassword" />
        </div>
      </div>
      <div class="buttonSave d-flex justify-content-center">
        <button class="btn btn-primary" type="button" @click="setNewPassword"
          :disabled="checkPasswordEmpty">更改密碼</button>
      </div>
    </div>
  </div>
</template>

<script>
import { docCookies } from '@/assets/cookie';

export default {
  data() {
    return {
      currentPassword: "",
      userInfo: {
        "email": "",
        "password": "",
        "copyPassword": "",
        "newPassword": "",
        "dbCheckPassword": "",
        "name": "",
        "phone": "",
        "coupon": "",
        "identity": "",
        "point": 0,
        "id": 0
      }
    }
  },
  created() {
    const cookieId = docCookies.getItem('id');
    this.$axios.get(`/users?id=${cookieId}`)
      .then((response) => {
        if (response.status === 200) {
          this.userInfo = {
            ...response.data[0],
            "newPassword": "",
            "dbCheckPassword": ""
          };
        }
      })
      .catch((err) => {
        console.error(err);
      })
  },
  computed: {
    checkEmpty() {
      return (this.userInfo.name.trim() === '' ||
        this.userInfo.phone.trim() === '' ||
        this.userInfo.email.trim() === '') ? true : false;
    },
    checkPasswordEmpty() {
      const samePassword = (this.userInfo.newPassword.trim() !== this.userInfo.dbCheckPassword.trim()) ? true : false;
      return (samePassword || this.userInfo.newPassword.trim() === '' || this.userInfo.dbCheckPassword.trim() === '') ? true : false;
    },
    checkCurrentPassword() {
      return this.currentPassword.trim('') === this.userInfo.copyPassword ? false : true;
    }
  },
  methods: {
    setUserInfo() {
      const { name, phone, email } = this.userInfo;
      this.$axios.patch(`/users/${this.userInfo.id}`, {
        name, phone, email
      })
        .then((response) => {
          if (response.status === 200) {
            this.$swal({
              icon: 'success',
              title: '更新成功',
              text: '請確認更新資訊',
              timer: 2000
            })
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '更新失敗',
            text: '請稍後再試',
            timer: 2000
          })
        })
    },
    setNewPassword() {
      if (this.checkCurrentPassword) {
        this.$swal({
          icon: 'error',
          title: '當前密碼錯誤',
          text: '請重新輸入',
        })
        return;
      }
      this.$axios.patch(`/users/${this.userInfo.id}`, {
        "password": this.userInfo.newPassword,
        "copyPassword": this.userInfo.newPassword
      })
        .then((response) => {
          if (response.status === 200) {
            this.$swal({
              icon: 'success',
              title: '更新成功',
              text: '請確認更新資訊',
              timer: 2000
            }).then(() => {
              this.userInfo.copyPassword = this.userInfo.newPassword
              this.userInfo.newPassword = ''
              this.userInfo.dbCheckPassword = ''
            })
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '更新失敗',
            text: '請稍後再試',
            timer: 2000
          })
        })
    },
  }
}
</script>

<style lang="scss" scoped>
.membercenter {

  button:hover {
    a {
      color: white;
    }
  }

  .questionIcon:hover {
    cursor: pointer;
  }
}
</style>
