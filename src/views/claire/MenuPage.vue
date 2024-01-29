<script>
import TitleComponent from '../../components/claire/TitleComponent.vue'
import CategoryComponent from '../../components/claire/CategoryComponent.vue'
import MenuComponent from '../../components/claire/MenuComponent.vue'
export default { components: { TitleComponent, CategoryComponent, MenuComponent } }
</script>

<template>
  <div class="wrapper">
    <!--title-->
    <TitleComponent></TitleComponent>
    <!--category-->
    <CategoryComponent></CategoryComponent>
    <!--title-->
    <h1 class="my-4 text-center"></h1>
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