<template>
	<div class="container-fluid p-0 position-relative overflow-hidden">
		<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel"
			data-bs-pause="false" data-bs-wrap="true" data-bs-keyboard="false">
			<div class="carousel-inner" v-if="width > 576">
				<div class="carousel-item active">
					<div class="row p-0">
						<div class="col-12 col-sm-6 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-1.png" class="w-100" alt="食物照片1" />
						</div>
						<div class="col-12 col-sm-6 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-2.png" class="w-100" alt="食物照片2" />
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="row p-0">
						<div class="col-12 col-sm-6 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-3.png" class="d-block w-100" alt="食物照片3" />
						</div>
						<div class="col-12 col-sm-6 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-4.png" class="d-block w-100" alt="食物照片4" />
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="row p-0">
						<div class="col-12 col-sm-6 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-5.png" class="d-block w-100" alt="食物照片5" />
						</div>
						<div class="col-12 col-sm-6 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-6.png" class="d-block w-100" alt="食物照片6" />
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-inner" v-else>
				<div class="carousel-item active">
					<div class="row p-0">
						<div class="col-12 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-mobile-1.png" class="w-100 object-fit-cover" style="height: 200px;" alt="食物照片1" />
						</div>
						<div class="col-12 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-mobile-2.png" class="w-100 object-fit-cover" style="height: 200px;" alt="食物照片2" />
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="row p-0">
						<div class="col-12 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-mobile-3.png" class="w-100 object-fit-cover" style="height: 200px;" alt="食物照片3" />
						</div>
						<div class="col-12 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-mobile-4.png" class="w-100 object-fit-cover" style="height: 200px;" alt="食物照片4" />
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="row p-0">
						<div class="col-12 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-mobile-5.png" class="w-100 object-fit-cover" style="height: 200px;" alt="食物照片5" />
						</div>
						<div class="col-12 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-mobile-6.png" class="w-100 object-fit-cover" style="height: 200px;" alt="食物照片6" />
						</div>
					</div>
				</div>
			</div>
			<div class="fontSize position-absolute w-100 h-100 top-0" style="z-index: 100;" v-if="width > 576">
				<div class="d-flex flex-sm-row flex-column justify-content-evenly align-items-center h-100">
					<div class="slogan pe-none d-flex">
						<div class="m-auto">
							<p class="text-light">一手一串，如苑以嚐</p>
							<p class="text-light">平價美食，種類多樣</p>
						</div>
					</div>
					<div class="slogan pe-none d-flex">
						<div class="m-auto">
							<p class="text-light">獨家醬料，特製秘粉</p>
							<p class="text-light">無煙純烤，絕不油炸</p>
						</div>
					</div>
				</div>
				<button type="button"
					class="slogan-btn btn btn-dark bg-light bg-opacity-75 position-absolute bottom-0 start-50">
					<router-link to="/onlineOrder" class="text-black text-decoration-none"><strong>立即點餐</strong></router-link>
				</button>
			</div>
			<div class="fontSize position-absolute w-100 h-100 top-0" style="z-index: 100;" v-else>
				<div class="d-flex flex-sm-row flex-column justify-content-evenly align-items-center h-100">
					<div class="slogan pe-none d-flex">
						<div class="m-auto">
							<p class="text-light">無煙純烤，絕不油炸</p>
							<p class="text-light">獨家醬料，特製秘粉</p>
						</div>
					</div>
					<div class="slogan pe-none d-flex">
						<div class="m-auto">
							<p class="text-light">平價美食，種類多樣</p>
							<p class="text-light">一手一串，如苑以嚐</p>
						</div>
					</div>
				</div>
				<button type="button"
					class="slogan-btn btn btn-dark bg-light bg-opacity-75 position-absolute bottom-0 start-50">
					<router-link to="/onlineOrder" class="text-black text-decoration-none"><strong>立即點餐</strong></router-link>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import windowStore from '@/stores/windowStore.js'

export default {
	mounted() {
		this.getWidth()
	},
	methods: {
		...mapActions(windowStore, ['getWidth'])
	},
	computed: {
		...mapState(windowStore, ['width'])
	}
}
</script>

<style lang="scss" scoped>
.img-scale {
	padding: 0;

	img {
		transition: 1s;
	}

	&:hover img {
		transform: scale(1.2);
	}
}

.slogan {
	writing-mode: vertical-lr;
	width: 50%;
}

.fontSize {
	font-size: 2.4rem;
	letter-spacing: 1.4rem;
}

.slogan-btn {
	font-size: 2.2rem;
	transform: translate(-50%, -200px);
}

@media screen and (max-width: 1400px) {
	.fontSize {
		font-size: 2rem;
		letter-spacing: 1rem;
	}

	.slogan-btn {
		font-size: 1.8rem;
		transform: translate(-50%, -100px);
	}
}

@media screen and (max-width: 992px) {
	.fontSize {
		font-size: 1.4rem;
		letter-spacing: 1rem;
	}

	.slogan-btn {
		font-size: 1.4rem;
		transform: translate(-50%, -80px);
	}
}

@media screen and (max-width: 768px) {
	.fontSize {
		font-size: 1rem;
		letter-spacing: 0.6rem;
	}

	.slogan-btn {
		font-size: 1.2rem;
		transform: translate(-50%, -100px);
	}
}

@media screen and (max-width: 575px) {
	.slogan {
		width: 75%;
		font-size: 1.2rem;
		writing-mode: inherit;
	}

	.slogan-btn {
		font-size: 0.8rem;
		transform: translate(-50%, -180px);
	}
}
</style>
