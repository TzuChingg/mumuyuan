<template>
    <div class="btn-group d-flex align-items-center align-self-center" role="group">
        <router-link class="btn btn-outline-primary" :to="{name: category, hash: '#'+category}" v-for="(category, index) in storeCategorires" :key="index" >
            {{category}}
        </router-link>
    </div>
    <!-- position-absolute top-50 start-50 translate-middle -->
</template>

<script>
import  productsStore from "@/stores/productsStore.js";
import { mapState } from 'pinia';
export default {
    computed:{
        ...mapState(productsStore, ['storeCategorires'])
    },
}
</script>

<style lang="scss" scoped>
.btn-outline-primary:hover{
    color:#F1EEE9;
}
</style>

