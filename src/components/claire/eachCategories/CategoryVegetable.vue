<script>
import menuStore from '../../../stores/menu.js'
import { mapState, mapActions } from 'pinia'
import axios from 'axios'
const url = 'http://localhost:3000'
export default {
  data() {
    return {
      products: []
    }
  },
  methods: { ...mapActions(menuStore, ['loadData']) },
  computed: { ...mapState(menuStore, ['sortProducts']) },
  created() {
    console.log(this.$route.params)
    const categoryId = 6
    this.$axios
      .get(`/products?category=${categoryId}`)
      .then((res) => {
        this.products = res.data
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<template>
  <!--test-->
  <router-view></router-view>  
  <!--test-->
  <div class="row row-cols-3 mb-4 g-4">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card aligh-middle">
        <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
        <div class="card-body">
          <h6>
            {{ product.productName }} <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <p class="card-text my-3">{{ product.description }}</p>
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

<style lang="scss">
.card-text {
  height: 75px;
}
</style>
