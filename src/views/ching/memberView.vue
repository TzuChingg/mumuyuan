<template>
  <div class="membercenter container py-5">
    <div class="row justify-content-center">
      <div class="col-9">
        <div class="row">
          <div class="col-3 border-end">
            <MemberLink />
          </div>
          <div class="col-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MemberLink from "../../components/ching/memberLink.vue";
export default{
  components:{
    MemberLink
  }
}
</script>
<style lang="scss" scoped>
</style>
