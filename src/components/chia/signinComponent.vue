<script>
export default {
    data() {
        return {
            userInfo: {
                email: '',
                password: '',
                copyPassword: "",
                name: "",
                phone: "",
                identity: "",
                couponId: [],
                point: 0,
            },
            dbCheckPassword: false,
            noUsed: false
        }
    },
    computed: {
        isSome() {
            return this.userInfo.password === this.userInfo.copyPassword;
        }
    },
    methods: {
        startSignin() {
            this.$http.get(`http://localhost:3000/users?email=${this.userInfo.email}`)
                .then((response) => {
                    (response.data.length) ? alert('已被註冊') : this.noUsed = !this.noUsed;
                })
        },
        finishSignin() {
            if (!this.isSome) return;
            this.$http.post('http://localhost:3000/users', {
                ...this.userInfo
            }).then((response) => {
                alert('成功註冊');
                this.$router.push({ path: '/' });
                console.log('successSignin');
            })
        }
    }
}
</script>
<template>
    <div v-if="!noUsed">
        <div class="mb-4">
            <label for="mumuyuanMail" class="form-label fw-bolder fs-5">信箱</label>
            <input type="email" class="form-control" id="mumuyuanMail" v-model="userInfo.email" placeholder="user mail">
        </div>
        <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="startSignin">註冊</button>
        <router-link to="/login" class="btn btn-light d-block mx-auto w-100 pt-2 mb-3">返回</router-link>
    </div>
    <div v-else>
        <div class="mb-2">
            <label for="mumuyuanPassword" class="form-label fw-bolder fs-5">密碼</label>
            <input type="email" class="form-control" id="mumuyuanPassword" placeholder="user password"
                v-model="userInfo.password">
        </div>
        <div class="mb-2">
            <label for="doubleCheck" class="form-label fw-bolder fs-5">密碼確認</label>
            <input type="email" class="form-control" id="doubleCheck" placeholder="double check"
                v-model="userInfo.copyPassword">
        </div>
        <div class="mb-2">
            <label for="mumuyuanName" class="form-label fw-bolder fs-5">姓名</label>
            <input type="email" class="form-control" id="mumuyuanName" placeholder="user name" v-model="userInfo.name">
        </div>
        <div class="mb-5">
            <label for="mumuyuanPhone" class="form-label fw-bolder fs-5">手機</label>
            <input type="email" class="form-control" id="mumuyuanPhone" placeholder="user phone" v-model="userInfo.phone">
        </div>
        <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="finishSignin">完成註冊</button>
        <router-link to="/login" class="btn btn-light d-block mx-auto w-100 pt-2 mb-3">取消</router-link>
    </div>
</template>
<style lang="scss" scoped></style>
