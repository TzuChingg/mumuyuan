<script>
import useCartStore from '@/stores/cart'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      cart: [],
      products: []
    }
  },
  computed: {},
  created() {
    this.$axios
      .get(`/products`)
      .then((res) => {
        this.products = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<template>
  <div class="container x">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <!-- v-if -->
    <!--<div>購物車沒有任何品項</div>-->
    <!-- v-else -->
    <div class="table-responsive">
      <table class="table table-borderless align-middle table-light">
        <thead>
          <tr>
            <th class="ps-5 pt-5"><label for="name">您的姓名</label></th>
            <th><input type="text" class="ms-2" id="name" /></th>
            <th class="ps-5 pt-5"><label for="phone">手機號碼</label></th>
            <th><input type="phone" class="ms-2" id="phone" /></th>
          </tr>
          <tr>
            <th class="ps-5"><label for="email">電子郵件</label></th>
            <th><input type="email" class="ms-2" id="email" /></th>
            <th class="ps-5">
              <label>取餐時間</label>
            </th>
            <th><label class="ms-2">2024-02-02</label></th>
          </tr>
          <tr>
            <th class="ps-5 pt-5">刪除</th>
            <th class="ps-5">名稱</th>
            <th class="ps-5">數量</th>
            <th class="px-5 text-end">價格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="ps-5"><a href="#" class="link-dark fs-4">x</a></td>
            <td class="ps-5">七里香</td>
            <td class="ps-5">
              <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary">-</button>
                <button type="button" class="btn btn-outline-primary">1</button>
                <button type="button" class="btn btn-outline-primary">+</button>
              </div>
            </td>
            <td class="px-5"><div class="text-end">$25</div></td>
          </tr>
          <tr>
            <td class="px-5 pt-5" colspan="4">
              <div class="d-flex justify-content-end">
                <select
                  class="form-select border border-dark form-select-md w-50"
                  aria-label="coupon"
                  id="coupon"
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
            <td class="px-5 pb-5"><label class="me-3">付款方式:</label></td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label me-2" for="inlineRadio1">現金</label>
            </td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label me-2" for="inlineRadio1">信用卡</label>
            </td>
            <td class="px-5 pb-5">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">Line Pay</label>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="border-top">
            <td class="text-end pe-5" colspan="4">總金額 NT$ 60</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
.x {
  height: 100vh;
}
</style>
