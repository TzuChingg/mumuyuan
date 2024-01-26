<script>
import menuStore from '../../stores/menu.js'
import { mapState, mapActions } from 'pinia'

export default {
  methods: { ...mapActions(menuStore, ['getData']) },
  computed: { ...mapState(menuStore, ['sortProducts']) }
}
</script>

<template>
  <!--test-->
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/menu/a" class="list-group-item list-group-item-action"
          >category 1</router-link
        >
        <router-link to="/menu/b" class="list-group-item list-group-item-action"
          >category 2</router-link
        >
      </div>
    </div>
    <div class="col-8"><router-view></router-view></div>
  </div>
  <!--test-->
  <!--test-->
  <router-link to="#combo" class="list-group-item list-group-item-action">combo</router-link>
  <router-view></router-view>
  <!--test-->
  <div class="row row-cols-3 mb-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card aligh-middle">
        <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
        <div class="card-body">
          <h6>
            {{ product.productName }} <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <p class="card-text my-3">{{ product.description }}</p>
          <div class="d-flex my-2">
            <select class="form-select" aria-label="Default select example">
              <option selected>選擇口味</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>選擇辣度</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="text-end d-flex justify-content-between">
            <ul class="pagination m-0">
              <li class="page-item m-0">
                <button class="page-link m-0" href="#" aria-label="Previous">
                  <span aria-hidden="true" class="m-0">-</span>
                </button>
              </li>
              <li class="page-item m-0"><a class="page-link m-0" href="#">1</a></li>
              <li class="page-item m-0">
                <a class="page-link m-0" href="#" aria-label="Next">
                  <span aria-hidden="true">+</span>
                </a>
              </li>
            </ul>
            <a href="#" class="btn btn-outline-primary" @click="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-text {
  height: 75px;
}
</style>
