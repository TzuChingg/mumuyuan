<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="mt-5 mb-5 d-flex justify-content-center">
          <img src="/首頁圖片/illustration-left.png" alt="icon-left" />
          <h2 class="text-light text-center ms-3 me-3 my-auto">好評推薦</h2>
          <img src="/首頁圖片/illustration-right.png" alt="icon-right" />
        </div>
        <div
          id="ratingCarouse"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#ratingCarouse"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#ratingCarouse"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#ratingCarouse"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <!-- 上排 -->
              <div class="d-flex mb-5">
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>外酥內嫩，<br />火侯掌握得很好～</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>店內與食材區都很整齊，乾乾淨淨的很舒服！</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>外帶會依照不同味道分開裝，超用心！</p>
                  </div>
                </div>
              </div>
              <!-- 下排 -->
              <div class="d-flex mb-5 justify-content-end">
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>種類很多，<br />比居酒屋還好吃～</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>烤串烤得很精緻，老闆非常親切。</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>空間明亮有氣氛，<br />適合小聚～</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <!-- 上排 -->
              <div class="d-flex mb-5">
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>燒烤不會太鹹又很香！烤功一流！大腸有處理得很好！整體非常喜歡。</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>肉串都還不錯吃，外酥裡嫩，調味得宜</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>非常非常非常好吃👍 …</p>
                  </div>
                </div>
              </div>
              <!-- 下排 -->
              <div class="d-flex mb-5 justify-content-end">
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>豬五花、剝皮辣椒豬、牛肉干貝捲，真的好好吃</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>餐點衛生都很優，店內位置不多，但是真心推薦內用～</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>推推，好吃，價格小貴但還可以接受</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <!-- 上排 -->
              <div class="d-flex mb-5">
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>燒烤稍微偏甜，食材跟價位cp值高，師傅的烤工一流。</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>口味適中，食材本身的鮮味，感受得出來非常用心。</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-left.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>外帶會依照不同味道分開裝，超用心！</p>
                  </div>
                </div>
              </div>
              <!-- 下排 -->
              <div class="d-flex mb-5 justify-content-end">
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>推推推👍食材多種美味～</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>牛五花蔥、茄子、玉米筍、烤雞翅好好吃👍</p>
                  </div>
                </div>
                <div class="position-relative me-5">
                  <img src="/首頁圖片/rating-right.png" alt="評價框" />
                  <div
                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block"
                  >
                    <p>好吃到不行，醬料獨特而且烤的很讚😎重點4他的辣粉超好吃的啦！！ …</p>
                  </div>
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
export default {}
</script>

<style lang="scss" scoped>

.ratingText {
    height: 60px;
    width: 256px;
    top: 15%;
    left: 10%;
    right: 10%;
    bottom: 15%;
}
</style>
