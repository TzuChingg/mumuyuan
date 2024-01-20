<script>
import { mapState } from 'pinia'
import categoryStore from '../../stores/category.js'
</script>

<template>
  <nav class="nav d-flex justify-content-evenly">
    <div class="btn-group me-5">
      <a href="#" class="btn btn-outline-primary" aria-current="page">最新消息</a>
      <a href="#" class="btn btn-outline-primary">肉品</a>
      <a href="#" class="btn btn-outline-primary active">蔬菜</a>
    </div>
    <a href="#">
      <router-link to="/cart">購物車</router-link>
      <!--<span class="badge text-bg-danger">0</span>-->
    </a>
  </nav>
</template>

<style lang="scss"></style>
