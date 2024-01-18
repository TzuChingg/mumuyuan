<script>
export default {
    computed:{
        pageStatus(){
            return {
                '/login':'木木苑登入',
                '/login/signin':'木木苑註冊',
                '/login/forget':'密碼找回'
            }[this.$route.path];
        }
    }
}
</script>
<template>
    <div class="row login mx-0">
        <div class="col-8 imgContent">
        </div>
        <div class="col-4 signinContent d-flex">
            <div class="m-auto w-75">
                <h2 class="fw-bolder text-center py-2">{{ pageStatus }}</h2>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login {
    cursor: default;
    .signinContent {
        height: 100vh;
        background: #918a8a;
    }
}
</style>