<template>
	<div class="container-fuild bg-secondary overflow-hidden">
		<div>
			<div class="pt-5 mb-5 d-flex justify-content-center">
				<img src="/首頁圖片/title-illustration-left-brown.png" alt="icon-left" />
				<h2 class="text-primary text-center ms-3 me-3 my-auto">最新消息</h2>
				<img src="/首頁圖片/title-illustration-right-brown.png" alt="icon-right" />
			</div>
		</div>
		<div class="row justify-content-center position-relative ">
			<div class="col-12 pb-5">
				<Swiper :slidesPerView="1" :autoHeight="true" :breakpoints="{
					1420: { slidesPerView: 4 },
					968: { slidesPerView: 3 },
					768: { slidesPerView: 2 },
					320: { slidesPerView: 1 },
				}" :autoplay="{
					delay: 3000,
					disableOnInteraction: false,
				}" :modules="modules" class="mySwiper">
					<SwiperSlide v-for="(page, index) in temp" :key="index">
						<router-link :to="'/news/' + page.id" class="text-decoration-none d-block h-100">
							<div class="card mx-auto" style="width: 85%;">
								<img :src="page.newsImage.includes('首頁圖片') ? page.newsImage : `./木木苑食材修圖/${page.newsImage}.jpg`"
									class="card-img-top" alt="最新消息" />
								<div class="card-body">
									<p class="card-text text-primary fw-bolder fs-4">{{ page.newsTitle }}</p>
									<p class="card-text fs-5 truncate">{{ page.newsContent }}</p>
								</div>
							</div>
						</router-link>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<script>
import windowStore from '@/stores/windowStore.js'
import { mapActions, mapState } from 'pinia'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default {
	data() {
		return {
			news: [],
			newsPage: 1,
			temp: [],
			loader: null,
			modules: [Autoplay],
		}
	},
	created() {
		if (this.newsLoader) {
			this.loader = this.$loading.show()
		}
	},
	mounted() {
		this.getNews()
	},
	computed: {
		...mapState(windowStore, ['storeNews', 'newsLoader'])
	},
	watch: {
		storeNews() {
			this.news = this.storeNews
			this.newsCarousel()
			if (this.newsLoader === false) {
				setTimeout(() => {
					this.loader.hide()
				}, 2000);
			}
		},
	},
	components: {
		Swiper,
		SwiperSlide
	},
	methods: {
		...mapActions(windowStore, ['getNews']),
		newsCarousel() {
			const newsCopy = JSON.parse(JSON.stringify(this.news));
			this.temp = newsCopy;
		}
	},
}
</script>

<style lang="scss" scoped>
.latestNewsCOl {
	.card-text {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}
}

.truncate {
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
}
</style>
