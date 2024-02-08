<script>
import dayjs from 'dayjs'
import { docCookies } from '../../../src/assets/cookie'

export default {
  data() {
    return {
      businessHours: { startHour: 11, endHour: 3, preparation: 15 }, // 測試用營業時間
      cart: [], //  db 的購物車
      products: [], // 所有產品資料
      time: '', // 時間
      userData: {},
      coupons: [], // 所有優惠券
      userCoupon: 1, // 使用者所有優惠券
      flavour: 1,
      spicy: 1,
      coupon: 1,
      payment: ''
    }
  },
  methods: {
    // 取使用者資料
    getUser() {
      const id = docCookies.getItem('id')
      this.$axios
        .get(`/users?id=4`)
        .then((res) => {
          if (res.data[0]) {
            this.userData = res.data[0]
          } else {
            this.userData = false
            console.log('使用者尚未登入!')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    // 取產品資料
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
      console.log(this.userData.coupon)
      this.$axios
        .get(`/coupons/1`)
        .then((res) => {
          this.coupons = res.data
          console.log(this.coupons)
        })
        .catch((e) => {
          console.log(e)
        })
    },

    // 刪除 db 跟 data 的 cart
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
    },
    // 取得口味、辣度、優惠券
    getFlavour(flavour) {
      this.flavour = Number(flavour)
    },
    getSpicy(spicy) {
      this.spicy = Number(spicy)
    },
    getCoupon(coupon) {
      this.coupon = Number(coupon)
    },
    addRFQ() {
      const RFQ = {
        isMember: true,
        name: 'eric',
        phone: '094563131',
        mail: '123@123.456',
        day: '2024/01/01',
        product: [
          {
            name: '玉米筍',
            quantity: 5,
            image: '/木木苑食材修圖/01.jpg',
            price: 52
          },
          {
            name: '豬五花蔥捲',
            quantity: 3,
            image: '/木木苑食材修圖/02.jpg',
            price: 61
          },
          {
            name: '鯛魚下巴',
            quantity: 3,
            image: '/木木苑食材修圖/03.jpg',
            price: 45
          },
          {
            name: '雞肉串',
            quantity: 2,
            image: '/木木苑食材修圖/20.jpg',
            price: 89
          }
        ],
        price: 300,
        status: 3,
        userId: this.userData.id,
        type: true,
        tableware: true,
        bags: true,
        payment: this.payment,
        pickTime: '17:00',
        comment: '',
        orderScore: 0,
        flavor: this.flavor,
        spicy: this.spicy,
        orderid: '123',
        id: new Date().getTime()
      }
      this.$axios
        .post(`/RFQ`, {})
        .then((res) => {
          console.log(res.data)
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
      console.log(carts)
      const total = carts.reduce((a, b) => a + b.subtotal, 0)
      return { carts, total }
    }
  },
  async created() {
    // 取使用者資料
    await this.getUser()
    // 取產品資料
    await this.getProducts()
    // 取購物車資料
    await this.getCart()
    // 取優惠券資料
    await this.getCoupons()
  },
  async mounted() {
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
  {{ userData.coupon }}
  <div class="container x">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <div v-if="!cart.length">購物車沒有任何品項</div>
    <div class="table-responsive" v-else>
      <table class="table table-borderless align-middle table-light">
        <thead>
          <tr>
            <th class="ps-5 pt-5"><label for="name">您的姓名</label></th>
            <th><input type="text" class="ms-2" id="name" :value="userData.name" /></th>
            <th class="ps-5 pt-5"><label for="phone">手機號碼</label></th>
            <th><input type="phone" class="ms-2" id="phone" :value="userData.phone" /></th>
          </tr>
          <tr>
            <th class="ps-5"><label for="email">電子郵件</label></th>
            <th><input type="email" class="ms-2" id="email" :value="userData.email" /></th>
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
                  aria-label="coupon"
                  id="coupon"
                  v-model="flavour"
                  @change.prevent="getFlavour(flavour)"
                >
                  <option selected>請選擇口味</option>
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
                  aria-label="coupon"
                  id="coupon"
                  v-model="spicy"
                  @change.prevent="getSpicy(spicy)"
                >
                  <option selected>請選擇辣度</option>
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
                  v-model="coupon"
                  @change.prevent="getCoupon(coupon)"
                >
                  <option value="coupon.id" v-for="coupon in userData.coupon" :key="coupon">
                    優惠券
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
                id="inlineRadio1"
                value="現金"
                v-model="payment"
              />
              <label class="form-check-label me-2" for="inlineRadio1">現金</label>
            </td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="信用卡"
                v-model="payment"
              />
              <label class="form-check-label me-2" for="inlineRadio1">信用卡</label>
            </td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Line Pay"
                v-model="payment"
              />
              <label class="form-check-label" for="inlineRadio1">Line Pay</label>
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
