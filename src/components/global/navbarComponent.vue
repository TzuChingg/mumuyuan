<template>
    <ul class="nav justify-content-end py-3">
        <li class="nav-item">
            <router-link to="/" class="nav-link border border-secondary rounded-3 fw-bolder">回首頁</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/" class="nav-link border border-secondary rounded-3 fw-bolder">未定義</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/2" class="nav-link border border-secondary rounded-3 fw-bolder">/2</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/login" class="nav-link border border-secondary rounded-3 fw-bolder">登入</router-link>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
ul.nav {
    .nav-item {
        margin: 0 0.6rem;

        &:last-child {
            margin: 0;
        }
    }
}
</style>