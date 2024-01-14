<script>
</script>
<template>
    <div class="row login">
        <div class="col-8 imgContent"></div>
        <div class="col-4 signinContent d-flex">
            <div class="m-auto w-75">
                <div class="mb-3">
                    <label for="mumuyuanPhone" class="form-label fw-bolder fs-5">帳號</label>
                    <input type="email" class="form-control" id="mumuyuanPhone" aria-describedby="emailHelp"
                        placeholder="user phone">
                </div>
                <div class="mb-5">
                    <label for="mumuyuanPassword" class="form-label fw-bolder fs-5">密碼</label>
                    <input type="password" class="form-control" id="mumuyuanPassword" placeholder="user password">
                    <p class="fotgetPassword text-end pt-1 fs-6">忘記密碼?</p>
                </div>
                <button type="type" class="btn btn-primary d-block mx-auto w-100 pt-2 mb-3">登入</button>
                <p class="text-center fs-6">還沒加入會員嗎?<span class="mx-2 signin">註冊</span></p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login {
    .signinContent {
        height: 100vh;
        background: #918a8a;

        .fotgetPassword {
            color: #f00000
        }

        .signin {
            color: #0a0ae4
        }
    }
}
</style>