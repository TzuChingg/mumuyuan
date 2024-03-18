<template>
	<div class="container position-relative h-100">
		<div class="row justify-content-center position-absolute top-50 start-50 translate-middle">
			<div class="col-sm-7 mt-5 d-flex justify-content-center">
				<img src="/notFound.png" alt="找不到網頁">
			</div>
			<div class="col-sm-7">
				<h2 class="mt-5 mb-5 text-center">抱歉，這個頁面不存在。</h2>
			</div>
			<div class="col-sm-7 d-flex justify-content-center align-content-center">
				<button class="btn btn-lg btn-primary mb-5"><router-link to="/"
						class="text-light text-decoration-none">回首頁</router-link></button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	min-height: calc(100vh - 174px);

	img {
		height: 250px;
		object-fit: cover;
	}
}
</style>
