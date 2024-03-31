<template>
  <div>
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="row">
            <div class="col-8">
              <h3>{{ news.newsTitle }}</h3>
              <hr />
              <div class="row news">
                <div class="d-flex justify-content-center mb-5">
                  <img :src="`/木木苑食材修圖large/${news.newsImage}.jpg`" alt="消息圖片" />
                </div>
              </div>
              <p v-for="(content, index) in news.newsContent" :key="index">
                {{ content }}
              </p>
              <p>
                <a href="" @click.prevent="getCoupon">按此領取優惠</a>
              </p>
              <p>❕木木苑保有活動解釋權，造成不便敬請見諒❕</p>
            </div>
            <div class="otherNews mb-3 mx-auto col-4">
              <p class="otherNewsTitle fs-5 mt-3">其他消息</p>
              <hr class="mb-0 mt-0" />
              <ul class="list-group bg-transparent">
                <li
                  class="list-group-item d-flex align-items-center bg-transparent rounded-0 border-top-0 border-start-0 border-end-0  mb-2 mt-2"
                  style="border-bottom: 1px solid #A69F8A;" v-for="(item, index) in otherNews" :key="index">
                  <router-link :to="'/news/' + item.id">
                    <img :src="item.newsImage.includes('首頁圖片') ? item.newsImage : `/木木苑食材修圖small/${item.newsImage}.jpg`"
                      alt="消息圖片" style="height: 50px;">
                  </router-link>
                  <router-link :to="'/news/' + item.id">
                    <p class=" ms-2 fs-6">{{ item.newsTitle }}</p>
                  </router-link>
                </li>
              </ul>
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
import { docCookies } from '@/assets/cookie';
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
        this.$swal({
          icon: 'warning',
          title: '請先登入',
          text: '請先登入後再試'
        }).then(() => {
          this.$router.push({ path: '/login' })
        });
        return
      }
      this.$axios.get(`/users/${docCookies.getItem("id")}`)
        .then((res) => {
          this.userCoupon = res.data.coupon
          if (this.userCoupon.find(item => item.id === this.news.couponId)) {
            this.$swal({
              icon: 'error',
              title: '已領過此優惠券',
              text: '請查看個人優惠券',
              timer: 2000
            })
          } else {
            const today = new Date()
            let expiryDate = today.setDate(today.getDate() + 7)
            expiryDate = new Date(expiryDate).toLocaleDateString()
            this.userCoupon.push({
              "name": this.news.name,
              "calc": "-1",
              "image": this.news.newsImage,
              "description": "僅限現場點餐使用",
              "expiryDate": expiryDate,
              "id": this.news.couponId
            })

            this.$axios.patch(`/users/${docCookies.getItem("id")}`, {
              coupon: this.userCoupon
            })
              .then(() => {
                this.$swal({
                  icon: 'success',
                  title: '加入優惠券成功',
                  text: '請查看個人優惠券',
                  timer: 2000
                })
              })
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
    },
  },
  watch: {
    '$route.params.id'() {
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
  .otherNewsTitle {
    margin-bottom: 4px;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
