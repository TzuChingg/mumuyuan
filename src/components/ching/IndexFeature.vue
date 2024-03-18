<template>
	<div class="row">
		<div class="col-sm-12">
			<div class="mt-5 mb-5 d-flex justify-content-center">
				<img src="/首頁圖片/title-illustration-left-brown.png" alt="icon-left" />
				<h2 class="text-primary text-center ms-3 me-3 my-auto">木木苑特色</h2>
				<img src="/首頁圖片/title-illustration-right-brown.png" alt="icon-right" />
			</div>
		</div>
	</div>
	<div class="container bg-secondary py-3">
		<div class="d-flex justify-content-center flex-wrap">
			<div class="col-md-4 col-sm-6 col-12 feature position-relative">
				<img class="w-100" src="/首頁圖片/feature1.png" alt="直火燒烤不油炸" />
				<div class="featureContent position-absolute">
					<p class="featureNum text-center text-light">01</p>
					<p class="featureText text-light">直火燒烤不油炸</p>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-12 feature position-relative">
				<img class="w-100" src="/首頁圖片/feature2.png" alt="富含膠原蛋白的秘密醬汁" />
				<div class="featureContent position-absolute">
					<p class="featureNum text-center text-light">02</p>
					<p class="featureText text-light">富含膠原蛋白的秘密醬汁</p>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-12 feature position-relative">
				<img class="w-100" src="/首頁圖片/feature3.png" alt="餐點種類多樣化" />
				<div class="featureContent position-absolute">
					<p class="featureNum text-center text-light">03</p>
					<p class="featureText text-light">餐點種類多樣化</p>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-12 feature position-relative">
				<img class="w-100" src="/首頁圖片/feature4.png" alt="乾淨明亮的空間" />
				<div class="featureContent position-absolute">
					<p class="featureNum text-center text-light">04</p>
					<p class="featureText text-light">乾淨明亮的空間</p>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-12 feature position-relative">
				<img class="w-100" src="/首頁圖片/feature5.png" alt="優惠的價格 餐廳的享受" />
				<div class="featureContent position-absolute">
					<p class="featureNum text-center text-light">05</p>
					<p class="featureText text-light">優惠的價格 餐廳的享受</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.feature {
	padding: 10px;
	border-radius: 20px;
	overflow: hidden;

	&:hover::after {
		height: 100%;
	}

	&:hover p {
		color: #ffaf73 !important;
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 100%;
		height: 0px;
		transition: 0.3s;
		opacity: 0.3;
		background-color: #8da9cfb3;
	}

	.featureContent {
		text-align: center;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-style: italic;

		.featureNum {
			font-size: 3rem;
			margin-bottom: 0;
		}

		.featureText {
			padding: 0 1rem;
			font-size: 1.6rem;
			letter-spacing: 5px;
		}
	}
}
</style>
