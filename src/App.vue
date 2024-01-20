<script>
// test
import CategoryComponent from './components/claire/CategoryComponent.vue'
//VUE3 CLI 默認導入模塊，所以不用加type="module"
import { Transition } from 'vue'
export default {
  data() {
    return {
      identity: 'user'
    }
  },
  components: {
    Transition,
    CategoryComponent
  }
}
</script>

<template>
  <div class="indexheigth d-flex flex-column">
    <navbarComponent v-if="identity === 'user'" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <!-- menu -->
    <br />
    <router-link :to="{ name: '線上點餐' }">線上點餐頁面</router-link>
    <br />
    <footerComponent v-if="identity === 'user'" />
  </div>
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
.indexheigth {
  min-height: 100vh;
}
</style>
