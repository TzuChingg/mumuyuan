<script>
export default {
  props: ['categoryId'],
  data() {
    return {
      products: [], // 所有產品
      dbCart: [], // db 購物車
      cart: {},
      selected: 1
    }
  },
  methods: {
    // 加入購物車
    async addToCart(productId, qty = 1) {
      // 取得已加入購物車項目
      const currentCart = this.dbCart.find((item) => {
        return item.productId === productId
      })
      // 如已加過則更新數目
      if (currentCart) {
        currentCart.qty += qty
        this.cart = currentCart
        await this.$axios
          .put(`/cart/${currentCart.id}`, this.cart)
          .then((res) => {
            console.log('成功將重複品項加入購物車')
          })
          .catch((e) => {
            console.log(e)
          })
        this.getCart()
      } else {
        this.cart = { id: new Date().getTime(), productId, qty }
        await this.$axios
          .post(`/cart`, this.cart)
          .then((res) => {
            console.log('成功加入購物車')
          })
          .catch((e) => {
            console.log(e)
          })
        this.getCart()
      }
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
    },
    // 取得購物車資料
    getCart() {
      this.$axios
        .get(`/cart`)
        .then((res) => {
          this.dbCart = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  created() {
    // 取得產品資料
    this.getProducts()
    // 取得購物車資料
    this.getCart()
  },
  mounted() {
    // :value="product.qty"
  }
}
// 使用 scrollBehavior 點擊按鈕滾動到錨點
</script>

<template>
  <div class="container mb-3">
    <div class="row">
      {{ products }}
      <template v-for="product in products" :key="product.id" >
        <div class="col-md-4" v-if="product.isLook === true" >
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
                  v-model="selected"
                >
                  <option :value="i" v-for="i in product.count" :key="i">{{ i }}</option>
                </select>
                <a
                  class="btn btn-outline-primary"
                  type="button"
                  @click.prevent="addToCart(product.id, selected)"
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
