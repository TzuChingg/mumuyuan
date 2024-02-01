<script>
import categoryStore from '../../stores/category.js'
import { mapState, mapActions } from 'pinia'
export default {
  methods: { ...mapActions(categoryStore, ['loadData', 'getData']) },
  computed: {
    ...mapState(categoryStore, ['getCategory'])
  }
}
</script>

<template>
  <div></div>
  <div>
    <nav class="navbar d-flex justify-content-center">
      <div class="btn-group">
        <!--<router-link
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
      <div href="#" class="d-flex justify-content-end align-items-center ms-5">
        <router-link to="/cart">cart</router-link>
        <!--<span class="badge text-bg-danger">0</span>-->
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 625px) {
  .btn-group {
    flex-direction: column;
  }
}
</style>
