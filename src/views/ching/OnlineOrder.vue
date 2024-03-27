<template>
  <div class="container mb-5">
    <div class="categoryNav position-fixed w-100 start-0" style="z-index: 999;">
      <div class="d-flex flex-md-column justify-content-center align-items-center py-3 mx-auto">
        <CategoryComponent></CategoryComponent>
      </div>
    </div>
    <div style="padding-top: 90px;">
      <div class="row g-4 mt-2" v-for="(productList, index) in storeProducts" :key="index" :id="'#' + productList[0]">
        <h2 class="text-dark fw-bolder">{{ productList[0] }}</h2>
        <hr class="m-0" />
        <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(product, index) in productList[1]" :key="index">
          <div class="card mx-auto">
            <img :src="'/木木苑食材修圖/' + product.image" class="card-img-top" :alt="product.productName" />
            <div class="card-body" style="height: 8rem;">
              <div class="title d-flex justify-content-between">
                <h5 class="card-title">{{ product.productName }}</h5>
                <span class="text-end">NT {{ product.price }}</span>
              </div>
              <p class="card-text fs-6">{{ product.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-around border-0 bg-white p-3">
              <div class="col-6">
                <div class="input-group">
                  <input type="button" class="cal btn btn-outline-dark" value="-" @click="decreaseBtn(product.id)" />
                  <input type="number" :id="product.id" name="quantity" :ref="`${product.id}`"
                    class="form-control input-number border-primary text-center p-0" value="1" min="1" max="100"
                    readonly="readonly" />
                  <input type="button" class="cal btn btn-outline-dark" value="+" @click="increaseBtn(product.id)" />
                </div>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <button type="button" class="btn btn-outline-dark"
                  @click="addToCart(product.id, this.$refs[product.id][0].value - 0); addCartToastFn(product);">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">
import { docCookies } from '@/assets/cookie'
import productsStore from '@/stores/productsStore.js'
import cartStore from '@/stores/cartStore.js'
import CategoryComponent from '@/components/ching/CategoryComponent.vue'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      cartToastList: [],
      loader: null
    }
  },
  created() {
    if (docCookies.getItem('identity') === 'baduser') {
      this.$swal.fire({
        icon: "warning",
        title: "警告!!!",
        text: "您目前處於黑名單，",
        footer: '如有疑問請詢問相關人員，謝謝。'
      }).then(() => {
        this.$router.push('/')
      });
      return
    }
    if (this.storeLoader) {
      this.loader = this.$loading.show()
    }
  },
  mounted() {
    this.getProducts()
  },
  computed: {
    ...mapState(productsStore, ['storeProducts', 'storeLoader']),
    ...mapState(cartStore, ['cartNum', 'cartsList']),
  },
  watch: {
    storeLoader(newState) {
      if (newState === false) {
        setTimeout(() => {
          this.loader.hide()
        }, 2000);
      }
    }
  },
  methods: {
    ...mapActions(productsStore, ['getProducts', 'changeLoading']),
    ...mapActions(cartStore, ['addToCart']),
    increaseBtn(id) {
      const quantity = document.getElementById(id)
      if (quantity.value >= 1 && quantity.value < 100) {
        quantity.value++
      } else if (quantity.value > 100) {
        quantity.value = 100
      } else if (quantity.value < 1) {
        quantity.value = 1
      }
    },
    decreaseBtn(id) {
      const quantity = document.getElementById(id)
      if (quantity.value > 1 && quantity.value <= 100) {
        quantity.value--
      } else if (quantity.value > 100) {
        quantity.value = 100
      } else if (quantity.value < 1) {
        quantity.value = 1
      }
    },
    addCartToastFn(product) {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1000,
        width: '300px',
        padding: '0',
        html: `
				<div class="mb-2 w-100 py-1 h-100">
					<div class="row g-0">
						<div class="col-4">
							<img src="/木木苑食材修圖small/${product.image}" class="w-100" alt="商品圖示">
						</div>
						<div class="col-8">
							<div class="card-body px-2">
								<h5 class="card-title fw-bolder text-dark mb-1">${product.productName}</h5>
								<p class="card-text">數量 : ${document.getElementById(product.id).value}</p>
								<p class="card-text"><small class="text-muted">已加入購物車</small></p>
							</div>
						</div>
					</div>
				</div>
				`
      });
    }
  },
  components: {
    CategoryComponent,
  }
}
</script>

<style lang="scss" scoped>
input[type="number"] {
  cursor: default;
}

.categoryNav {
  background: #d8d0ae;
}
</style>
