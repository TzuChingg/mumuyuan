<script>
//VUE3 CLI 默認導入模塊，所以不用加type="module"
import { Transition } from 'vue'
export default {
  data() {
    return {
      identity: 'user',
      shopStatus: true,
    }
  },
  components: {
    Transition
  },
}
</script>

<template>
  <div v-if="shopStatus == true">
    <div class="indexheigth d-flex flex-column">
      <navbarComponent v-if="identity === 'user'" />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <footerComponent v-if="identity === 'user'" />
    </div>
  </div>
  <div v-else-if="shopStatus == false">
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
  background: #d8d0ae;
}

img {
  height: 100vh;
  width: 100%;
  background-position: center center;
  background-size: cover;
}

img {
  height: 100vh;
  width: 100%;
  background-position: center center;
  background-size: cover;
}
</style>
