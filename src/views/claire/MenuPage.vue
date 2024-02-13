<script>
import CategoryComponent from '@/components/claire/CategoryComponent.vue'
import MenuComponent from '@/components/claire/MenuComponent.vue'
export default {
  data() {
    return {
      categories: [],
      cart: [],
      categoryId: 0 // 傳到 CategoryComponent
    }
  },
  methods: {
    scrollToCategory(categoryId) {
      console.log(categoryId)
      const element = document.querySelector(`${categoryId}`)
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    // 取分類
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
    // 取購物車
    getCart() {
      this.$axios
        .get('/cart')
        .then((res) => {
          this.cart = res.data
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
    // 取購物車
    this.getCart()
  },
  components: { MenuComponent }
}
</script>
<template>
  <div class="container">
    <!--title-->
    <h1 class="text-center pt-5">線上點餐</h1>
    <!--category-->
    <nav class="navbar d-flex justify-content-center py-4">
      <div class="btn-group" role="group" v-for="category in categories" :key="category.id">
        <button
          type="button"
          class="btn btn-outline-primary mx-2"
          @click="scrollToCategory(`#${category.eng}`)"
        >
          {{ category.title }}
        </button>
      </div>
      <div href="#" class="d-flex justify-content-end align-items-center p-2">
        <router-link to="/cart" class="link">購物車</router-link>
        <span class="badge text-bg-danger mx-3">{{ cart.length }}</span>
      </div>
    </nav>
    <main>
      <!-- 食材卡片 -->
      <div v-for="category in categories" :key="category.id">
        <!--menu-->
        <h1 class="text-center py-3" :id="category.eng">{{ category.title }}</h1>
        <MenuComponent :categoryId="category.id"></MenuComponent>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
@media screen and (max-width: 700px) {
  nav {
    flex-direction: column;
  }
  nav div button {
    margin: 10px;
  }
}
</style>
