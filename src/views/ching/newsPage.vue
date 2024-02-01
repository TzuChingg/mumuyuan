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
              <!-- <p>木木苑一周年啦！！</p>
              <p>感謝您在過去一年中對我們的支持，為此我們準備了優惠活動</p>
              <p>11/24(五)-11/26(日) 限期三天</p>
              <p>■巨無霸魷魚 買一送一 (每人限購一組)</p>
              <p>■金牌生啤 買一送一 (不列入會員集點)</p> -->
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: {}
    }
  },
  mounted() {
    this.getNews()
  },

  methods: {
    getNews() {
      this.$axios(`/news/${this.$route.params.id}`)
        .then((res) => {
          this.news = res.data
          this.news.newsContent = this.news.newsContent.split('\n')
        })
        console.log(this.news);
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
