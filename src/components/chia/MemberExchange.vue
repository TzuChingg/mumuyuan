<template>
  <h3 class="text-center text-dark" style="font-weight: 600;letter-spacing: 2px;">點數兌換</h3>
  <hr />
  <div class="row justify-content-center memberexchange">
    <div class="col-12 mb-4">
      <h5 class="fw-bolder px-2" style="letter-spacing: 1px;color: #d73e2dd4;">會員點數：{{ userInfo.point }} 點</h5>
      <hr />
      <div class="d-flex flex-wrap">
        <div class="mb-4 col-lg-4 col-6 p-2" v-for="i in coupons" :key="i.name">
          <img :src="`./木木苑食材修圖/${i.image}.jpg`" class="card-img-top" alt="折價券" />
          <div class="card-body p-2 bg-light">
            <h5 class="fw-bolder fs-5 text-dark mb-2">優惠方式 : {{ i.name }}</h5>
            <p class="text-start mb-3 text-dark" style="font-size:18px;font-weight:600">需求點數 : {{ i.point }} 點</p>
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <button type="button" class="btn btn-primary items-center" data-bs-toggle="modal"
                  data-bs-target="#exampleModal" @click="chooseDiscount(i)" :disabled="userInfo.point < i.point">
                  兌換
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">點數兌換</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否使用 {{ choose.point }} 點兌換 {{ choose.name }} 1 {{ choose.unit }}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="confirm(choose)" data-bs-dismiss="modal">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { docCookies } from '@/assets/cookie'

export default {
  data() {
    return {
      userInfo: {},
      coupons: [],
      choose: {}
    }
  },
  created() {
    this.$axios.get(`/coupons?isLook=true`).then((res) => {
      this.coupons = res.data
      this.getUserInfo()
    })
  },
  methods: {
    getUserInfo() {
      this.$axios.get(`/users/${docCookies.getItem('id')}`).then((res) => {
        this.userInfo = res.data
      })
    },
    chooseDiscount(iChoose) {
      this.choose = iChoose
    },
    confirm(getPoint) {
      const { id, name, calc, image, description } = getPoint
      const point = this.userInfo.point - getPoint.point
      const today = new Date()
      let expiryDate = today.setDate(today.getDate() + 7)
      expiryDate = new Date(expiryDate).toLocaleDateString()
      let coupon = this.userInfo.coupon
      coupon.push({ name, calc, image, description, expiryDate, id })
      this.$axios
        .patch(`/users/${this.userInfo.id}`, { point, coupon })
        .then((response) => {
          if (response.status === 200) {
            this.getUserInfo()
            this.$swal({
              icon: 'success',
              title: '兌換成功',
              text: '請確認兌換券',
              timer: 1500
            })
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '兌換失敗',
            text: '請稍後再試',
            timer: 3000
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.memberexchange {

  button:hover {
    a {
      color: white;
    }
  }

  .questionIcon:hover {
    cursor: pointer;
  }

  .card {
    img {
      object-fit: cover;
      height: 150px;
    }
  }
}
</style>
