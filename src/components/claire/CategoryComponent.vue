<script>
export default {
  data() {
    return { categories: [] }
  },
  methods: {},
  computed: {},
  mounted() {
    this.$axios
      .get('/categories')
      .then((res) => {
        this.categories = res.data
        console.log(this.categories)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<template>
  <nav class="navbar d-flex justify-content-center">
    <div class="btn-group" role="group" v-for="category in categories" :key="category.id">
      <button type="button" class="btn btn-outline-primary mx-2">{{ category.title }}</button>
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
@media screen and (max-width: 625px) {
  .btn-group {
    flex-direction: column;
  }
}
</style>
