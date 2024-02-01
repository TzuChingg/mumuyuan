<script>
import CategoryComponent from '@/components/claire/CategoryComponent.vue'

export default {
  data() {
    return { categories: [] }
  },
  mounted() {
    this.$axios
      .get('/categories')
      .then((res) => {
        console.log(res.data)
        this.categories = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  },
  components: { CategoryComponent }
}
</script>
<template>
  <div class="container pt-5">
    <!--title-->
    <h1 class="my-4 text-center">線上點餐</h1>
    <!--category-->
    <CategoryComponent></CategoryComponent>
    <main>
      <!-- 食材卡片 -->
      <div class="px-3">
        <div class="row d-flex px-5 justify-content-evenly">
          <!--menu-->
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
