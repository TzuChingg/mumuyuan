<script>
//VUE3 CLI 默認導入模塊，所以不用加type="module"
import { Transition } from 'vue'
export default {
  data() {
    return {
      identity: 'user'
    }
  },
  components: {
    Transition
  }
}
</script>

<template>
  <div>
    <!-- <navbarComponent v-if="identity === 'user'" /> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <!-- <footerComponent v-if="identity === 'user'" /> -->
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
</style>
