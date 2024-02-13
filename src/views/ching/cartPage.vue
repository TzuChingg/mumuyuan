<template>
  <div class="container mb-5 ">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <div class="row justify-content-center">
      <div class="col-10 ">
        <table class="table table-borderless align-middle table-light ">
          <thead>
            <tr>
              <td>
                <div class="row justify-content-center">
                  <div class="col-7">
                    <label for="name" class=" form-label d-flex justify-content-center fs-5">您的姓名</label>
                  </div>
                </div>
              </td>
              <td class="col-3">
                <input type="text" class=" form-control" id="name">
              </td>
              <td>
                <div class="row justify-content-center">
                  <div class="col-5">
                    <label for="phone" class=" form-label d-flex justify-content-center fs-5">手機號碼</label>
                  </div>
                </div>
              </td>
              <td class="col-3">
                <input type="text" class=" form-control" id="phone">
              </td>
            </tr>
            <tr>
              <td>
                <div class="row justify-content-center">
                  <div class="col-7">
                    <label for="email" class=" form-label d-flex justify-content-center fs-5">電子郵件</label>
                  </div>
                </div>
              </td>
              <td class="col-3">
                <input type="text" class=" form-control" id="email">
              </td>
              <td>
                <div class="row justify-content-center">
                  <div class="col-5">
                    <label for="time" class=" form-label d-flex justify-content-center fs-5">取餐時間</label>
                  </div>
                </div>
              </td>
              <td class="col-3">
                <label for="time" class=" form-label">2024-01-22 18:30</label>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <table class="table mb-0 table-light">
                  <thead>
                    <tr>
                      <td class="col-2"> </td>
                      <td class="text-center fs-5">名稱</td>
                      <td class="text-center fs-5 col-2">數量</td>
                      <td class="text-center fs-5 col-3">價格</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in cartsList.carts" :key="index">
                      <td>
                        <!-- <div class="row h-100 "> -->

                        <a href="" @click.prevent="removeCartsListItem(item.id)"
                          class="p-0 d-flex justify-content-center mt-1"><i class="bi bi-x-lg text-primary fs-4 "></i></a>



                        <!-- </div> -->
                      </td>
                      <td class="fs-5">
                        <div class="ms-5 ps-4">
                          <img :src="item.product.image" :alt="item.product.productName" style="width: 50px;">
                          {{ item.product.productName }}
                        </div>
                      </td>
                      <td class="text-center ">
                        <div class="input-group mt-1">
                          <input type="button" class="cal btn btn-outline-dark" value="-" @click="decreaseQty(item.id)">
                          <input type="number" id="" name="quantity"
                            class="form-control input-number border-primary text-center p-0 h-" :value=item.quantity min=1
                            max=100 readonly="readonly">
                          <input type="button" class="cal btn btn-outline-dark" value="+" @click="increaseQty(item.id)">
                        </div>
                      </td>
                      <td class="text-center fs-5">{{ item.amount }}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="text-end fs-5">總金額
              </td>
              <td class="text-center fs-5"> $ {{ cartsList.totalAmount }}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" class=" text-center">
                <label class=" form-label fs-5">選擇口味</label>
              </td>
              <td>
                <div class="form-check">
                  <input class="form-check-input border-primary" type="radio" name="flavor" id="pepperSalt">
                  <label class="form-check-label fs-5" for="pepperSalt">
                    椒鹽
                  </label>
                </div>
              </td>
              <td>
                <div class="form-check">
                  <input class="form-check-input border-primary" type="radio" name="flavor" id="secretSpice">
                  <label class="form-check-label fs-5" for="secretSpice">
                    秘粉
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2" class=" text-center">
                <label class=" form-label fs-5">選擇辣度</label>
              </td>
              <td>
                <div class="row">
                  <div class="col ">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="spicinessLevel" id="nonSpicy"
                        checked>
                      <label class="form-check-label fs-5" for="nonSpicy">
                        不辣
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="spicinessLevel" id="mildlySpicy">
                      <label class="form-check-label fs-5" for="mildlySpicy">
                        小辣
                      </label>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="row">
                  <div class="col ">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="spicinessLevel" id="mediumSpicy">
                      <label class="form-check-label fs-5" for="mediumSpicy">
                        中辣
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="spicinessLevel" id="spicy">
                      <label class="form-check-label fs-5" for="spicy">
                        大辣
                      </label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 pb-5" colspan="4">
                <div class="d-flex justify-content-end">
                  <select class="form-select border border-dark form-select-md w-50" aria-label="coupon" id="coupon">
                    <option selected>請選擇一張優惠券</option>
                    <option value="1">優惠券</option>
                    <option value="2">優惠券</option>
                    <option value="3">優惠券</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center fs-5">付款方式</td>
              <td colspan="3">
                <div class="row">
                  <div class="col d-flex justify-content-center">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="payment" id="cash">
                      <label class="form-check-label fs-5" for="cash">
                        現金
                      </label>
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="payment" id="creditCard">
                      <label class="form-check-label fs-5" for="creditCard">
                        信用卡
                      </label>
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="form-check">
                      <input class="form-check-input border-primary" type="radio" name="payment" id="linePay">
                      <label class="form-check-label fs-5" for="linePay">
                        Line Pay
                      </label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">
                <div class="row justify-content-center mt-3 mb-5">
                  <div class="col-2 d-flex justify-content-center">
                    <button class="btn btn-primary">送出訂單</button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'
export default {
  computed: {
    ...mapState(cartStore, ['cartsList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartsListItem']),
    ...mapActions(cartStore, ['increaseQty']),
    ...mapActions(cartStore, ['decreaseQty'])
  },
}
</script>

<style lang="scss" scoped>
.cal:hover {
  color: #f1eee9;
}</style>
