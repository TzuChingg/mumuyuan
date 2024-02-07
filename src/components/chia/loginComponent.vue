<template>
    <div class="mb-3">
        <label for="mumuyuanMail" class="form-label fw-bolder fs-5">信箱</label>
        <input type="email" class="form-control" id="mumuyuanMail" placeholder="user mail" v-model="userInput.email">
    </div>
    <div class="mb-4">
        <label for="mumuyuanPassword" class="form-label fw-bolder fs-5">密碼</label>
        <input type="password" class="form-control" id="mumuyuanPassword" placeholder="user password"
            v-model="userInput.password">
        <div class="text-end pt-1">
            <router-link to="/login/forget" class="fotgetPassword fs-6 text-decoration-none">忘記密碼?</router-link>
        </div>
    </div>
    <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="userlogin">登入</button>
    <div class="text-center">
        <span class="text-center fs-6">還沒加入會員嗎?</span>
        <router-link to="/login/signin" class="signin mx-2 text-decoration-none">註冊</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInput: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        userlogin() {
            this.$axios.post('/signin', {
                ...this.userInput
            }).then((response) => {
                if (response.statusText === "OK") {
                    const { user, accessToken } = response.data;
                    document.cookie = `token=${accessToken};expires=${new Date().getTime() + 24 * 60 * 60 * 1000};`;
                    document.cookie = `identity=${user.identity};expires=${new Date().getTime() + 24 * 60 * 60 * 1000};`;
                    document.cookie = `id=${user.id};expires=${new Date().getTime() + 24 * 60 * 60 * 1000};`;
                    this.$router.push({ path: '/' });
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.fotgetPassword {
    color: #f00000;
    cursor: pointer;
}

.signin {
    color: #0a0ae4;
    cursor: pointer;
}
</style>
