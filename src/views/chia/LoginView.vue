<script>
import Parallax from 'parallax-js'
export default {
	data() {
		return {
			parallax: null
		}
	},
	computed: {
		pageStatus() {
			return {
				'/login': '木木苑登入',
				'/login/signin': '木木苑註冊',
				'/login/forget': '密碼找回'
			}[this.$route.path]
		}
	},
	mounted() {
		this.parallax = new Parallax(this.$refs.scene)
	}
}
</script>

<template>
	<div class="row login mx-0">
		<div class="signinContent overflow-hidden" ref="scene" data-friction-x="0.1" data-friction-y="0.1"
			data-scalar-x="25" data-scalar-y="15">
			<div class="w-100 h-100 position-absolute" data-depth="0.4">
				<img class="position-absolute" style="top:60%;left:30%" src="/首頁圖片/title-illustration-left-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.15">
				<img class="position-absolute" style="top:80%;left:80%" src="/首頁圖片/title-illustration-right-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.5">
				<img class="position-absolute" style="top:20%;left:20%" src="/首頁圖片/title-illustration-left-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.3">
				<img class="position-absolute" style="top:90%;left:10%" src="/首頁圖片/title-illustration-right-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.25">
				<img class="position-absolute" style="top:15%;left:75%" src="/首頁圖片/title-illustration-left-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.3">
				<img class="position-absolute" style="top:80%;left:50%" src="/首頁圖片/title-illustration-right-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.3">
				<img class="position-absolute" style="top:5%;left:95%" src="/首頁圖片/title-illustration-right-brown.png"
					alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.2">
				<img class="position-absolute" style="top:90%;left:90%" src="/首頁圖片/illustration-left.png" alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.2">
				<img class="position-absolute" style="top:60%;left:10%" src="/首頁圖片/illustration-left.png" alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.5">
				<img class="position-absolute" style="top:50%;left:70%" src="/首頁圖片/illustration-right.png" alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.3">
				<img class="position-absolute" style="top:10%;left:50%" src="/首頁圖片/illustration-left.png" alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.4">
				<img class="position-absolute" style="top:30%;left:90%" src="/首頁圖片/illustration-right.png" alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.2">
				<img class="position-absolute" style="top:10%;left:5%" src="/首頁圖片/illustration-left.png" alt="串燒icon" />
			</div>
			<div class="w-100 h-100 position-absolute" data-depth="0.1">
				<img class="position-absolute" style="top:30%;left:40%" src="/首頁圖片/illustration-right.png" alt="串燒icon" />
			</div>
		</div>
		<div class="position-absolute top-50 start-50 translate-middle col-md-6 px-3" style="max-width: 400px;">
			<h2 class="fw-bolder text-center py-2 text-primary mb-4" style="letter-spacing: 2px;">{{ pageStatus }}</h2>
			<router-view></router-view>
		</div>
	</div>
</template>

<style scoped lang="scss">
.login {
	cursor: default;

	.signinContent {
		min-height: calc(100vh - 314px);
		background: #d8d0ae;
	}
}
</style>
