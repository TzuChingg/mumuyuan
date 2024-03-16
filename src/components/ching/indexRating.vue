<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="mt-5 mb-5 d-flex justify-content-center">
          <img src="/首頁圖片/illustration-left.png" alt="icon-left" />
          <h2 class="text-light text-center ms-3 me-3 my-auto">好評推薦</h2>
          <img src="/首頁圖片/illustration-right.png" alt="icon-right" />
        </div>
        <div id="ratingCarouse" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#ratingCarouse" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#ratingCarouse" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#ratingCarouse" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item row" v-for="(page, indexPage) in ratingList" :key="indexPage"
              :class="{ active: page[0] == true }">
              <div class="d-flex col-lg-12 col-md-6">
                <div class="col-lg-4 col-md-12 rating-left-bg-image" v-for="(rating, indexUp) in page[1]"
                  :key="indexUp">
                  <div class="box ms-4 mb-0 mt-1">
                    <i class="bi bi-star-fill text-secondary ms-1" v-for="(item, index) in  rating.star"
                      :key="index"></i>
                    <i class="bi bi-star text-secondary ms-1" v-for="(item, index) in (5 - rating.star)"
                      :key="index"></i>
                  </div>
                  <textarea class=" border-0 bg-transparent bg-opacity-100 text-light ms-4 text-wra" rows="3" cols="33"
                    disabled v-model="rating.ScoreText"></textarea>
                </div>
              </div>
              <div class="d-flex col-lg-12 col-md-6 justify-content-end mb-5">
                <div class="col-lg-4 col-md-12 rating-right-bg-image" v-for="(rating, indexDown) in page[2]"
                  :key="indexDown">
                  <div class="box ms-4 mb-0 mt-1">
                    <i class="bi bi-star-fill  text-secondary ms-1" v-for="(item, index) in  rating.star "
                      :key="index"></i>
                    <i class="bi bi-star text-secondary ms-1" v-for="(item, index) in (5 - rating.star) "
                      :key="index"></i>
                  </div>
                  <textarea class=" border-0 bg-transparent bg-opacity-100 text-light ms-4 text-wrap " rows="3"
                    cols="33" disabled v-model="rating.ScoreText"></textarea>
                </div>
              </div>
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
      ratingList: []
    }
  },
  mounted() {
    this.getRating()
  },
  methods: {
    getRating() {
      this.$axios.get('/scores')
        .then((res) => {
          const temp = res.data
          const count = 6
          const len = parseInt(res.data.length / count)
          for (let i = 0; i < len; i++) {
            this.ratingList.push([i + 1, temp.slice(count * i, 3 + (count * i)), temp.slice(3 + (count * i), count * (i + 1))])
          }
        }).catch(() => {
          console.error('評價取得失敗');
        });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.rating-left-bg-image,
.rating-right-bg-image {
  background-repeat: no-repeat;
  background-size: contain;
}

.rating-left-bg-image {
  background-image: url('/首頁圖片/rating-left.png');
  width: 308px;
  height: 123px;

  textarea {
    font-size: 15px;
    resize: none;
    overflow: hidden;
  }
}

.rating-right-bg-image {
  background-image: url('/首頁圖片/rating-right.png');
  width: 308px;
  height: 123px;

  textarea {
    font-size: 15px;
    resize: none;
    overflow: hidden;
  }
}
</style>
