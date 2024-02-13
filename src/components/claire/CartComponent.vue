<script>
import dayjs from 'dayjs'
import { docCookies } from '../../../src/assets/cookie'

export default {
  data() {
    return {
      products: [], // 所有產品資料
      cart: [], //  db 的購物車
      coupons: [], // 使用者優惠券
      businessHours: { startHour: 11, endHour: 3, preparation: 15 }, // 測試用營業時間
      time: '', // 時間
      tempOrder: {
        isMember: true,
        user: { id: 0, email: '', name: '', phone: '', coupon: [], point: 0 },
        coupon: {},
        total: 0,
        flavour: 1,
        spicy: 1,
        payment: '現金'
      }
    }
  },
  methods: {
    // 取使用者資料 ok
    getUser() {
      const id = docCookies.getItem('id') || 4
      this.$axios
        .get(`/users?id=${id}`)
        .then((res) => {
          if (res.data[0]) {
            const { id, name, email, phone, coupon, point } = res.data[0]
            this.tempOrder = {
              isMember: true,
              user: {
                id,
                email,
                name,
                phone,
                coupon,
                point
              },
              coupon: ''
            }
          } else {
            this.tempOrder.isMember = false
            console.log('使用者尚未登入!')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    // 取產品資料 ok
    getProducts() {
      this.$axios
        .get(`/products`)
        .then((res) => {
          this.products = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    },
    // 取購物車資料
    getCart() {
      this.$axios
        .get(`/cart`)
        .then((res) => {
          this.cart = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    },
    // 取優惠券資料
    getCoupons() {
      this.$axios
        .get(`/coupons`)
        .then((res) => {
          this.tempOrder.user.coupon.forEach((couponId) => {
            res.data.filter((coupon) => {
              if (coupon.id === couponId) {
                this.coupons.push(coupon)
              }
            })
          })
        })
        .catch((e) => {
          console.log(e)
        })
    },
    // 刪除 cart
    removeCartItem(id) {
      this.$axios
        .delete(`/cart/${id}`)
        .then((res) => {
          const index = this.cart.findIndex((item) => item.id === id)
          this.cart.splice(index, 1)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  computed: {
    // 整合 cart product
    cartList: ({ cart, products }) => {
      const carts = cart.map((item) => {
        const product = products.find((product) => product.id === item.productId)
        return { ...item, product, subtotal: product.price * item.qty }
      })
      const total = carts.reduce((a, b) => a + b.subtotal, 0)
      return { carts, total }
    }
  },
  created() {
    // 取使用者資料
    this.getUser()
    // 取產品資料
    this.getProducts()
    // 取購物車資料
    this.getCart()
    // 取優惠券資料
    this.getCoupons()
  },
  mounted() {
    // 測試用 取時間
    if (this.businessHours.endHour > dayjs().$H > this.businessHours.startHour && dayjs().$H < 24) {
      alert('非常抱歉!今日尚未營業，這筆訂單將轉為預定訂單')
      this.time = `${dayjs()
        .hour(this.businessHours.startHour)
        .minute(0)
        .format('YYYY-MM-DD HH:mm')}`
    }
    this.time = `${dayjs()
      .add(this.businessHours.preparation, 'minute')
      .format('YYYY-MM-DD HH:mm')}`
  }
}
</script>

<template>
  <div class="container x">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <div v-if="!cart.length">購物車沒有任何品項</div>
    <div class="table-responsive" v-else>
      {{ tempOrder.flavour }}
      <table class="table table-borderless align-middle table-light">
        <thead>
          <tr>
            <th class="ps-5 pt-5"><label for="name">您的姓名</label></th>
            <th><input type="text" class="ms-2" id="name" :value="tempOrder.user.name" /></th>
            <th class="ps-5 pt-5"><label for="phone">手機號碼</label></th>
            <th><input type="phone" class="ms-2" id="phone" :value="tempOrder.user.phone" /></th>
          </tr>
          <tr>
            <th class="ps-5"><label for="email">電子郵件</label></th>
            <th><input type="email" class="ms-2" id="email" :value="tempOrder.user.email" /></th>
            <th class="ps-5">
              <label>取餐時間</label>
            </th>
            <th>
              <label class="ms-2">{{ time }}</label>
            </th>
          </tr>
          <tr>
            <th class="ps-5 pt-5">刪除</th>
            <th class="ps-5">名稱</th>
            <th class="ps-5">數量</th>
            <th class="px-5 text-end">價格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartList.carts" :key="item.id">
            <td class="ps-5">
              <a href="#" class="link-dark fs-4" @click.prevent="removeCartItem(item.id)">x</a>
            </td>
            <td class="ps-5">{{ item.product.productName }}</td>
            <td class="ps-5">
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                v-model="item.qty"
              >
                <option :value="i" v-for="i in item.product.count" :key="i">{{ i }}</option>
              </select>
            </td>
            <td class="px-5">
              <div class="text-end">$ {{ item.subtotal }}</div>
            </td>
          </tr>
          <tr>
            <td class="px-5 pt-5" colspan="4">
              <div class="d-flex justify-content-end">
                <select
                  class="form-select border border-dark form-select-md w-50"
                  aria-label="flavour"
                  id="flavour"
                  v-model="tempOrder.flavour"
                >
                  <option value="0" selected disabled hidden>請選擇口味</option>
                  <option value="1">秘粉</option>
                  <option value="2">梅粉</option>
                  <option value="3">椒鹽</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-5" colspan="4">
              <div class="d-flex justify-content-end">
                <select
                  class="form-select border border-dark form-select-md w-50"
                  aria-label="spicy"
                  id="spicy"
                  v-model="tempOrder.spicy"
                >
                  <option value="0" selected disabled hidden>請選擇辣度</option>
                  <option value="1">小辣</option>
                  <option value="2">中辣</option>
                  <option value="3">大辣</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-5 pb-5" colspan="4">
              <div class="d-flex justify-content-end">
                <select
                  class="form-select border border-dark form-select-md w-50"
                  aria-label="coupon"
                  id="coupon"
                  v-model="tempOrder.coupon"
                >
                  <option value="" selected disabled hidden>請選擇優惠券</option>
                  <option v-for="item in coupons" :key="item.id" :value="item">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-5 pb-5"><label class="me-3">付款方式:</label></td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="payment1"
                value="現金"
                v-model="tempOrder.payment"
                checked
              />
              <label class="form-check-label me-2" for="payment1">現金</label>
            </td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="payment2"
                value="信用卡"
                v-model="tempOrder.payment"
              />
              <label class="form-check-label me-2" for="payment2">信用卡</label>
            </td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="payment3"
                value="Line Pay"
                v-model="tempOrder.payment"
              />
              <label class="form-check-label" for="payment3">Line Pay</label>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="border-top">
            <td class="text-end pe-5" colspan="4">總金額 NT$ {{ cartList.total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="text-center">
        <button
          class="btn btn-primary text-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          確認訂單
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.x {
  height: 100vh;
}
</style>
