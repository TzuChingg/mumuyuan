<script>
import CategoryComponent from '@/components/claire/CategoryComponent.vue'
import MenuComponent from '@/components/claire/MenuComponent.vue'
export default {
  data() {
    return { categories: [] }
  },
  mounted() {
    this.$axios
      .get('/products')
      .then((res) => {
        this.categories = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  },
  components: { CategoryComponent, MenuComponent }
}
</script>
<template>
  <div class="container">
    <!--title-->
    <h1 class="text-center pt-5">線上點餐</h1>
    <!--category-->
    <CategoryComponent></CategoryComponent>
    <main>
      <!-- 食材卡片 -->
      <div>
        <!--menu-->
        <h1 class="text-center py-3">固定套餐</h1>
        <MenuComponent :categoryId="1"></MenuComponent>
        <h1 class="text-center py-3">秘捲</h1>
        <MenuComponent :categoryId="2"></MenuComponent>
        <h1 class="text-center py-3">肉品</h1>
        <MenuComponent :categoryId="3"></MenuComponent>
        <h1 class="text-center py-3">海鮮</h1>
        <MenuComponent :categoryId="4"></MenuComponent>
        <h1 class="text-center py-3">酒食</h1>
        <MenuComponent :categoryId="5"></MenuComponent>
        <h1 class="text-center py-3">蔬菜</h1>
        <MenuComponent :categoryId="6"></MenuComponent>
        <h1 class="text-center py-3">經典</h1>
        <MenuComponent :categoryId="7"></MenuComponent>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
