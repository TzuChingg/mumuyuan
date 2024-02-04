<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="mt-5 mb-5 d-flex justify-content-center">
                <img src="/首頁圖片/title-illustration-left-brown.png" alt="icon-left" />
                <h2 class="text-primary text-center ms-3 me-3 my-auto">木木苑特色</h2>
                <img src="/首頁圖片/title-illustration-right-brown.png" alt="icon-right" />
            </div>
        </div>
    </div>
    <div class="container bg-secondary">
        <div class="row">
            <div class="col-sm-12 d-flex justify-content-center flex-wrap mb-5">
                <div class="feature position-relative">
                    <img class="p-2 position-relative w-100" src="/首頁圖片/feature1.png" alt="直火燒烤不油炸" />
                    <div class="featureText position-absolute">
                        <p class="featureNum display-3 text-center text-light">01</p>
                        <p class="fs-3 text-light">直火燒烤不油炸</p>
                    </div>
                </div>
                <div class="feature position-relative">
                    <img class="p-2 position-relative w-100" src="/首頁圖片/feature2.png" alt="富含膠原蛋白的秘密醬汁" />
                    <div class="featureText2 position-absolute">
                        <p class="featureNum display-3 text-center text-light">02</p>
                        <p class="fs-3 text-light">富含膠原蛋白的秘密醬汁</p>
                    </div>
                </div>
                <div class="feature position-relative">
                    <img class="p-2 position-relative w-100" src="/首頁圖片/feature3.png" alt="餐點種類多樣化" />
                    <div class="featureText position-absolute">
                        <p class="featureNum display-3 text-center text-light">03</p>
                        <p class="fs-3 text-light">餐點種類多樣化</p>
                    </div>
                </div>
                <div class="feature position-relative">
                    <img class="p-2 position-relative w-100" src="/首頁圖片/feature4.png" alt="乾淨明亮的空間" />
                    <div class="featureText position-absolute">
                        <p class="featureNum display-3 text-center text-light">04</p>
                        <p class="fs-3 text-light">乾淨明亮的空間</p>
                    </div>
                </div>
                <div class="feature position-relative">
                    <img class="p-2 position-relative w-100" src="/首頁圖片/feature5.png" alt="優惠的價格 餐廳的享受" />
                    <div class="featureText5 position-absolute">
                        <p class="featureNum display-3 text-center text-light">05</p>
                        <p class="fs-3 text-light">優惠的價格 餐廳的享受</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.featureText {
    top: 37%;
    left: 28%;

    .featureNum {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
    }
}

.featureText2 {
    top: 37%;
    left: 15%;

    .featureNum {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
    }
}

.featureText5 {
    top: 37%;
    left: 15%;

    .featureNum {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
    }
}</style>