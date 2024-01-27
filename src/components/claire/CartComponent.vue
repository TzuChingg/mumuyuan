<script></script>

<template>
  <form class="border border-dark my-4 p-4">
    <h1 class="my-4 text-center">購物車</h1>
    <!-- v-if -->
    <!--<div>購物車沒有任何品項</div>-->
    <!-- v-else -->
    <table class="table table-borderless">
      <tbody class="">
        <tr class="table-tr">
          <td class="d-flex justify-content-evenly my-3">
            <label for="name" class="">您的姓名</label>
            <input type="text" class="" id="name" />
          </td>
        </tr>
        <tr>
          <td class="d-flex justify-content-evenly my-3">
            <label for="phone" class="">手機號碼</label>
            <input type="phone" class="" id="phone" />
          </td>
        </tr>
        <tr>
          <td class="d-flex justify-content-evenly my-3">
            <label for="email" class="">電子郵件</label>
            <input type="email" class="" id="email" />
          </td>
        </tr>
        <tr>
          <td class="d-flex justify-content-evenly my-3">
            <label for="pickup" class="">取餐時間</label>
            <input type="text" class="" id="pickup" />
          </td>
        </tr>
        <tr>
          <td class="align-middle d-flex justify-content-evenly align-items-center my-3">
            <a href="#" class="link-dark text-decoration-none">x</a>
            <div>七里香</div>
            <div>秘粉</div>
            <div>不辣</div>
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
        <tr class="border-top">
          <td class="d-flex justify-content-evenly my-3">
            <div class="d-flex align-items-center">
              <label for="coupon" class="pe-4">優惠券</label>
            </div>
            <div>
              <select
                class="form-select border border-dark form-select-md"
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
        <tr class="">
          <td class="d-flex justify-content-end my-3">
            <!-- 切換區 -->
            <!--https://bootstrap5.hexschool.com/docs/5.0/forms/checks-radios/#inline-->
            <div class="mx-3">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">現金</label>
            </div>
            <div class="mx-3">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">信用卡</label>
            </div>
            <div class="mx-3">
              <input
                class="form-check-input me-1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">Line Pay</label>
            </div>
            <!-- /切換區 -->
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-end pe-4">總金額 NT$ 60</td>
        </tr>
      </tfoot>
    </table>
    <div class="mb-3 d-flex justify-content-evenly mb-3">
      <button type="button" class="btn btn-outline-primary">返回</button>
      <button
        type="button"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        送出訂單
      </button>
    </div>
  </form>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
