<template>
	<div class="container-fluid p-0 position-relative overflow-hidden">
		<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false"
			data-bs-wrap="true" data-bs-keyboard="false">
			<!-- 控制項
			<div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div> -->
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="d-flex">
						<div class="w-50 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-1.png" class="w-100" alt="食物照片1" />
						</div>
						<div class="w-50 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-2.png" class="w-100" alt="食物照片2" />
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="d-flex">
						<div class="w-50 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-3.png" class="d-block w-100" alt="食物照片3" />
						</div>
						<div class="w-50 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-4.png" class="d-block w-100" alt="食物照片4" />
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="d-flex">
						<div class="w-50 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-5.png" class="d-block w-100" alt="食物照片5" />
						</div>
						<div class="w-50 overflow-hidden img-scale">
							<img src="/首頁圖片/hero-desktop-6.png" class="d-block w-100" alt="食物照片6" />
						</div>
					</div>
				</div>
			</div>
			<div class="slogan sRight position-absolute pe-none">
				<p class="fs-1 text-light">
					獨&nbsp;&nbsp;家&nbsp;&nbsp;醬&nbsp;&nbsp;料&nbsp;&nbsp;，&nbsp;&nbsp;特&nbsp;&nbsp;製&nbsp;&nbsp;秘&nbsp;&nbsp;粉
				</p>
				<p class="fs-1 text-light">
					無&nbsp;&nbsp;煙&nbsp;&nbsp;純&nbsp;&nbsp;烤&nbsp;&nbsp;，&nbsp;&nbsp;絕&nbsp;&nbsp;不&nbsp;&nbsp;油&nbsp;&nbsp;炸
				</p>
			</div>
			<div class="slogan sLeft position-absolute pe-none">
				<p class="fs-1 text-light">
					一&nbsp;&nbsp;手&nbsp;&nbsp;一&nbsp;&nbsp;串&nbsp;&nbsp;，&nbsp;&nbsp;如&nbsp;&nbsp;苑&nbsp;&nbsp;以&nbsp;&nbsp;嚐
				</p>
				<p class="fs-1 text-light">
					平&nbsp;&nbsp;價&nbsp;&nbsp;美&nbsp;&nbsp;食&nbsp;&nbsp;，&nbsp;&nbsp;種&nbsp;&nbsp;類&nbsp;&nbsp;多&nbsp;&nbsp;樣
				</p>
			</div>
			<div class="sloganButton position-absolute start-50 translate-middle">
				<button type="button" class="btn btn-dark bg-light bg-opacity-75 fs-2">
					<router-link to="/onlineOrder" class=" text-black   text-decoration-none"><strong>立即點餐</strong></router-link>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default {
	data() {
		return {
			// modules: [Autoplay, Pagination, Navigation],
			// 這邊是給 SwiperSlide 的 slidesPerView 判斷用的
			windowInnerWidth: window.innerWidth,
		}
	},
	components:{
		// Swiper,
		// SwiperSlide
	},
	computed:{
		width:() =>{
			console.log(window.innerWidth);
		}
	}
	
	
	

}
</script>

<style lang="scss" scoped>
.img-scale {
	img{
		transition: 1s;
	}
	&:hover img {
		transform: scale(1.2);
	}
}

.slogan {
	p {
		margin: 0%;
		padding: 0%;
	}

	writing-mode: vertical-lr;
	top: 17%;
	right: 22%;

	&.sRight {
		right: 22%;
	}

	&.sLeft {
		left: 22%;
	}
}


.sloganButton {
	top: 70%;
}
</style>
