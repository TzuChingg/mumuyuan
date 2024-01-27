<script>
import CartComponent from '../../components/claire/CartComponent.vue'
// export default { components: { CartComponent } }
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">確認訂單</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body mx-5">
          <!--<CartComponent></CartComponent>-->
          <!-- 切換區 -->
          <div class="row mb-3">
            <input type="text" class="form-control col" placeholder="信用卡號碼" />
          </div>
          <div class="row mb-3 d-flex justify-content-between">
            <input type="text" class="form-control col me-3" placeholder="月月/年年" />
            <input type="text" class="form-control col ms-3" placeholder="信用卡認證編號(CVC)" />
          </div>
          <div class="row mb-3">
            <input type="text" class="form-control col" placeholder="持卡人姓名" />
          </div>
          <!-- 切換區 -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
