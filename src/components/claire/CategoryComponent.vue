<script>
export default {
  data() {
    return { categories: [], cart: [] }
  },
  methods: {
    scrollToSection() {},
    getCategories() {
      this.$axios
        .get('/categories')
        .then((res) => {
          this.categories = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getCart() {
      this.$axios
        .get('/cart')
        .then((res) => {
          this.cart = res.data
          console.log(this.cart)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  mounted() {
    // 取分類
    this.getCategories()
    // 取購物車
    this.getCart()
  },
  updated() {
    this.getCart()
  }
}
</script>

<template>
  <nav class="navbar d-flex justify-content-center py-4">
    <div class="btn-group" role="group" v-for="category in categories" :key="category.id">
      <button type="button" class="btn btn-outline-primary mx-2" @click="scrollToSection">
        {{ category.title }}
      </button>
    </div>
    <div href="#" class="d-flex justify-content-end align-items-center ms-5">
      <router-link to="/cart" class="link">購物車</router-link>
      <span class="badge text-bg-danger mx-3">{{ cart.length }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
@media screen and (max-width: 700px) {
  nav {
    flex-direction: column;
  }
}
</style>
