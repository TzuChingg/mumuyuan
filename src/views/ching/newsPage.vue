<template>
  <div>
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-10">
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
              <p class="otherNewsTitle fs-5 mt-3">其他消息</p>
              <hr class="mb-0 mt-0" />
              <ul class="list-group bg-transparent">
                <li
                  class="list-group-item d-flex align-items-center bg-transparent rounded-0 border-top-0 border-start-0 border-end-0  mb-2 mt-2"
                  style="border-bottom: 1px solid #A69F8A;" v-for="(item, index) in otherNews" :key="index">
                  <router-link :to="'/news/' + item.id">
                    <img :src="item.newsImage" alt="" style="height: 50px;">
                  </router-link>
                  <router-link :to="'/news/' + item.id"><p class=" ms-2 fs-6">{{ item.newsTitle }}</p></router-link>
                  
                </li>

              </ul>
              <!-- <p>
                <a href="" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">鯖魚狂歡！買一送一</a>
              </p> -->

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
      userCoupon: [],
      otherNews: []

    }
  },
  mounted() {
    this.getNews()
    this.getOtherNews()
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
          } else {
            this.userCoupon.push(this.$route.params.id)
            this.$axios.patch(`/users/${docCookies.getItem("id")}`, {
              coupon: this.userCoupon.join(',')
            })
            alert('加入優惠券成功')
          }
        })
    },
    getOtherNews() {
      this.$axios.get(`/news`)
        .then((res) => {
          let tempList = [...Array(res.data.length).keys()].filter(el => el != (this.$route.params.id - 1))
          for (let i = 0; i < 3; i++) {
            let numIndex = Math.floor(Math.random() * tempList.length);
            this.otherNews.push(res.data[tempList[numIndex]])
            tempList.splice(numIndex, 1)
          }
        })
      console.log(this.otherNews);
    },
  },
  watch: {
    '$route.params.id'(newId) {
      // 路由参数变化时执行的逻辑
      window.location.reload()
    },
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
    height: 636px;
  }
}

.otherNews {
  .otherNewsTitle{
    margin-bottom: 4px;
  }

  p {
    // text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
