<template>
  <div class="container mb-5">
    <h1 class="my-4 text-dark text-center me-2 fw-bolder" style="letter-spacing:2px">購物車</h1>
    <div class="row justify-content-center">
      <div class="col-10">
        <VForm ref="form" v-slot="{ errors }">
          <table class="table table-borderless table-light">
            <thead>
              <tr class="align-middle">
                <td colspan="4">
                  <table class="table mb-0 table-light">
                    <thead>
                      <tr class="text-center fs-5 fw-bolder">
                        <td class="text-primary">取消</td>
                        <td class="text-primary">名稱</td>
                        <td class="text-primary">數量</td>
                        <td class="text-primary">價格</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in cartsList.carts" :key="index">
                        <td class="text-center align-middle">
                          <a @click.prevent="removeCartsListItem(item.id)" class="p-0"><i
                              class="bi bi-x-lg text-primary fs-4"></i></a>
                        </td>
                        <td class="fs-5 align-middle">
                          <div class="ms-5 ps-4">
                            <img :src="item.product.image" :alt="item.product.productName" style="width: 50px" />
                            {{ item.product.productName }}
                          </div>
                        </td>
                        <td class="text-center align-middle">
                          <div class="input-group mt-1">
                            <input type="button" class="cal btn btn-outline-dark" value="-"
                              @click="decreaseQty(item.id)" />
                            <input type="number" id="" name="quantity"
                              class="form-control input-number border-primary text-center p-0 shadow-none"
                              :value="item.quantity" min="1" max="100" readonly="readonly" />
                            <input type="button" class="cal btn btn-outline-dark" value="+"
                              @click="increaseQty(item.id)" />
                          </div>
                        </td>
                        <td class="text-center fs-5 align-middle">{{ item.amount }}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr class="align-middle">
                <td colspan="2" class="text-primary fs-4 text-center" v-if="this.myIdentity">
                  <div class="border border-2 border-primary py-1">
                    <span class="me-3 p-2">獲得點數</span>
                    <span>{{ point }}</span>
                  </div>
                </td>
                <td colspan="2" v-else></td>
                <td colspan="2" class="text-primary fs-4 text-center">
                  <div class="border border-2 border-primary py-1">
                    <span class="me-3 p-2">總金額</span>
                    <span>${{ total }}</span>
                  </div>
                </td>
              </tr>
              <tr class="align-middle">
                <td>
                  <label for="name" class="form-label d-flex justify-content-center fs-5">您的姓名</label>
                </td>
                <td>
                  <VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                    v-model="user.name" placeholder="請輸入姓名" rules="required">
                  </VField>
                  <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                </td>
                <td>
                  <label for="tel" class="form-label d-flex justify-content-center fs-5">手機號碼</label>
                </td>
                <td>
                  <VField id="tel" name="手機" type="tel" class="form-control" :class="{ 'is-invalid': errors['手機'] }"
                    v-model="user.phone" placeholder="請輸入手機" rules="required|min:10|max:10|numeric"></VField>
                  <ErrorMessage name="手機" class="invalid-feedback"></ErrorMessage>
                </td>
              </tr>
              <tr class="align-middle">
                <td class="col-3">
                  <label for="email" class="form-label d-flex justify-content-center fs-5">電子郵件</label>
                </td>
                <td class="col-3">
                  <VField id="email" name="郵件" type="email" class="form-control" v-model="user.email"
                    :class="{ 'is-invalid': errors['郵件'] }" placeholder="請輸入郵件" rules="email|required"></VField>
                  <ErrorMessage name="郵件" class="invalid-feedback"></ErrorMessage>
                </td>
                <td class="col-3">
                  <label for="time" class="form-label d-flex justify-content-center fs-5">取餐時間</label>
                </td>
                <td class="col-3">
                  <label for="time" class="form-label">{{ currentDate }} {{ currentTime }}</label>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="align-middle" v-if="this.myIdentity">
                <td class="text-center fs-5">優惠方式</td>
                <td>
                  <div class="d-flex justify-content-end">
                    <template v-if="user.coupon == 0 || user.coupon == undefined">
                      <select class="form-select border border-dark form-select-md" aria-label="coupon" id="coupon"
                        @change="handleCouponChange" disabled>
                        <option value="0" selected>尚未持有優惠券</option>
                      </select>
                    </template>
                    <select v-else class="form-select border border-dark form-select-md" aria-label="coupon" id="coupon"
                      @change="handleCouponChange">
                      <option value="0">請選擇優惠券</option>
                      <option v-for="(option, index) in user.coupon" :key="index" :value="option.calc">{{ option.name }}
                      </option>
                    </select>
                  </div>
                </td>
                <td colspan="2"></td>
              </tr>
              <tr class="align-middle">
                <td class="text-center fs-5">選擇口味</td>
                <td>
                  <div class="row">
                    <div class="col">
                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <VField name="口味" type="radio" value="1" rules="required"
                          class="btn-check form-check-input border-primary" id="pepperSalt" v-model="flavor" />
                        <label class="btn btn-outline-primary fs-5" for="pepperSalt"> 椒鹽 </label>
                        <VField name="口味" type="radio" value="2" rules="required"
                          class="btn-check form-check-input border-primary" id="secretSpice" v-model="flavor" />
                        <label class="btn btn-outline-primary fs-5" for="secretSpice"> 秘粉 </label>
                      </div>
                    </div>
                    <ErrorMessage name="口味" class="text-danger" />
                  </div>
                </td>
                <td colspan="2"></td>
              </tr>
              <tr class="align-middle">
                <td class="text-center fs-5">選擇辣度</td>
                <td colspan="3">
                  <div class="row">
                    <div class="col">
                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <VField name="辣度" type="radio" value="1" rules="required"
                          class="btn-check form-check-input border-primary" id="nonSpicy" v-model="spicy" />
                        <label class="btn btn-outline-primary fs-5" for="nonSpicy"> 不辣 </label>
                        <VField name="辣度" type="radio" value="2" rules="required"
                          class="btn-check form-check-input border-primary" id="mildlySpicy" v-model="spicy" />
                        <label class="btn btn-outline-primary fs-5" for="mildlySpicy"> 小辣 </label>
                        <VField name="辣度" type="radio" value="3" rules="required"
                          class="btn-check form-check-input border-primary" id="mediumSpicy" v-model="spicy" />
                        <label class="btn btn-outline-primary fs-5" for="mediumSpicy"> 中辣 </label>
                        <VField name="辣度" type="radio" value="4" rules="required"
                          class="btn-check form-check-input border-primary" id="spicy" v-model="spicy" />
                        <label class="btn btn-outline-primary fs-5" for="spicy"> 大辣 </label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="辣度" class="text-danger" />
                </td>
              </tr>
              <tr class="align-middle">
                <td class="text-center fs-5">取餐方式</td>
                <td colspan="4">
                  <div class="row align-items-center">
                    <div class="col-3">
                      <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                        <VField name="取餐方式" type="radio" value="false" rules="required"
                          class="btn-check form-check-input border-primary" id="selfPickup" v-model="type" />
                        <label class="btn btn-outline-primary fs-5" for="selfPickup"> 自取 </label>
                        <VField name="取餐方式" type="radio" value="true" rules="required"
                          class="btn-check form-check-input border-primary" id="orderDelivery" v-model="type" />
                        <label class="btn btn-outline-primary fs-5" for="orderDelivery"> 外送 </label>
                      </div>
                    </div>
                    <ErrorMessage name="取餐方式" class="text-danger" />
                    <div class="col-9">
                      <VField name="外送地址" type="text" class="form-control" :class="{ 'is-invalid': errors['外送地址'] }"
                        placeholder="外送地址" v-model="address" :disabled="type === 'false'"
                        :rules="{ required: type === 'true' }" />
                    </div>
                    <ErrorMessage name="外送地址" class="invalid-feedback"></ErrorMessage>
                  </div>
                </td>
              </tr>
              <tr class="align-middle">
                <td colspan="1">
                  <div class="text-center fs-5">附贈餐具</div>
                </td>
                <td colspan="1">
                  <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                    <VField name="附贈餐具" type="radio" value="false" rules="required"
                      class="btn-check form-check-input border-primary" id="noTableware" v-model="tableware" />
                    <label class="btn btn-outline-primary fs-5 col-6" for="noTableware"> 不用 </label>
                    <VField name="附贈餐具" type="radio" value="true" rules="required"
                      class="btn-check form-check-input border-primary" id="needTableware" v-model="tableware" />
                    <label class="btn btn-outline-primary fs-5 col-6" for="needTableware"> 需要 </label>
                    <ErrorMessage name="附贈餐具" class="text-danger" />
                  </div>
                </td>
                <td colspan="2">
                  <div class="d-flex align-items-center">
                    <div class="text-center fs-5 w-25">提袋</div>
                    <div class="btn-group w-75" role="group" aria-label="Basic radio toggle button group">
                      <VField name="提袋" type="radio" value="false" rules="required"
                        class="btn-check form-check-input border-primary" id="noBags" v-model="bags" />
                      <label class="btn btn-outline-primary fs-5 col-6" for="noBags"> 不用 </label>
                      <VField name="提袋" type="radio" value="true" rules="required"
                        class="btn-check form-check-input border-primary" id="needBags" v-model="bags" />
                      <label class="btn btn-outline-primary fs-5 col-6" for="needBags"> 需要 </label>
                    </div>
                  </div>
                </td>
                <ErrorMessage name="提袋" class="text-danger" />
              </tr>
              <tr class="align-middle">
                <td class="text-center fs-5">付款方式</td>
                <td>
                  <div class="row">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <VField name="pay" type="radio" value="true" rules="required"
                        class="btn-check form-check-input border-primary" id="cash" v-model="payment" />
                      <label class="btn btn-outline-primary fs-5 col-6" for="cash"> 現金 </label>
                      <VField name="pay" type="radio" value="false" rules="required"
                        class="btn-check form-check-input border-primary" id="creditCard" v-model="payment" />
                      <label class="btn btn-outline-primary fs-5 col-6" for="creditCard"> 線上付款 </label>
                    </div>
                  </div>
                  <ErrorMessage name="pay" class="text-danger" />
                </td>
                <td colspan="2">
                  <div class="d-flex align-items-center">
                    <div class="text-center fs-5 w-25">備註</div>
                    <div class="btn-group w-75" role="group" aria-label="Basic radio toggle button group">
                      <textarea v-model="comment" name="comment" id="comment" class="w-100 p-2" rows="3"
                        style="resize: none; "></textarea>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="align-middle text-center">
                <td colspan="4" height="100">
                  <button type="button" class="btn btn-danger px-3 py-2"
                    @click="useCoupon(couponName, myIdentity); checkValid()">
                    送出訂單
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'
import { docCookies } from '../../assets/cookie';
export default {
  data() {
    return {
      myIdentity: "",
      user: {},
      couponPrice: 0,
      couponName: "",
      total: 0,
      address: '自取',
      product: [],
      currentDate: '',
      currentTime: '',
      flavor: "",
      spicy: "",
      orderId: "",
      comment: "",
      type: "false",
      tableware: "false",
      bags: "false",
      payment: "true",
      point: "",
    }
  },
  computed: {
    ...mapState(cartStore, ['cartsList']),
    ...mapState(cartStore, ['storeInformation']),
    arrayCoupon() {
      return this.cartsList.carts.map(ele => {
        const coupon = this.user.coupon.find(item => item.name === ele.product.productName);
        return {
          name: coupon.name,
          calc: coupon.calc
        };
      });
    }
  },
  methods: {
    ...mapActions(cartStore, ['removeCartsListItem']),
    ...mapActions(cartStore, ['increaseQty']),
    ...mapActions(cartStore, ['decreaseQty']),
    ...mapActions(cartStore, ['member']),
    ...mapActions(cartStore, ['useCoupon']),
    handleCouponChange(event) {
      this.couponPrice = event.target.value;
      this.couponName = event.target.selectedOptions[0].textContent
    },
    async pushOrder() {
      const data = {
        "isMember": this.myIdentity ? "true" : "false",
        "name": this.user.name,
        "phone": this.user.phone,
        // "mail": this.user.email,
        "day": this.currentDate,
        "product": this.product,
        'address': this.address,
        "price": this.total,
        "userId": this.myIdentity,
        "status": 1,
        "type": this.type,
        "tableware": this.tableware,
        "bags": this.bags,
        "payment": this.payment,
        "comment": this.comment,
        "pickTime": this.currentTime,
        "flavor": this.flavor,
        "spicy": this.spicy,
        "orderid": this.orderId,
        "score": "",
      };
      const point = { point: this.user.point + this.point }
      try {
        const apiPost = await this.$axios.post(`/orders`, data)
        const apiPatch = await this.$axios.patch(`/users/${this.myIdentity}`, point);
        if (apiPost.statusText === "Created" && apiPatch.statusText === "OK") {
          this.socket.send(
            JSON.stringify({
              mail: this.user.email,
              orderid: this.orderId
            })
          )
          this.$swal({
            icon: 'success',
            title: '訂單已送出',
            text: '請確認出餐狀態',
            timer: 3000
          }).then(() => {
            window.location.href = "/";
          });
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '訂單送出異常',
          text: '請稍後再試',
          timer: 3000
        }).then(() => {
          window.location.href = "/";
        });
      }
    },
    async checkValid() {
      try {
        const formValid = await this.$refs.form.validate();
        const status = formValid.valid;
        if (!status) throw false;
        this.pushOrder();
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '欄位未填寫完整',
          text: '請再次檢查',
          timer: 300000
        });
      }
    },
  },
  watch: {
    storeInformation: {
      handler(newValue) {
        this.user = { ...newValue };
      },
    },
    couponPrice(newPrice, oldPrice) {
      this.total = this.total - parseInt(oldPrice) + parseInt(newPrice);
    },
    type(newValue, oldValue) {
      this.address = newValue === 'true' ? '' : '自取';
    },
    'cartsList.carts': {
      handler(newValue, oldValue) {
        oldValue.forEach(element => {
          this.total -= element.amount
          this.point = parseInt(this.total / 100)
        });
        newValue.forEach(element => {
          this.total += element.amount
          this.point = parseInt(this.total / 100)
        });
      },
    }

  },
  mounted() {
    this.myIdentity = docCookies.getItem("id")
    this.member(this.myIdentity)
    this.user = { ...this.storeInformation }
    this.total = this.cartsList.totalAmount
    this.point = this.cartsList.point
    this.product = this.cartsList.carts.map(item => {
      return {
        productName: item.product.productName,
        image: item.product.image,
        price: item.product.price,
        quantity: item.quantity
      };
    });

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
  },
  created() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    this.currentDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // 當前時間
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes() + 20; // 加20分鐘
    if (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }
    if (hours >= 24) {
      hours -= 24;
    }
    this.currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    this.orderId = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`
  }
}
</script>

<style lang="scss" scoped>
td,
span,
input[type="number"] {
  cursor: default;
}

i {
  cursor: pointer;
}

label {
  margin-bottom: 0;
}

.cal:hover {
  color: #f1eee9;
}
</style>
