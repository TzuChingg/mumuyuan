<template>
  <div class="container mb-5">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <div class="row justify-content-center">
      <div class="col-10">
        <VForm ref="form" v-slot="{ errors }">
          <table class="table table-borderless align-middle table-light">
            <thead>
              <tr>
                <td colspan="4">
                  <table class="table mb-0 table-light">
                    <thead>
                      <tr>
                        <td class="col-2"></td>
                        <td class="text-center fs-5">名稱</td>
                        <td class="text-center fs-5 col-2">數量</td>
                        <td class="text-center fs-5 col-3">價格</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in cartsList.carts" :key="index">
                        <td class="text-center">
                          <a href="" @click.prevent="removeCartsListItem(item.id)" class="p-0"><i
                              class="bi bi-x-lg text-primary fs-4"></i></a>
                        </td>
                        <td class="fs-5">
                          <div class="ms-5 ps-4">
                            <img :src="item.product.image" :alt="item.product.productName" style="width: 50px" />
                            {{ item.product.productName }}
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="input-group mt-1">
                            <input type="button" class="cal btn btn-outline-dark" value="-"
                              @click="decreaseQty(item.id)" />
                            <input type="number" id="" name="quantity"
                              class="form-control input-number border-primary text-center p-0 shadow-none" :value="item.quantity"
                              min="1" max="100" readonly="readonly" />
                            <input type="button" class="cal btn btn-outline-dark" value="+"
                              @click="increaseQty(item.id)" />
                          </div>
                        </td>
                        <td class="text-center fs-5">{{ item.amount }}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="text-end fs-5">總金額</td>
                <td class="text-center fs-5">$ {{ total }}</td>
              </tr>
              <tr v-if="this.myIdentity">
                <td colspan="3" class="text-end fs-5">獲得點數</td>
                <td class="text-center fs-5">{{ point }}</td>
              </tr>
              <tr>
                <td class="col-3">
                  <label for="name" class="form-label d-flex justify-content-center fs-5">您的姓名</label>
                </td>
                <td class="col-3">
                  <VField id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
                    v-model="user.name" placeholder="請輸入姓名" rules="required"></VField>
                  <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
                </td>
                <td class="col-3">
                  <label for="phone" class="form-label d-flex justify-content-center fs-5">手機號碼</label>
                </td>
                <td class="col-3">
                  <VField id="tel" name="tel" type="tel" class="form-control" :class="{ 'is-invalid': errors['tel'] }"
                    v-model="user.phone" placeholder="請輸入電話" rules="required|min:9|numeric"></VField>
                  <ErrorMessage name="tel" class="invalid-feedback"></ErrorMessage>
                </td>
              </tr>
              <tr>
                <td class="col-3">
                  <label for="email" class="form-label d-flex justify-content-center fs-5">電子郵件</label>
                </td>
                <td class="col-3">
                  <VField id="email" name="email" type="email" class="form-control" v-model="user.email"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"></VField>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
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
              <tr v-if="this.myIdentity">
                <td class="text-center">
                  <label class="form-label fs-5">優惠券</label>
                </td>
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
              <tr>
                <td class="text-center">
                  <label class="form-label fs-5">選擇口味</label>
                </td>
                <td>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <VField name="flavor" type="radio" value=1 rules="required"
                          class=" form-check-input border-primary" id="pepperSalt" v-model="flavor" />
                        <label class="form-check-label fs-5" for="pepperSalt"> 椒鹽 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="flavor" type="radio" value="2" rules="required"
                          class=" form-check-input border-primary" id="secretSpice" v-model="flavor" />
                        <label class="form-check-label fs-5" for="secretSpice"> 秘粉 </label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="flavor" class="text-danger" />
                </td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <td class="text-center">
                  <label class="form-label fs-5">選擇辣度</label>
                </td>
                <td colspan="3">
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="1" rules="required"
                          class=" form-check-input border-primary" id="nonSpicy" v-model="spicy" />
                        <label class="form-check-label fs-5" for="nonSpicy"> 不辣 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="2" rules="required"
                          class=" form-check-input border-primary" id="mildlySpicy" v-model="spicy" />
                        <label class="form-check-label fs-5" for="mildlySpicy"> 小辣 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="3" rules="required"
                          class=" form-check-input border-primary" id="mediumSpicy" v-model="spicy" />
                        <label class="form-check-label fs-5" for="mediumSpicy"> 中辣 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="4" rules="required"
                          class=" form-check-input border-primary" id="spicy" v-model="spicy" />
                        <label class="form-check-label fs-5" for="spicy"> 大辣 </label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="spicy" class="text-danger" />
                </td>
              </tr>
              <tr>
                <td class="text-center fs-5">取餐方式</td>
                <td>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <VField name="type" type="radio" value=false rules="required"
                          class=" form-check-input border-primary" id="selfPickup" v-model="type"/>
                        <label class="form-check-label fs-5" for="selfPickup"> 自取 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="type" type="radio" value=true rules="required"
                          class=" form-check-input border-primary" id="orderDelivery" v-model="type"/>
                        <label class="form-check-label fs-5" for="orderDelivery"> 外送 </label>
                      </div>
                    </div>
                  </div>
                </td>
                <td colspan="2">
                  <div class="form-floating mb-3">
                    <input type="address" class="form-control" id="floatingInput" placeholder="" disabled>
                    <label for="floatingInput">外送地址</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-5">附贈餐具</td>
                <td>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <VField name="tableware" type="radio" value=false rules="required"
                          class=" form-check-input border-primary" id="noTableware" v-model="tableware"/>
                        <label class="form-check-label fs-5" for="noTableware"> 不用 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="tableware" type="radio" value=true rules="required"
                          class=" form-check-input border-primary" id="needTableware" v-model="tableware"/>
                        <label class="form-check-label fs-5" for="needTableware"> 需要 </label>
                      </div>
                    </div>
                  </div>
                </td>
                <td colspan="2" rowspan="2" class="fs-5">
                  <div class="col d-flex justify-content-between">
                    <p for="">備註</p>
                    <textarea v-model="comment" name="comment" id="comment" cols="38" rows="3" style="resize: none; "></textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-5">提袋</td>
                <td>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <VField name="bags" type="radio" value=false rules="required"
                          class=" form-check-input border-primary" id="noBags" v-model="bags"/>
                        <label class="form-check-label fs-5" for="noBags"> 不用 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="bags" type="radio" value=true rules="required"
                          class=" form-check-input border-primary" id="needBags" v-model="bags"/>
                        <label class="form-check-label fs-5" for="needBags"> 需要 </label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-5">付款方式</td>
                <td colspan="2">
                  <div class="row">
                    <div class="col d-flex justify-content-center">
                      <div class="form-check">
                        <VField name="pay" type="radio" value=true rules="required"
                          class=" form-check-input border-primary" id="cash" v-model="payment"/>
                        <label class="form-check-label fs-5" for="cash"> 現金 </label>
                      </div>
                    </div>
                    <div class="col d-flex justify-content-center">
                      <div class="form-check">
                        <VField name="pay" type="radio" value=false rules="required"
                          class=" form-check-input border-primary" id="creditCard" v-model="payment"/>
                        <label class="form-check-label fs-5" for="creditCard"> 線上付款 </label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="pay" class="text-danger" />
                </td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <div class="row justify-content-center mt-3 mb-5">
                    <div class="col-2 d-flex justify-content-center">
                      <button type="button" class="btn btn-danger"
                        @click="useCoupon(couponName, myIdentity); pushOrder()">
                        送出訂單
                      </button>
                    </div>
                  </div>
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
      product: [],
      currentDate: '',
      currentTime: '',
      flavor: "",
      spicy: "",
      orderId: "",
      comment:"",
      type:"",
      tableware:"",
      bags:"",
      payment:"",
      point:"",
    }
  },
  computed: {
    ...mapState(cartStore, ['cartsList']),
    ...mapState(cartStore, ['storeInformation'])
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
    pushOrder() {
      const data = {
        "isMember": this.myIdentity ? "true" : "false",
        "name": this.user.name,
        "phone": this.user.phone,
        "mail": this.user.mail,
        "day": this.currentDate,
        "product": this.product,
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
      const point = {point:this.user.point + this.point}
      this.$axios.patch(`/users/${this.myIdentity}`, point)
      this.$axios.post(`/orders`, data)
        .then(res => {
          location.reload();
        })
     
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
    'cartsList.carts': {
      handler(newValue, oldValue) {
        oldValue.forEach(element => {
          this.total -= element.amount
          this.point = parseInt(this.total/100)
        });
        newValue.forEach(element => {
          this.total += element.amount
          this.point = parseInt(this.total/100)
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

  
  },
  created() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // 月份从 0 开始，所以要加 1
    const day = currentDate.getDate();

    this.currentDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // 获取当前的时间
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes() + 20; // 将分钟数加上 20
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
.cal:hover {
  color: #f1eee9;
}
</style>
