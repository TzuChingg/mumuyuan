<script>
export default {
  data() {
    return {  categories: [] }
  },
  methods: { scrollToSection() {} },
  computed: {},
  mounted() {    
    // 取分類
    this.$axios
      .get('/categories')
      .then((res) => {
        this.categories = res.data        
      })
      .catch((e) => {
        console.log(e)
      })
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
      <span class="badge text-bg-danger mx-3">0</span>
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
