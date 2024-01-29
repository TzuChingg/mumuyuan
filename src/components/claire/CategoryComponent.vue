<script>
import categoryStore from '../../stores/category.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      categories: []
    }
  },
  methods: { ...mapActions(categoryStore, ['loadData']) },
  computed: {
    ...mapState(categoryStore, ['getCategory'])
  }
}
</script>

<template>
  <nav class="nav d-flex justify-content-evenly m-5 p-3">
    <div class="btn-group me-5">
      <!-- <router-link
        to="/menu/combo"
        class="btn btn-outline-primary"
        v-for="item in getCategory"
        :key="item.id"
        >{{ item.title }}</router-link
      > -->
      <router-link to="/menu/combo" class="btn btn-outline-primary">{{
        getCategory[0].title
      }}</router-link>
      <router-link to="/menu/secret" class="btn btn-outline-primary">{{
        getCategory[1].title
      }}</router-link>
      <router-link to="/menu/meat" class="btn btn-outline-primary">{{
        getCategory[2].title
      }}</router-link>
      <router-link to="/menu/seafood" class="btn btn-outline-primary">{{
        getCategory[3].title
      }}</router-link>
      <router-link to="/menu/wine" class="btn btn-outline-primary">{{
        getCategory[4].title
      }}</router-link>
      <router-link to="/menu/vegetable" class="btn btn-outline-primary">{{
        getCategory[5].title
      }}</router-link>
      <router-link to="/menu/classic" class="btn btn-outline-primary">{{
        getCategory[6].title
      }}</router-link>
    </div>
    <div href="#" class="d-flex justify-content-center align-items-center">
      <router-link to="/cart">cart</router-link>
      <!--<span class="badge text-bg-danger">0</span>-->
    </div>
  </nav>
</template>

<style lang="scss"></style>
