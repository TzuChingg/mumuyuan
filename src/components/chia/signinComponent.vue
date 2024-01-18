<script>
export default {
    data() {
        return {
            noUsed: false
        }
    },
    methods:{
        startSignin(){
            this.noUsed = !this.noUsed;
        },
        finishSignin(){
            this.$http.post('http://localhost:3000/users', {
                ...this.userInput
            }).then((response) => {
                console.log(response)
                // this.$router.push({ path: '/' });
                console.log('finishSignin');
            })
        }
    }
}
</script>
<template>
    <div v-if="!noUsed">
        <div class="mb-4">
            <label for="mumuyuanPhone" class="form-label fw-bolder fs-5">帳號</label>
            <input type="email" class="form-control" id="mumuyuanPhone" 
                placeholder="user phone">
        </div>
        <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="startSignin">註冊</button>
        <router-link to="/login" class="btn btn-light d-block mx-auto w-100 pt-2 mb-3">返回</router-link>
    </div>
    <div v-else>
        <div class="mb-2">
            <label for="mumuyuanPassword" class="form-label fw-bolder fs-5">密碼</label>
            <input type="email" class="form-control" id="mumuyuanPassword" 
                placeholder="user password">
        </div>
        <div class="mb-2">
            <label for="doubleCheck" class="form-label fw-bolder fs-5">密碼確認</label>
            <input type="email" class="form-control" id="doubleCheck" 
                placeholder="double check">
        </div>
        <div class="mb-2">
            <label for="mumuyuanName" class="form-label fw-bolder fs-5">姓名</label>
            <input type="email" class="form-control" id="mumuyuanName" 
                placeholder="user name">
        </div>
        <div class="mb-5">
            <label for="mumuyuanMail" class="form-label fw-bolder fs-5">信箱</label>
            <input type="email" class="form-control" id="mumuyuanMail" 
                placeholder="user mail">
        </div>
        <button type="type" class="btn btn-dark d-block mx-auto w-100 pt-2 mb-3" @click="finishSignin">完成註冊</button>
        <router-link to="/login" class="btn btn-light d-block mx-auto w-100 pt-2 mb-3">取消</router-link>
    </div>
</template>
<style lang="scss" scoped>

</style>
