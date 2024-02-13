<template>
  <div class="container mb-5">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <div class="row justify-content-center">
      <div class="col-10">
        <VForm ref="form" v-slot="{ errors }">
          <table class="table table-borderless align-middle table-light">
            <thead>
              <tr>
                <td class="col-3">
                  <label for="name" class="form-label d-flex justify-content-center fs-5"
                    >您的姓名</label
                  >
                </td>
                <td class="col-3">
                  <VField
                    id="name"
                    name="name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['name'] }"
                    placeholder="請輸入姓名"
                    rules="required"
                  ></VField>
                  <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
                </td>
                <td class="col-3">
                  <label for="phone" class="form-label d-flex justify-content-center fs-5"
                    >手機號碼</label
                  >
                </td>
                <td class="col-3">
                  <VField
                    id="tel"
                    name="tel"
                    type="tel"
                    class="form-control"
                    :class="{ 'is-invalid': errors['tel'] }"
                    placeholder="請輸入電話"
                    rules="required|min:10|numeric"
                  ></VField>
                  <ErrorMessage name="tel" class="invalid-feedback"></ErrorMessage>
                </td>
              </tr>
              <tr>
                <td class="col-3">
                  <label for="email" class="form-label d-flex justify-content-center fs-5"
                    >電子郵件</label
                  >
                </td>
                <td class="col-3">
                  <VField
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                  ></VField>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                </td>
                <td class="col-3">
                  <label for="time" class="form-label d-flex justify-content-center fs-5"
                    >取餐時間</label
                  >
                </td>
                <td class="col-3">
                  <label for="time" class="form-label">2024-01-22 18:30</label>
                </td>
              </tr>
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
                          <a href="" @click.prevent="removeCartsListItem(item.id)" class="p-0"
                            ><i class="bi bi-x-lg text-primary fs-4"></i
                          ></a>
                        </td>
                        <td class="fs-5">
                          <div class="ms-5 ps-4">
                            <img
                              :src="item.product.image"
                              :alt="item.product.productName"
                              style="width: 50px"
                            />
                            {{ item.product.productName }}
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="input-group mt-1">
                            <input
                              type="button"
                              class="cal btn btn-outline-dark"
                              value="-"
                              @click="decreaseQty(item.id)"
                            />
                            <input
                              type="number"
                              id=""
                              name="quantity"
                              class="form-control input-number border-primary text-center p-0 h-"
                              :value="item.quantity"
                              min="1"
                              max="100"
                              readonly="readonly"
                            />
                            <input
                              type="button"
                              class="cal btn btn-outline-dark"
                              value="+"
                              @click="increaseQty(item.id)"
                            />
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
                <td class="text-center fs-5">$ {{ cartsList.totalAmount }}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2" class="text-center">
                  <label class="form-label fs-5">選擇口味</label>
                </td>
                <td colspan="2">
                  <div class="row">
                    <div class="col">
                      <VField name="flavor" type="radio" value="椒鹽" rules="required" />
                      <label class="form-check-label fs-5" for="pepperSalt"> 椒鹽 </label>
                    </div>
                    <div class="col">
                      <VField name="flavor" type="radio" value="秘粉" rules="required"/>
                      <label class="form-check-label fs-5" for="secretSpice"> 秘粉 </label>
                    </div>
                  </div>
                  <ErrorMessage name="flavor" class="text-danger"/>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="text-center">
                  <label class="form-label fs-5">選擇辣度</label>
                </td>
                <td colspan="2">
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="不辣" rules="required"/>
                        <label class="form-check-label fs-5" for="nonSpicy"> 不辣 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="小辣" rules="required"/>
                        <label class="form-check-label fs-5" for="mildlySpicy"> 小辣 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="中辣" rules="required"/>
                        <label class="form-check-label fs-5" for="mediumSpicy"> 中辣 </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <VField name="spicy" type="radio" value="大辣" rules="required"/>
                        <label class="form-check-label fs-5" for="spicy"> 大辣 </label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="spicy" class="text-danger"/>
                </td>
              </tr>
              <tr>
                <td class="px-5 pb-5" colspan="4">
                  <div class="d-flex justify-content-end">
                    <select
                      class="form-select border border-dark form-select-md w-50"
                      aria-label="coupon"
                      id="coupon"
                    >
                      <option selected>請選擇一張優惠券</option>
                      <option value="1">優惠券</option>
                      <option value="2">優惠券</option>
                      <option value="3">優惠券</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="text-center fs-5">付款方式</td>
                <td colspan="2">
                  <div class="row">
                    <div class="col d-flex justify-content-center">
                      <div class="form-check">
                        <VField name="pay" type="radio" value="現金" rules="required"/>
                        <label class="form-check-label fs-5" for="cash"> 現金 </label>
                      </div>
                    </div>
                    <div class="col d-flex justify-content-center">
                      <div class="form-check">
                        <VField name="pay" type="radio" value="信用卡" rules="required"/>
                        <label class="form-check-label fs-5" for="creditCard"> 信用卡 </label>
                      </div>
                    </div>
                    <div class="col d-flex justify-content-center">
                      <div class="form-check">
                        <VField name="pay" type="radio" value="Line Pay" rules="required"/>
                        <label class="form-check-label fs-5" for="linePay"> Line Pay </label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="pay" class="text-danger"/>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <div class="row justify-content-center mt-3 mb-5">
                    <div class="col-2 d-flex justify-content-center">
                      <button type="submit" class="btn btn-danger" @click="onSubmit">
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
export default {
  computed: {
    ...mapState(cartStore, ['cartsList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartsListItem']),
    ...mapActions(cartStore, ['increaseQty']),
    ...mapActions(cartStore, ['decreaseQty'])
  }
}
</script>

<style lang="scss" scoped>
.cal:hover {
  color: #f1eee9;
}
</style>
