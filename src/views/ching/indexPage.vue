<template>
    <div>
        <div class="bg-image bg-primary">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- <nav class="navbar navbar-expand-lg navbar-light mt-4 mb-4">
                            <div class="container-fluid">
                                <router-link to="/">
                                    <img src="/首頁圖片/logo.png" alt="" />
                                </router-link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto">
                                        <li class="nav-item">
                                            <router-link to="/menu"
                                                class="nav-link fs-5 text-light text-decoration-none">線上點餐</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/reserve"
                                                class="nav-link fs-5 text-light text-decoration-none">立即訂位</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/search"
                                                class="nav-link fs-5 text-light text-decoration-none">訂位/訂單查詢</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/"
                                                class="nav-link fs-5 text-light text-decoration-none">常見問題(往下滾)</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/login"
                                                class="nav-link fs-5 text-light text-decoration-none">登入/註冊</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/memberCenter"
                                                class="nav-link fs-5 text-light text-decoration-none"><img src="/首頁圖片/user.png" alt="會員中心" ></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav> -->
                    </div>
                </div>
            </div>
            <div class="container-fluid p-0 position-relative">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <router-link to="/" class="d-flex">
                                <img src="/首頁圖片/hero-desktop-1.png" class="d-block w-50" alt="食物照片1" />
                                <img src="/首頁圖片/hero-desktop-2.png" class="d-block w-50" alt="食物照片2" />
                            </router-link>
                        </div>
                        <div class="carousel-item">
                            <router-link to="/" class="d-flex">
                                <img src="/首頁圖片/hero-desktop-3.png" class="d-block w-50" alt="食物照片3" />
                                <img src="/首頁圖片/hero-desktop-4.png" class="d-block w-50" alt="食物照片4" />
                            </router-link>
                        </div>
                        <div class="carousel-item">
                            <router-link to="/" class="d-flex">
                                <img src="/首頁圖片/hero-desktop-5.png" class="d-block w-50" alt="食物照片5" />
                                <img src="/首頁圖片/hero-desktop-6.png" class="d-block w-50" alt="食物照片6" />
                            </router-link>
                        </div>
                    </div>
                    <div class="slogan sRight position-absolute">
                        <p class="fs-1 text-light">
                            獨&nbsp;&nbsp;家&nbsp;&nbsp;醬&nbsp;&nbsp;料&nbsp;&nbsp;，&nbsp;&nbsp;特&nbsp;&nbsp;製&nbsp;&nbsp;秘&nbsp;&nbsp;粉
                        </p>
                        <p class="fs-1 text-light">
                            無&nbsp;&nbsp;煙&nbsp;&nbsp;純&nbsp;&nbsp;烤&nbsp;&nbsp;，&nbsp;&nbsp;絕&nbsp;&nbsp;不&nbsp;&nbsp;油&nbsp;&nbsp;炸
                        </p>
                    </div>
                    <div class="slogan sLeft position-absolute">
                        <p class="fs-1 text-light">
                            一&nbsp;&nbsp;手&nbsp;&nbsp;一&nbsp;&nbsp;串&nbsp;&nbsp;，&nbsp;&nbsp;如&nbsp;&nbsp;苑&nbsp;&nbsp;以&nbsp;&nbsp;嚐
                        </p>
                        <p class="fs-1 text-light">
                            平&nbsp;&nbsp;價&nbsp;&nbsp;美&nbsp;&nbsp;食&nbsp;&nbsp;，&nbsp;&nbsp;種&nbsp;&nbsp;類&nbsp;&nbsp;多&nbsp;&nbsp;樣
                        </p>
                    </div>
                    <div class="sloganButton position-absolute start-50 translate-middle">
                        <button type="button" class="btn btn-dark bg-light bg-opacity-75 fs-2">
                            <strong>立即點餐</strong>
                        </button>
                    </div>
                </div>
            </div>

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
                                <button type="button" data-bs-target="#ratingCarouse" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#ratingCarouse" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- 上排 -->
                                    <div class="d-flex mb-5">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外酥內嫩，<br />火侯掌握得很好～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>店內與食材區都很整齊，乾乾淨淨的很舒服！</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外帶會依照不同味道分開裝，超用心！</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下排 -->
                                    <div class="d-flex mb-5 justify-content-end">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>種類很多，<br />比居酒屋還好吃～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>烤串烤得很精緻，老闆非常親切。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
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
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>燒烤不會太鹹又很香！烤功一流！大腸有處理得很好！整體非常喜歡。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>肉串都還不錯吃，外酥裡嫩，調味得宜</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>非常非常非常好吃👍 …</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下排 -->
                                    <div class="d-flex mb-5 justify-content-end">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>豬五花、剝皮辣椒豬、牛肉干貝捲，真的好好吃</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>餐點衛生都很優，店內位置不多，但是真心推薦內用～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
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
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>燒烤稍微偏甜，食材跟價位cp值高，師傅的烤工一流。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>口味適中，食材本身的鮮味，感受得出來非常用心。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外帶會依照不同味道分開裝，超用心！</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下排 -->
                                    <div class="d-flex mb-5 justify-content-end">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>推推推👍食材多種美味～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>牛五花蔥、茄子、玉米筍、烤雞翅好好吃👍</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="評價框" />
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
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
        </div>
        <div class="container-fluid bg-secondary ">
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
        </div>
        <div class="container-fluid bg-primary">
            <div class="row">
                <div class="pt-5 mb-5 d-flex justify-content-center">
                    <img src="/首頁圖片/illustration-left.png" alt="icon-left" />
                    <h2 class="text-light text-center ms-3 me-3 my-auto">常見問題</h2>
                    <img src="/首頁圖片/illustration-right.png" alt="icon-right" />
                </div>
            </div>
            <div class="container pb-5 ">
                <div class="row m-3">
                    <div class="col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Q. 如何線上點餐？</h5>
                                <p class="card-text fs-5">
                                    可以在網頁中點擊線上點餐，直接預定餐點，或是透過LINE點餐，可減少現場等待的時間。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Q. 會員點數如何計算？</h5>
                                <p class="card-text fs-5">
                                    每消費100元會累積1點會員點數。點數可以到會員中心內點數兌換區，兌換商品或是折價券。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row  m-3">
                    <div class="col-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Q. 現場等待會很久嗎？</h5>
                                <p class="card-text fs-5">
                                    所有餐點採用現點現烤不油炸，所以會需要等待較長的時間，建議可以事先預約餐點，可減少現場等待的時間。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Q. 口味有哪些選擇呢？</h5>
                                <p class="card-text fs-5">
                                    口味有椒鹽、秘粉2種選擇。椒鹽風味融合了咸鹹的滋味，微辣的刺激令人愉悅，是味蕾的享受。秘粉口味融合了神秘調味，帶給您前所未有的體驗。以上兩種都是本店精心推薦。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-secondary pb-5">
            <div class="row">
                <div class="col-sm-12">
                    <div class="mt-5 mb-5 d-flex justify-content-center">
                        <img src="/首頁圖片/title-illustration-left-brown.png" alt="icon-left" />
                        <h2 class="text-primary text-center ms-3 me-3 my-auto">門市地圖</h2>
                        <img src="/首頁圖片/title-illustration-right-brown.png" alt="icon-right" />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="address col-5 bg-primary d-flex flex-wrap justify-content-center align-content-center p-0 m-0">
                        <div class="info">
                            <img class="mb-3" src="/首頁圖片/logo-sm.png" alt="木木苑logo" srcset="">
                            <p class="fs-4 text-light">店址：臺中市北屯區太原路三段500號</p>
                            <p class="fs-4 text-light" >營業時間：17:00 - 00:00</p>
                        </div>
                    </div>
                    <div class="col-7 p-0 m-0">
                        <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.1939341247257!2d120.69349077593675!3d24.16493047273495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691738eb40c225%3A0x2a6052ea0974f938!2z5pyo5pyo6IuR5Liy54S85bCC6ZaA44Gu5bqX!5e0!3m2!1szh-TW!2stw!4v1706116400211!5m2!1szh-TW!2stw" width="770px" height="520px" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

* {
    font-family: 'Noto Sans TC';
}
.bg-image {
    background-image: url('/首頁圖片/bg-shape.png');
    background-size: cover;
    background-position:bottom;
}

.slogan {
    P {
        margin: 0%;
        padding: 0%;
    }
    writing-mode: vertical-lr;
    top: 17%;
    right: 22%;
}
.sRight {
    right: 22%;
}
.sLeft {
    left: 22%;
}
.sloganButton {
    top: 70%;
}
.ratingText {
    height: 60px;
    width: 256px;
    top: 15%;
    left: 10%;
    right: 10%;
    bottom: 15%;
}
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
}
.card-text {
    color: #4F4F4F;
}
.address{
    height: 520px;
}
</style>
