<template>
    <footer v-if="showNav" class="footer d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-light">
      <p class="col-md-4 ms-5 text-muted my-auto">© 2023 Company, Inc</p>
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#/" class="nav-link px-2 text-muted">木木苑</a></li>
        <li class="nav-item"><a href="#/reserve" class="nav-link px-2 text-muted">線上訂位</a></li>
        <li class="nav-item"><a href="#/search" class="nav-link px-2 text-muted">訂單/訂位查詢</a></li>
        <li class="nav-item"><a href="#/" class="nav-link px-2 text-muted">常見問題</a></li>
      </ul>
    </footer>
</template>

<script>
import { docCookies } from '../../assets/cookie';
export default {
  data() {
    return {
      identity: 'user',
      showNav: true,
    }
  },
  computed: {
    currentRoute() {
      return this.$route;
    }
  },
  watch: {
    currentRoute(newRoute, oldRoute) {
      this.showNav = ((docCookies.getItem("identity") === "admin") &&
        (newRoute.fullPath === '/order' ||
          newRoute.fullPath === '/memberMange' ||
          newRoute.fullPath === '/sales' ||
          newRoute.fullPath === '/product' ||
          newRoute.fullPath === '/booking' ||
          newRoute.fullPath === '/discount' ||
          newRoute.fullPath === '/journey')) ? false : true;
    },
  }
}
</script>

<style>

</style>