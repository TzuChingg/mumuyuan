<template>
	<div class="d-flex align-items-center align-self-center flex-column flex-sm-row">
		<div class="btn-group" role="group">
			<router-link class="btn btn-outline-primary" :to="{ name: category, hash: '#' + category }"
				v-for="(category, index) in storeCategorires" :key="index">
				{{ category }}
			</router-link>
		</div>
		<div>
			<router-link to="/cartPage" class="text-decoration-none position-relative end-0 align-self-end">
				<button
					class="btn btn-outline-primary border-0 justify-content-center d-flex align-items-center shopcart-button">
					<i class="bi bi-cart fs-3 me-2">
						<span class="position-absolute fs-5">{{ cartNum }}</span>
					</i>
					<div class="fs-3">&nbsp;&nbsp;${{ cartsList.totalAmount }}</div>
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>
import productsStore from "@/stores/productsStore.js";
import cartStore from "@/stores/cartStore.js";
import { mapState } from 'pinia';
export default {
	computed: {
		...mapState(productsStore, ['storeCategorires']),
		...mapState(cartStore, ['cartNum', 'cartsList'])
	},
}
</script>

<style lang="scss" scoped>
.btn-outline-primary:hover {
	color: #F1EEE9;
}

.shopcart-button:hover {
	background-color: transparent;
}

input[type="number"] {
	cursor: default;
}
</style>
