<template>
  <div>
    <div class="bg-image bg-primary">
      <Index-slogan></Index-slogan>
      <Index-news></Index-news>
      <Index-rating></Index-rating>
    </div>
    <div class="container-fluid bg-secondary">
      <Index-feature></Index-feature>
    </div>
    <div class="container-fluid bg-primary" id="#FAQ" ref="FAQ">
      <Index-faq></Index-faq>
    </div>
    <div class="container-fluid bg-secondary pb-5">
      <Index-address></Index-address>
    </div>
  </div>
</template>
<script>
import IndexSlogan from '@/components/ching/IndexSlogan.vue'
import IndexNews from '@/components/ching/IndexNews.vue'
import IndexRating from '@/components/ching/IndexRating.vue'
import IndexFeature from '@/components/ching/IndexFeature.vue'
import IndexFaq from '@/components/ching/IndexFAQ.vue'
import IndexAddress from '@/components/ching/IndexAddress.vue'

export default {
  data() {
    return {
      news: [],
      loader: null
    }
  },
  mounted() {
    if (this.$route.hash === '#FAQ') {
      setTimeout(() => {
        this.scrollToSection()
      }, 500)
    }
  },
  methods: {
    scrollToSection() {
      this.$refs.FAQ.scrollIntoView({ block: "center", behavior: 'smooth' })
    }
  },
  components: {
    IndexSlogan,
    IndexNews,
    IndexRating,
    IndexFeature,
    IndexFaq,
    IndexAddress
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: url('/首頁圖片/bg-shape.png');
  background-size: cover;
  background-position: bottom;
}
</style>
