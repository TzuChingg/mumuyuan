<script>
import useCartStore from '@/stores/cart';
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      cart: [],
      products: []
    }
  },
  computed:{},
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
  <div class=" container x">
    <h1 class="my-4 text-center me-2">購物車</h1>
    <!-- v-if -->
    <!--<div>購物車沒有任何品項</div>-->
    <!-- v-else -->
    <table class="table table-borderless">
      <tbody >
        <tr class=" border-bottom">
          <td class="align-middle d-flex justify-content-evenly align-items-center ">
            <a href="#" class="link-dark text-decoration-none fs-4">x</a>
            <div>七里香</div>
            <div></div>
            <div class="position-relative">
              <ul class="pagination position-absolute top-50 start-50 translate-middle">
                <li class="page-item">
                  <button class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">-</span>
                  </button>
                </li>
                <li class="page-item"><button class="page-link" href="#">1</button></li>
                <li class="page-item">
                  <button class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">+</span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="text-end">$25</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-end pe-4">總金額 NT$ 60</td>
        </tr>
      </tfoot>
    </table>
    <div class="row ">
      <div class="col-6  ">
        <div class="d-flex mt-2 justify-content-center ">
            <label for="name" class="">您的姓名</label>
            <input type="text" class="ms-2" id="name" />
          </div>
          <div class="d-flex mt-2 justify-content-center">
            <label for="phone" class="">手機號碼</label>
            <input type="phone" class="ms-2" id="phone" />
          </div>
          <div class="d-flex mt-2 justify-content-center">
            <label for="email" class="">電子郵件</label>
            <input type="email" class="ms-2" id="email" />
          </div>
          <div class="d-flex mt-2 justify-content-center">
            <label for="pickup" class="">取餐時間</label>
            <input type="text" class="ms-2" id="pickup" />
          </div>
      </div>
      <div class="col-6 ">
            <div class="d-flex mb-3 justify-content-center">
              <select
                class="form-select border border-dark form-select-md w-50 "
                aria-label="coupon"
                id="coupon"
              >
                <option selected>請選擇口味</option>
                <option value="1">秘粉</option>
                <option value="2">梅粉</option>
                <option value="3">椒鹽</option>
              </select>
            </div>
            <div class="d-flex my-3 justify-content-center">
              <select
                class="form-select border border-dark form-select-md w-50 "
                aria-label="coupon"
                id="coupon"
              >
                <option selected>請選擇辣度</option>
                <option value="1">小辣</option>
                <option value="2">中辣</option>
                <option value="3">大辣</option>
              </select>
            </div>
            <div class="d-flex my-3 justify-content-center">
              <select
                class="form-select border border-dark form-select-md w-50 "
                aria-label="coupon"
                id="coupon"
              >
                <option selected>請選擇一張優惠券</option>
                <option value="1">優惠券</option>
                <option value="2">優惠券</option>
                <option value="3">優惠券</option>
              </select>
            </div>

      </div>
      <div class=" mt-4 d-flex justify-content-center">
        <div class="me-3">付款方式:</div>
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label me-2" for="inlineRadio1">現金</label>
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label me-2" for="inlineRadio1">信用卡</label>
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">Line Pay</label>
      </div>
      <div >
        <div class=" mt-4  d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary ">返回</button>
            <button type="button" class="btn btn-outline-primary ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              送出訂單
            </button>
          </div>
      </div>
    </div>





      

  </div>



</template>

<style lang="scss">
a {
  text-decoration: none;
}
.x{
  height: 100vh;
}
</style>


