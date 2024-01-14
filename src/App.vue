<script>
//VUE3 CLI 默認導入模塊，所以不用加type="module"
import BackendFunctions from './components/eric/BackendFunctions.vue';
export default {
  components: {
    BackendFunctions,
  },
};
</script>

<template>
  <div class="container">
    <navbarComponent />
    <router-view></router-view>
    <BackendFunctions></BackendFunctions>
      <!-- <router-link to="/2">go</router-link>
      <router-view></router-view> -->
  </div>
</template>

<style scoped lang="scss"></style>
