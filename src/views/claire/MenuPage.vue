<script>

import CategoryComponent from '../../components/claire/CategoryComponent.vue'
import MenuComponent from '../../components/claire/MenuComponent.vue'
export default { components: {  CategoryComponent, MenuComponent } }
</script>

<template>
  <div>
    <h1 class="my-4 text-center">線上點餐</h1>
    <!--category-->
    <CategoryComponent></CategoryComponent>
    <!--title-->
    <h1 class="my-4 text-center">蔬菜</h1>
    <main>
      <!-- 食材卡片 -->
      <div class="px-3">
        <div class="row d-flex px-5 justify-content-evenly">
          <!--menu-->
          <MenuComponent></MenuComponent>
        </div>
      </div>
    </main>
  </div>
</template>
