<script>
//VUE3 CLI 默認導入模塊，所以不用加type="module"
import { Transition ,ref, computed } from 'vue';
export default {
  components: {
    Transition
  },
};
</script>

<template>
  <router-view v-slot="{ Component ,route}">
    <transition :name="route.meta.transition || fade" mode="out-in">
        <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
