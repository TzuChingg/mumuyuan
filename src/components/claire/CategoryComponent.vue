<script>
import categoryStore from '../../stores/category.js'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    // 展開 mapState 引入 productStore 的所有 getters 名稱
    ...mapState(categoryStore, ['getCategory'])
  }
}
</script>

<template>
  <nav class="nav d-flex justify-content-evenly m-5 p-3">
    <div class="btn-group me-5">
      <a href="#" class="btn btn-outline-primary" v-for="item in getCategory" :key="item.id">{{
        item.title
      }}</a>
    </div>
    <div href="#" class="d-flex justify-content-center align-items-center">
      <router-link to="/cart"
        >cart</router-link
      >
      <!--<span class="badge text-bg-danger">0</span>-->
    </div>
  </nav>
</template>

<style lang="scss"></style>
