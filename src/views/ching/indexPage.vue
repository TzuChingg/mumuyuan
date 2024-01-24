<template>
    <div>
        <div class="bg-image bg-primary">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <nav class="navbar navbar-expand-lg navbar-light mt-4 mb-4">
                            <div class="container-fluid">
                                <router-link to="/">
                                    <img src="/首頁圖片/logo.png" alt="">
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
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <router-link to="/" class="d-flex">
                            <img src="/首頁圖片/hero-desktop-1.png" class="d-block w-50" alt="...">
                            <img src="/首頁圖片/hero-desktop-2.png" class="d-block w-50" alt="...">
                        </router-link>
                    </div>
                    <div class="carousel-item">
                        <router-link to="/" class=" d-flex">
                            <img src="/首頁圖片/hero-desktop-3.png" class="d-block w-50" alt="...">
                            <img src="/首頁圖片/hero-desktop-4.png" class="d-block w-50" alt="...">
                        </router-link>
                    </div>
                    <div class="carousel-item">
                        <router-link to="/" class=" d-flex">
                            <img src="/首頁圖片/hero-desktop-5.png" class="d-block  w-50" alt="...">
                            <img src="/首頁圖片/hero-desktop-6.png" class="d-block  w-50" alt="...">
                        </router-link>
                    </div>
                </div>
                <div class="slogan sRight position-absolute">
                    <p class=" text-light">
                        獨&nbsp;&nbsp;家&nbsp;&nbsp;醬&nbsp;&nbsp;料&nbsp;&nbsp;，&nbsp;&nbsp;特&nbsp;&nbsp;製&nbsp;&nbsp;秘&nbsp;&nbsp;粉
                    </p>
                    <p class=" text-light">
                        無&nbsp;&nbsp;煙&nbsp;&nbsp;純&nbsp;&nbsp;烤&nbsp;&nbsp;，&nbsp;&nbsp;絕&nbsp;&nbsp;不&nbsp;&nbsp;油&nbsp;&nbsp;炸
                    </p>
                </div>
                <div class="slogan sLeft position-absolute">
                    <p class=" text-light">
                        一&nbsp;&nbsp;手&nbsp;&nbsp;一&nbsp;&nbsp;串&nbsp;&nbsp;，&nbsp;&nbsp;如&nbsp;&nbsp;苑&nbsp;&nbsp;以&nbsp;&nbsp;嚐
                    </p>
                    <p class=" text-light">
                        平&nbsp;&nbsp;價&nbsp;&nbsp;美&nbsp;&nbsp;食&nbsp;&nbsp;，&nbsp;&nbsp;種&nbsp;&nbsp;類&nbsp;&nbsp;多&nbsp;&nbsp;樣
                    </p>
                </div>
                <div class="sloganButton position-absolute">
                    <button type="button" class="btn btn-dark bg-light bg-opacity-75 fs-2">立即點餐</button>
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> -->
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="featureTitle mt-5 mb-5">
                            <img src="/首頁圖片/illustration-left.png" alt="">
                            <h1 class="text-light">好評推薦</h1>
                            <img src="/首頁圖片/illustration-right.png" alt="">
                        </div>

                        <!-- <div class="d-flex mb-5">
                            <div class="position-relative me-5">
                                <img src="/首頁圖片/rating-left.png" alt="">
                                <div
                                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                    <p>外酥內嫩，<br>火侯掌握得很好～</p>
                                </div>
                            </div>
                            <div class="position-relative me-5">
                                <img src="/首頁圖片/rating-left.png" alt="">
                                <div
                                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                    <p>店內與食材區都很整齊，乾乾淨淨的很舒服！</p>
                                </div>
                            </div>
                            <div class="position-relative me-5">
                                <img src="/首頁圖片/rating-left.png" alt="">
                                <div
                                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                    <p>外帶會依照不同味道分開裝，超用心！</p>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex mb-5 justify-content-end">
                            <div class="position-relative me-5">
                                <img src="/首頁圖片/rating-right.png" alt="">
                                <div
                                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                    <p>種類很多，<br>比居酒屋還好吃～</p>
                                </div>
                            </div>
                            <div class="position-relative me-5">
                                <img src="/首頁圖片/rating-right.png" alt="">
                                <div
                                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                    <p>烤串烤得很精緻，老闆非常親切。</p>
                                </div>
                            </div>
                            <div class="position-relative me-5">
                                <img src="/首頁圖片/rating-right.png" alt="">
                                <div
                                    class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                    <p>空間明亮有氣氛，<br>適合小聚～</p>
                                </div>
                            </div>
                        </div> -->

                        <div id="ratingCarouse" class="carousel slide" data-bs-ride="carousel">
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
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外酥內嫩，<br>火侯掌握得很好～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>店內與食材區都很整齊，乾乾淨淨的很舒服！</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外帶會依照不同味道分開裝，超用心！</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下排 -->
                                    <div class="d-flex mb-5 justify-content-end">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>種類很多，<br>比居酒屋還好吃～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>烤串烤得很精緻，老闆非常親切。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>空間明亮有氣氛，<br>適合小聚～</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <!-- 上排 -->
                                    <div class="d-flex mb-5">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外酥內嫩，<br>火侯掌握得很好～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>店內與食材區都很整齊，乾乾淨淨的很舒服！</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外帶會依照不同味道分開裝，超用心！</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下排 -->
                                    <div class="d-flex mb-5 justify-content-end">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>種類很多，<br>比居酒屋還好吃～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>烤串烤得很精緻，老闆非常親切。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>空間明亮有氣氛，<br>適合小聚～</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <!-- 上排 -->
                                    <div class="d-flex mb-5">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外酥內嫩，<br>火侯掌握得很好～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>店內與食材區都很整齊，乾乾淨淨的很舒服！</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-left.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>外帶會依照不同味道分開裝，超用心！</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 下排 -->
                                    <div class="d-flex mb-5 justify-content-end">
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>種類很多，<br>比居酒屋還好吃～</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>烤串烤得很精緻，老闆非常親切。</p>
                                            </div>
                                        </div>
                                        <div class="position-relative me-5">
                                            <img src="/首頁圖片/rating-right.png" alt="">
                                            <div
                                                class="ratingText position-absolute fs-5 text-light text-wrap text-truncate d-inline-block">
                                                <p>空間明亮有氣氛，<br>適合小聚～</p>
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
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

.bg-image {
    background-image: url('/首頁圖片/bg-shape.png');
    background-size: cover;
}

.slogan {
    P {
        margin: 0%;
        padding: 0%;
    }

    font-family: 'Noto Sans TC';
    writing-mode: vertical-lr;
    font-size: 40px;
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
    font-family: 'Noto Sans TC';
    font-weight: bold;
    width: 176px;
    top: 66%;
    left: 46%;
    right: 46%;
}

.featureTitle {
    width: 234px;
    display: flex;
    margin: auto;
    margin-bottom: 16px;

    h1 {
        font-size: 32px;
        font-family: 'Noto Sans TC';
        text-align: center;
        margin: auto;
        width: 128px;
        height: 39px;
    }
}

.ratingText {
    height: 60px;
    width: 256px;
    top: 15%;
    left: 10%;
    right: 10%;
    bottom: 15%;
}
</style>
