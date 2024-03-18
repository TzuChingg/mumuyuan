<template>
  <div class="membercenter container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-12">
        <div class="row">
          <div class="col-md-3 col-sm-12 border-rwd">
            <MemberLink />
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="memberview-height">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MemberLink from "@/components/chia/MemberLink.vue";
export default {
  components: {
    MemberLink
  }
}
</script>
<style lang="scss" scoped>
.memberview-height {
  min-height: calc(100vh - 174px);
}

.border-rwd {
  border-right: 1px solid #dee2e6;
}

@media (max-width:768px) {
  .border-rwd {
    border: none;
    margin-bottom: 25px;
  }
}
</style>
