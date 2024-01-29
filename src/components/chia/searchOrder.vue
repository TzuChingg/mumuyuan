<template>
    <div class="accordion w-70 m-auto mb-5" id="accordionExample">
        <div class="accordion-item" v-for="obj in tidyResponse">
            <h2 class="accordion-header" id="headingOne">
                <div class="p-3  accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    <p class="mb-0 fs-5 fw-bolder me-5">訂單編號 : 1130103-1</p>
                    <p class="mb-0 fs-5 fw-bolder">日期 1130103</p>
                </div>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="status mb-3">
                        <p class="fs-4 fw-bolder text-center text-muted mb-4">出餐狀態</p>
                        <div class="dot-line w-50 m-auto position-relative border border-1 border-light">
                            <div class="dot position-absolute translate-middle"></div>
                            <div class="dot position-absolute translate-middle"></div>
                            <div class="dot position-absolute translate-middle"></div>
                            <div class="dot position-absolute translate-middle"></div>
                            <div class="dot position-absolute translate-middle"></div>
                        </div>
                    </div>
                    <table class="table table-borderless fs-5">
                        <thead>
                            <tr>
                                <th class="col-1">圖片</th>
                                <th class="col-3">品項</th>
                                <th class="col-6">介紹</th>
                                <th class="col-1"></th>
                                <th class="col-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="food in obj.product">
                                <td><img style="width: 60px;" :src="foodImage[food.name]" alt=""></td>
                                 <td>{{ food.name }}</td>
                               <!-- <td>{{ food.name }}</td>
                                <td>{{ food.quantity }}</td>
                                <td>{{ food.name }}</td> -->
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                    <div class="detail d-flex">
                        <div class="col-6">
                            <div class="my-1">
                                <label class="fs-6 col-4">訂購人</label>
                                <input class="col input-set" type="text" :value="obj.name" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">手機</label>
                                <input class="col input-set" type="text" :value="obj.phone" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">訂單時間</label>
                                <input class="col input-set" type="text" :value="obj.name" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">附贈餐具</label>
                                <input class="col input-set" type="text" :value="(obj.tableware) ? '要' : '不要'" disabled
                                    readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">購買提袋</label>
                                <input class="col input-set" type="text" :value="(obj.bags) ? '要' : '不要'" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">取餐方式</label>
                                <input class="col input-set" type="text" :value="(obj.type) ? '自取' : '外送'" disabled
                                    readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">取餐時間</label>
                                <input class="col input-set" type="text" :value="obj.pickTime" disabled readonly>
                            </div>
                        </div>
                        <div class="settle col-6">
                            <div class="my-1">
                                <label class="fs-6 col-4">付款方式</label>
                                <input class="col input-set" type="text" :value="(obj.payment) ? '線上付款' : '現金'" disabled
                                    readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4" col-6>口味</label>
                                <input class="col input-set" type="text" :value="flavor(obj.flavor)" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4" col-6>辣度</label>
                                <input class="col input-set" type="text" :value="spicy(obj.spicy)" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4">總金額</label>
                                <input class="col input-set" type="text" :value="obj.price" disabled readonly>
                            </div>
                            <div class="my-1">
                                <label class="fs-6 col-4 mb-1">備註</label>
                                <textarea class="col-10 input-set p-2 textarea" :value="obj.comment" style="resize: none;"
                                    disabled readonly></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="notice w-50 py-4 m-auto">
        <p class="my-0 fs-5">注意事項</p>
        <ul class="list fs-5">
            <li>取餐時，請現場清點餐點，確保商品製作無誤。</li>
            <li>請務必當場清點找零</li>
            <li>依現場排隊取餐</li>
        </ul>
        <button type="button" class="d-block btn btn-dark mx-auto my-5 py-2 px-3">返回首頁</button>
    </div>
</template>

<script>
export default {
    props: ["getResponse"],
    data() {
        return {
            getProducts: {}
        }
    },
    created() {
        this.$axios.get('/products')
            .then((res) => {
                this.getProducts = res.data;
                console.log(this.getProducts);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    computed: {
        tidyResponse() {
            return this.getResponse;
        },
        spicy() {
            return level => {
                switch (level) {
                    case 1:
                        return '不辣';
                    case 2:
                        return '小辣';
                    default:
                        return '大辣';
                }
            };
        },
        flavor() {
            return level => {
                switch (level) {
                    case 1:
                        return '梅粉';
                    case 2:
                        return '秘粉';
                    default:
                        return '椒鹽';
                }
            };
        },
        foodImage() {
            return this.getProducts.reduce((result, obj) => {
                const { productName, image } = obj;
                result[productName] = image;
                return result;
            }, {});
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang="scss">
.dot {
    width: 10px;
    height: 10px;
    background: gray;
    border-radius: 50%;

    &:nth-of-type(1) {
        left: 0px;
    }

    &:nth-of-type(2) {
        left: 25%;
    }

    &:nth-of-type(3) {
        left: 50%;
    }

    &:nth-of-type(4) {
        left: 75%;
    }

    &:nth-of-type(5) {
        left: 100%;
    }
}

.input-set {
    background: transparent;
    border: none;
}

.table th {
    min-width: 80px;
}

.textarea {
    background: #fcfcb8;
}

.w-70 {
    width: 70%;
}
</style>