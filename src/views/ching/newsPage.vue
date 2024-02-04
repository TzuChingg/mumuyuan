<template>
  <div>
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="row">
            <div class="col-9">
              <h3>{{ news.newsTitle }}</h3>
              <hr />
              <div class="row news">
                <div class="d-flex justify-content-center mb-5">
                  <img :src="news.newsImage" alt="" />
                </div>
              </div>
              <p v-for="(content, index) in news.newsContent" :key="index">
                {{ content }}
              </p>
              <p>
                <!-- <router-link to="/" @click.prevent="getCoupon" >按此領取優惠</router-link> -->
                <a href="" @click.prevent="getCoupon">按此領取優惠</a>
              </p>
              <p>❕木木苑保有活動解釋權，造成不便敬請見諒❕</p>
            </div>
            <div class="otherNews col-sm-3 mb-3 mx-auto">
              <p class="fs-5 mt-3 mb-0">最新消息</p>
              <hr class="mb-0 mt-0" />
              <p>
                <a href="" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">鯖魚狂歡！買一送一</a>
              </p>
              <p>
                <a href="" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">鳳梨蝦球！新品上市</a>
              </p>
              <p>
                <a href=""
                  class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">冬季暖心美味，一碗味噌湯解凍你的寒冷心靈</a>
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-3 d-flex justify-content-center">
              <router-link to="/">
                <button type="button" class="btn btn-primary text-light">回首頁</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { docCookies } from '../../assets/cookie';
export default {
  data() {
    return {
      news: {},
      userCoupon: []

    }
  },
  mounted() {
    this.getNews()
  },

  methods: {
    getNews() {
      this.$axios.get(`/news/${this.$route.params.id}`)
        .then((res) => {
          this.news = res.data
          this.news.newsContent = this.news.newsContent.split('\n')
        })
    },
    getCoupon() {
      if (docCookies.getItem("id") == null) {
        alert('請先登入')
        this.$router.push({ path: '/login' })
      }
      this.$axios.get(`/users/${docCookies.getItem("id")}`)
        .then((res) => {
          this.userCoupon = res.data.coupon.split(',').filter(el => el !== '')
          if (this.userCoupon.includes(this.$route.params.id)) {
            alert('已領過此優惠券')
          }else{
            this.userCoupon.push(this.$route.params.id)
            this.$axios.patch(`/users/${docCookies.getItem("id")}`, {
              coupon: this.userCoupon.join(',')
            })
            alert('加入優惠券成功')
          }
        })
    }
  },

}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 314px);
}

.news {
  img {
    object-fit: contain;
    height: 300px;
  }
}

.otherNews {
  p {
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
