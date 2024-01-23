<script>
// 引入 store 至 components
import menuStore from '../../stores/menu.js'
import cartStore from '../../stores/cart.js'
import { mapState, mapActions } from 'pinia'

export default {
  // 導入 menu store
  computed: { ...mapState(menuStore, ['sortProducts']) }
}
</script>

<template>
  <div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card aligh-middle">
        <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
        <div class="card-body">
          <h6>
            {{ product.productName }} <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <p class="card-text">{{ product.description }}</p>
          <div class="d-flex my-2">
            <select class="form-select" aria-label="Default select example">
              <option selected>選擇口味</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>選擇辣度</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="text-end d-flex justify-content-between">
            <ul class="pagination m-0">
              <li class="page-item m-0">
                <button class="page-link m-0" href="#" aria-label="Previous">
                  <span aria-hidden="true" class="m-0">-</span>
                </button>
              </li>
              <li class="page-item m-0"><a class="page-link m-0" href="#">1</a></li>
              <li class="page-item m-0">
                <a class="page-link m-0" href="#" aria-label="Next">
                  <span aria-hidden="true">+</span>
                </a>
              </li>
            </ul>
            <a href="#" class="btn btn-outline-primary" @click="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
