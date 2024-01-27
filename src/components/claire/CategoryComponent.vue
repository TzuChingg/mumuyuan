<script>
import categoryStore from '../../stores/category.js'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(categoryStore, ['getCategory'])
  }
}
</script>

<template>
  <nav class="nav d-flex justify-content-evenly m-5 p-3">
    <div class="btn-group me-5">
      <router-link
        to="/menu/a"
        class="btn btn-outline-primary"
        v-for="item in getCategory"
        :key="item.id"
        >{{ item.title }}</router-link
      >
    </div>
    <div href="#" class="d-flex justify-content-center align-items-center">
      <router-link to="/cart">cart</router-link>
      <!--<span class="badge text-bg-danger">0</span>-->
    </div>
  </nav>
</template>

<style lang="scss"></style>
