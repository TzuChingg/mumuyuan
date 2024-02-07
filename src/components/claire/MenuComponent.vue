<script>
export default {
  props: ['categoryId'],
  data() {
    return { products: [], cart: {} }
  },
  methods: {
    // 加入購物車
    addToCart(productId, qty = 1) {
      this.cart = { id: new Date().getTime(), productId, qty }
      this.$axios
        .post(`/cart`, this.cart)
        .then((res) => {
          console.log('成功加入購物車')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    // 取得產品資料
    getProducts() {
      const categoryId = this.categoryId
      this.$axios
        .get(`/products?category=${categoryId}`)
        .then((res) => {
          const data = res.data.sort((a, b) => b.price - a.price)
          this.products = data
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },  
  created() {
    // 取得產品資料
    this.getProducts()
  }
}
// 使用 vue 點擊按鈕滾動到頁面位置
</script>

<template>
  <div class="container mb-3">
    <div class="row">
      <template v-for="product in products" :key="product.id">
        <div class="col-md-4" v-if="product.isLook === true">
          <div class="card my-3">
            <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
            <div class="card-body">
              <h6>
                {{ product.productName }}
                <span class="float-end">$ {{ product.price }}</span>
              </h6>
              <p class="card-text">{{ product.description }}</p>

              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected>選擇數量</option>
                  <option :value="i" v-for="i in product.count" :key="i">{{ i }}</option>
                </select>
                <a
                  class="btn btn-outline-primary"
                  type="button"
                  @click.prevent="addToCart(product.id)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-text {
  height: 75px;
}
img {
  object-fit: contain;
  max-width: 100%;
}
@media screen and (max-width: 700px) {
  .product {
    flex-direction: column;
  }
}
</style>
