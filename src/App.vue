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
  <p>路由測試</p>
  <router-link to="/a">a</router-link>
  <router-link to="/b">b</router-link>
  <router-view></router-view>
<BackendFunctions></BackendFunctions>
<!-- <router-link to="/2">go</router-link>
<router-view></router-view> -->
</template>

<style scoped>

</style>
