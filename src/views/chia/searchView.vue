<script>
import searchOrder from "../../components/chia/searchOrder.vue";
import searchSeat from "../../components/chia/searchSeat.vue";
export default {
	data() {
		return {
			userInput: {
				phone: '',
				mail: '',
			},
			orderNumber: '',
			radioToggle: 'bookingfrom',
			getResponse: [],
		}
	},
	methods: {
		startSearch() {
			if (this.ctlOrderBtn) return;
			this.$axios.get(`${this.axiosGetUrl}`)
				.then((response) => {
					if (response.status !== 200 || response.data.length === 0) {
						alert('查無訂位');
					} else {
						this.getResponse = response.data;
					}
				})
		}
	},
	computed: {
		ctlOrderBtn() {
			return (this.radioToggle === 'bookingfrom') ?
				(this.userInput.phone.trim() === '' || this.userInput.mail.trim() === '') ? true : false :
				(this.orderNumber.trim() === '') ? true : false;
		},
		axiosGetUrl() {
			return (this.radioToggle === "bookingfrom") ?
				`/${this.radioToggle}?phone=${this.userInput.phone}&mail=${this.userInput.mail}` :
				`/${this.radioToggle}?orderid=${this.orderNumber}`;

		},
		showOrder() {
			return (this.radioToggle === 'orders' &&
				this.getResponse.length !== 0) ? true : false;
		},
		showSeat() {
			return (this.userInput.phone.trim() !== '' &&
				this.userInput.mail.trim() !== '' &&
				this.radioToggle === 'bookingfrom' &&
				this.getResponse.length !== 0) ? true : false;
		}
	},
	components: {
		searchOrder,
		searchSeat
	},
	watch: {
		radioToggle(newValue, oldValue) {
			if (newValue === 'orders') {
				this.userInput.phone = '';
				this.userInput.mail = '';
			} else {
				this.orderNumber = '';
			}
			this.getResponse = [];
		},
	}
}
</script>
<template>
	<div class="search container">
		<div class="searchContent col-lg-10 col-sm-12 mx-auto">
			<h2 class="text-center fw-bolder fs-1 text-white py-5">訂位/訂單查詢</h2>
			<div class="radioContent m-auto mb-3 d-flex align-items-center">
				<div class="form-check mb-0 me-3">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="bookingfrom"
						v-model="radioToggle">
					<label class="form-check-label fs-5" for="exampleRadios2">
						訂位
					</label>
				</div>
				<div class="form-check mb-0 me-3">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="orders"
						v-model="radioToggle">
					<label class="form-check-label fs-5" for="exampleRadios1">
						訂單
					</label>
				</div>

			</div>
			<div class="d-flex flex-column m-auto mb-5">
				<div class="mb-3 col-lg-4 col-md-6 col-sm-12 fs-4" v-if="radioToggle === 'bookingfrom'">
					<div class="mb-3 fs-4">
						<label for="mumuyuanPhone" class="form-label fw-bolder mb-1">手機</label>
						<input type="email" class="form-control" id="mumuyuanPhone" placeholder="請輸入手機" v-model="userInput.phone">
					</div>
					<div class="mb-4 fs-4">
						<label for="mumuyuanMail" class="form-label fw-bolder mb-1">信箱</label>
						<input type="text" class="form-control" id="mumuyuanMail" placeholder="請輸入信箱" v-model="userInput.mail">
					</div>
				</div>
				<div class="mb-3 col-lg-4 col-md-6 col-sm-12 fs-4" v-else>
					<label for="mumuyuanPhone" class="form-label fw-bolder mb-1">訂單編號</label>
					<input type="email" class="form-control mb-3" id="mumuyuanPhone" placeholder="請輸入訂單編號" v-model="orderNumber">
				</div>
				<button type="button" class="btn btn-dark col-lg-4 col-md-6 col-sm-12 fs-4" :disabled="ctlOrderBtn" @click="startSearch">查詢</button>
			</div>
			<div class="min-heigth">
				<searchOrder v-if="showOrder" :getResponse="getResponse" />
				<searchSeat v-if="showSeat" :getResponse="getResponse" />
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.search {
	cursor: default;

	.searchContent {
		background: #d8d0ae;

		#exampleRadios1,
		#exampleRadios2 {
			width: 20px;
			height: 20px;
		}

		.min-heigth {
			min-height: 300px;
		}
	}
}
</style>
