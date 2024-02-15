<template>
    <div class="container-fuild bg-secondary overflow-hidden">
        <div class="ms-0 me-0">
            <div class="pt-5 mb-5 d-flex justify-content-center">
                <img src="/首頁圖片/title-illustration-left-brown.png" alt="icon-left" />
                <h2 class="text-primary text-center ms-3 me-3 my-auto">最新消息</h2>
                <img src="/首頁圖片/title-illustration-right-brown.png" alt="icon-right" />
            </div>
        </div>
        <div class="row justify-content-center position-relative ">
            <div class="col-11 pb-5 ">
                <div id="latestNews" class="carousel slide " data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="latestNewsCOl carousel-item "  v-for="(page, index) in temp" :key="index" :class="{ active : page[0] == true}">
                            <div class="d-flex">
                                <router-link :to="'/news/' + item.id" class="text-decoration-none me-4" v-for="item in page[1]" :key="item.id">
                                    <div class="card h-100" style="width: 19rem">
                                        <img :src="item.newsImage" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text fs-4">{{ item.newsTitle }}</p>
                                            <p class="card-text">{{ item.newsContent }}</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="position-absolute newsBtn-left border-0" type="button" data-bs-target="#latestNews"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="filter: invert(50%)"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="position-absolute newsBtn-right border-0" type="button" data-bs-target="#latestNews"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="filter: invert(50%)"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [],
            fullWidth: 0,
            newsPage:1,
            temp:[]
        }
    },
    mounted() {
        const vm = this;
        this.fullWidth = window.innerWidth
        window.onresize = () => {
            vm.fullWidth = window.innerWidth;
        }
        this.getNews()
    },

    methods: {
        getNews() {
            this.$axios
                .get(`/news`)
                .then((result) => {
                    this.news = result.data
                    this.newsCarousel()
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        newsCarousel(){
            const newsCopy = JSON.parse(JSON.stringify(this.news))         
            if ( this.fullWidth >= 1660) {
                this.newsPage = 1
                const len = parseInt(newsCopy.length/5)
                this.newsPage += len
                for (let i=0; i<this.newsPage; i++){
                    this.temp.push([(i+1), newsCopy.slice((5)*i, (5)*(i+1))])
                }
            } else if (this.fullWidth >= 1337 & this.fullWidth < 1660) {
                this.newsPage = 1
                const len = parseInt(newsCopy.length/4)
                this.newsPage += len;
                for (let i=0; i<this.newsPage; i++){
                    this.temp.push([(i+1), newsCopy.slice((4)*i, (4)*(i+1))])
                }
            }else if (this.fullWidth >= 1000 & this.fullWidth < 1337){
                this.newsPage = 1
                const len = parseInt(newsCopy.length/3)
                this.newsPage += len;
                for (let i=0; i<this.newsPage; i++){
                    this.temp.push([(i+1), newsCopy.slice((3)*i, (3)*(i+1))])
                }
            }else if (this.fullWidth >= 690 & this.fullWidth < 1000) {
                this.newsPage = 1
                const len = parseInt(newsCopy.length/2)
                this.newsPage += len;
                for (let i=0; i<this.newsPage; i++){
                    this.temp.push([(i+1), newsCopy.slice((2)*i, (2)*(i+1))])
                }
            }else {
                this.newsPage = 1
                const len = parseInt(newsCopy.length/1)
                this.newsPage += len;
                for (let i=0; i<this.newsPage; i++){
                    this.temp.push([(i+1), newsCopy.slice((1)*i, (1)*(i+1))])
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.latestNewsCOl {

    // max-width: 1820px;
    .card-text {
        // height: 150px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}

.newsBtn-left {
    top: 0;
    bottom: 0;
    left: 0%;
}

.newsBtn-right {
    top: 0;
    bottom: 0;
    right: 0%;
}

</style>
