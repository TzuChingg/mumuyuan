<template>
  <div>
    <div class="membercenter container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="logoCard d-flex justify-content-center mb-2">
                <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
              </div>
              <div class="btn-group-vertical d-flex justify-content-center">
                <button class="btn btn-outline-primary active" type="button">
                  <router-link to="/memberCenter"
                    class="d-block text-light link-underline link-underline-opacity-0 ">會員中心</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/orderLog"
                    class="d-block link-underline link-underline-opacity-0">歷史訂單</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/discount"
                    class="d-block link-underline link-underline-opacity-0">我的優惠券</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/exchange"
                    class="d-block link-underline link-underline-opacity-0">點數兌換</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/" class="d-block link-underline link-underline-opacity-0"
                    @click="signOut">登出</router-link>
                </button>
              </div>
            </div>
            <div class="col-9">
              <h3 class="text-center">會員中心</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="col-8 mb-4">
                  <h5>基本資料</h5>
                  <hr />
                  <div class="mb-3 row">
                    <label for="name" class="col-xxl-3 col-form-label">姓名：</label>
                    <div class="col-xxl-9">
                      <input type="text" class="form-control" id="name" v-model="userInfo.name" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="phone" class="col-xxl-3 col-form-label">手機：</label>
                    <div class="col-xxl-9">
                      <input type="text" class="form-control" id="phone" v-model="userInfo.phone" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="email" class="col-xxl-3 col-form-label">信箱：</label>
                    <div class="col-xxl-9">
                      <input type="text" class="form-control" id="email" v-model="userInfo.email" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="email" class="col-xxl-3 col-sm-3 col-form-label">會員點數：</label>
                    <div class="col-xxl-9 col-sm-9">
                      <p class="mt-2">
                        <span>{{ userInfo.point }}</span>
                        <span class="questionIcon ms-3 bi-question-circle-fill" data-bs-toggle="tooltip"
                          data-bs-placement="right" title="每消費100元集一點，用於優惠券兌換。"></span>
                      </p>
                    </div>
                  </div>
                  <div class="buttonSave d-flex justify-content-center">
                    <button class="btn btn-primary" type="button" @click="setUserInfo" :disabled="checkEmpty">儲存</button>
                  </div>
                </div>
                <div class="col-8 mb-4">
                  <h5>修改密碼</h5>
                  <hr />
                  <div class="mb-3 row">
                    <label for="name" class="col-xxl-4 col-form-label">目前密碼：</label>
                    <div class="col-xxl-8">
                      <p class="m-0 form-control">{{ userInfo.copyPassword }}</p>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="phone" class="col-xxl-4 col-form-label">新密碼：</label>
                    <div class="col-xxl-8">
                      <input type="password" class="form-control" id="newPassword" v-model="userInfo.newPassword" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="name" class="col-xxl-4 col-form-label">重新輸入新密碼：</label>
                    <div class="col-xxl-8">
                      <input type="password" class="form-control" id="rePassword" v-model="userInfo.dbCheckPassword" />
                    </div>
                  </div>
                  <div class="buttonSave d-flex justify-content-center">
                    <button class="btn btn-primary" type="button" @click="setNewPassword"
                      :disabled="checkPasswordEmpty">更改密碼</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { docCookies } from '../../assets/cookie';

export default {
  data() {
    return {
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
        console.log(err);
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
            alert('更新成功');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    setNewPassword() {
      this.$axios.patch(`/users/${this.userInfo.id}`, {
        "password":this.userInfo.newPassword,
        "copyPassword":this.userInfo.newPassword
      })
        .then((response) => {
          if (response.status === 200) {
            alert('更新成功');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    signOut() {
      docCookies.removeItem("token");
      docCookies.removeItem("identity");
      docCookies.removeItem("id");
    }
  }
}
</script>
<style lang="scss" scoped>
.membercenter {
  min-height: calc(100vh - 174px);

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
