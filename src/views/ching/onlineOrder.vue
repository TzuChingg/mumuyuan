<template >
	<div class="container mb-5">
		<div class="categoryNav row position-sticky sticky-top">
			<div class="col-sm-12 d-flex flex-xl-column justify-content-xl-center align-items-sm-center py-3">
				<categoryComponent></categoryComponent>
				<router-link to="/cartPage" class="text-decoration-none position-relative end-0 align-self-end">
					<button class="btn btn-outline-primary border-0 justify-content-center d-flex align-items-center">
						<i class="bi bi-cart fs-3 me-2"><span class="position-absolute fs-5">{{
							cartNum }}</span></i>
						<div class="fs-3">&nbsp;&nbsp;${{ cartsList.totalAmount }}</div>
					</button>
				</router-link>
			</div>
			<!-- <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-end w-100">
				<div class="toast-container position-absolute" ref="toast">
					<div :id="item.toastId" class="toast bottom-50 start-100 " role="alert" aria-live="assertive" aria-atomic="true"
						v-for="(item, index) in cartToastList" :key="index">
						<div class="toast-header">
							<strong class="me-auto">購物車</strong>
							<small>Just now</small>
							<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
						</div>
						<div class="toast-body" style="height: 4rem;">
							已經 <strong>{{ item.product }}</strong> 加入購物車
						</div>
					</div>
				</div>
			</div> -->
		</div>
		<div class="row g-4 mt-2 " v-for="(productList, index) in storeProducts" :key="index" :id="'#' + productList[0]">
			<h2 class="text-dark fw-bolder">{{ productList[0] }}</h2>
			<hr class="m-0" />
			<div class="col-sm-6 col-lg-4 col-xl-3" v-for="(product, index) in productList[1]" :key="index">
				<div class="card mx-auto">
					<img :src="product.image" class="card-img-top" :alt="product.productName" />
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
								<input type="number" :id="product.id" name="quantity"
									class="form-control input-number border-primary text-center p-0" value="1" min="1" max="100"
									readonly="readonly" />
								<input type="button" class="cal btn btn-outline-dark" value="+" @click="increaseBtn(product.id)" />
							</div>
						</div>
						<div class="col-6 d-flex justify-content-end">
							<button type="button" class="btn btn-outline-dark" @click="addToCart(product.id); addCartToastFn(product);">
								加入購物車
							</button>
							<!-- <button type="button" class="btn btn-outline-dark"
                                @click="addToCart(product.id); addCartToastFn(product.productName, product.productName);">
                                加入購物車
                            </button> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="module">
import { docCookies } from '../../assets/cookie'
import productsStore from '@/stores/productsStore.js'
import cartStore from '@/stores/cartStore.js'
import categoryComponent from '@/components/ching/categoryComponent.vue'
import { mapActions, mapState } from 'pinia'
// import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
		...mapState(productsStore, ['storeProducts', 'storeLoader']), //['秘捲', ['干貝牛肉捲', '番茄牛肉捲']]
		...mapState(cartStore, ['cartNum', 'cartsList'])
	},
	watch:{
		storeLoader(newState, oldState){
			if (newState === false){
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
			// const toastId = new Date().getTime()
			// this.cartToastList.push({ toastId, product })
			// // 等待渲染
			// setTimeout(() => {
			// 	const toastPath = document.getElementById(toastId) // 找toast
			// 	const toast = new Toast(toastPath)
			// 	toast.show() //顯示
			// }, 100);

			this.$swal({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timerProgressBar: true,
				timer: 1200,
				width: '20em',
				padding: '0',
				html: `
				<div class="mb-2 w-100 py-1">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="${product.image}" class="w-100" alt="image error">
						</div>
						<div class="col-md-8">
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
		categoryComponent,
	}
}
</script>

<style lang="scss" scoped>
input[type="number"] {
	cursor: default;
}

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

	.cal:hover,
	button:hover {
		color: #f1eee9;
	}
}
</style>
