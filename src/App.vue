<script>
// test
import CategoryComponent from './components/claire/CategoryComponent.vue'
//VUE3 CLI 默認導入模塊，所以不用加type="module"
import { Transition } from 'vue'
export default {
  components: {
    Transition,
    CategoryComponent
  }
}
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- menu -->
  <br />
  <router-link :to="{ name: '線上點餐' }">線上點餐頁面</router-link>
  <br />
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
