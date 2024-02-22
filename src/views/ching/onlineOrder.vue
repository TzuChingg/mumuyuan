<template>
    <div class="container mb-5">
        <div class="categoryNav row  position-sticky sticky-top">
            <div class="col-sm-12 position-relative d-flex justify-content-end">
                <categoryComponent></categoryComponent>
                <router-link to="/cartPage"><button class="btn btn-outline-primary justify-content-end border-0">
                        <i class="bi bi-cart fs-2 "><span class=" position-absolute fs-5">{{ cartNum }}</span></i></button>
                    <!-- position-relative -->
                </router-link>

            </div>
        </div>
        <div class="row g-4 mt-2" v-for="(productList, index) in storeProducts" :key="index" :id="'#' + productList[0]">
            <h2>{{ productList[0] }}</h2>
            <hr class="m-0" />
            <div class="col-md-3" v-for="(product, index) in productList[1]" :key="index">
                <div class="card" style="width: 18rem; height: 30rem">
                    <img :src="product.image" class="card-img-top" :alt="product.productName" />
                    <div class="card-body">
                        <div class="title d-flex justify-content-between">
                            <h5 class="card-title">{{ product.productName }}</h5>
                            <span class="text-end">NT {{ product.price }}</span>
                        </div>
                        <p class="card-text fs-6">{{ product.description }}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around border-0 bg-white">
                        <div class="col-6">
                            <div class="input-group">
                                <input type="button" class="cal btn btn-outline-dark" value="-"
                                    @click="decreaseBtn(product.id)">
                                <input type="number" :id="product.id" name="quantity"
                                    class="form-control input-number border-primary text-center p-0" value=1 min=1 max=100
                                    readonly="readonly">
                                <input type="button" class="cal btn btn-outline-dark" value="+"
                                    @click="increaseBtn(product.id)">
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-dark"
                                @click="addToCart(product.id,)">加入購物車</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="module">
import productsStore from '@/stores/productsStore.js'
import cartStore from '@/stores/cartStore.js'
import categoryComponent from '@/components/ching/categoryComponent.vue'
import { mapActions, mapState } from 'pinia'

export default {
    mounted() {
        this.getProducts()
    },
    computed: {
        ...mapState(productsStore, ['storeProducts']), //['秘捲', ['干貝牛肉捲', '番茄牛肉捲']]
        ...mapState(cartStore, ['cartNum'])
    },
    methods: {
        ...mapActions(productsStore, ['getProducts']),
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
        }
    },
    components: {
        categoryComponent
    }
}
</script>

<style lang="scss" scoped>
.categoryNav {
    background: #d8d0ae;

    .btn-outline-primary:hover {
        color: #f1eee9;
        background: #d8d0ae;
    }
}

.card-footer {
    span {
        cursor: default;
    }

    .cal:hover {
        color: #f1eee9;
    }
}
</style>
