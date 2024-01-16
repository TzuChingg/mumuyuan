<script>
export default {
    data() {
        return {
            useGetPassword: ''
        }
    },
    methods: {
        forgetPassword() {
            console.log('go');
            this.$http.get(`http://localhost:3000?email=${this.useGetPassword}`)
                .then((response) => {
                    console.log(response)
                    this.$router.push({ path: '/' });
                    console.log('end');
                })
        }
    }
}
</script>
<template>
    <div class="mb-4">
        <label for="mumuyuanPhone" class="form-label fw-bolder fs-5">帳號</label>
        <input type="email" class="form-control" id="mumuyuanPhone" placeholder="user phone" v-model="useGetPassword">
    </div>
    <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="forgetPassword">找回</button>
    <div class="text-center">
        <span class="text-center fs-6">已經有會員了?</span>
        <router-link to="/login" class="signin mx-2 text-decoration-none">登入</router-link>
    </div>
</template>
<style scoped lang="scss">
.signin {
    color: #0a0ae4;
    cursor: pointer;
}
</style>