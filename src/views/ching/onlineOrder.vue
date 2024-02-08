<template>
    <div class="container my-4">
        <div class="row g-4">
            <div class="col" v-for="(product, index) in storeProducts" :key="index">
                <div class="card" style="width: 18rem;">
                    <img :src="product.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{product.productName}}</h5>
                        <p class="card-text">{{product.description
                        }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="module">
import  productsStore from "@/stores/productsStore.js";
import { mapActions, mapState } from 'pinia';

export default {
    mounted() {
        this.getProducts()
    },
    computed: {
        ...mapState(productsStore, ['storeProducts'])
    },
    methods: {
        ...mapActions(productsStore, ['getProducts']),
        
    },
}
</script>

<style></style>