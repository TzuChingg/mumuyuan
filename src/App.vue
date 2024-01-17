<script>
//VUE3 CLI 默認導入模塊，所以不用加type="module"
export default {
  data() {
    return {
      identity: 'user'
    }
  },
  components: {

  },
};
</script>

<template>
  <div class="container">
    <navbarComponent v-if="identity === 'user'" />
  </div>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
