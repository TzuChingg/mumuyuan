<script></script>

<template>
  <div class="row row-cols-3 mb-4 g-4">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card aligh-middle" v-if="product.isLook === true">
        <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
        <div class="card-body">
          <h6>
            {{ product.productName }} <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <p class="card-text my-3">{{ product.description }}</p>
          <div class="text-end">
            <button
              href="#"
              class="btn btn-outline-primary"
              @click.prevent="addToCart(product.id)"
            ></button>
            加入購物車
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-3 mb-4 g-4">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card aligh-middle" v-if="product.isLook === true">
        <img :src="product.image" :alt="product.productName" class="card-img-top text-center" />
        <div class="card-body">
          <h6>
            {{ product.productName }} <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <p class="card-text my-3">{{ product.description }}</p>
          <div class="text-end">
            <button
              href="#"
              class="btn btn-outline-primary"
              @click.prevent="addToCart(product.id)"
            ></button>
            加入購物車
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-text {
  height: 75px;
}
</style>
