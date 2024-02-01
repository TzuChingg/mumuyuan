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
  <h1 class="my-4 text-center">蔬菜</h1>
  <!--test-->
  <router-view></router-view>  
  <!--test-->
  <div class="row mb-4 g-4">
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <div class="card aligh-middle">
        <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
        <div class="card-body">
          <h6>
            {{ product.productName }} <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <p class="card-text my-3">{{ product.description }}</p>
          
          <div class="text-end">
            
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
