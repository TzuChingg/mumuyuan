<script>
import menuStore from '../../stores/menu.js'
import cartStore from '../../stores/cart.js'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      cart: [],
      products: []
    }
  },
  methods: {
    ...mapActions(menuStore, ['getProducts']), 
    ...mapActions(cartStore, ['addToCart']),    
  },
  computed: { ...mapState(menuStore, ['sortProducts']) },
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
          <div class="text-end">
            <a href="#" class="btn btn-outline-primary" @click.prevent="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-text {
  height: 75px;
}
</style>
