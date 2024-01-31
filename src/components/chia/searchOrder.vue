<template>
    <div class="accordion w-70 m-auto mb-5" :id="'accordionExample' + index">
        <div class="accordion-item" v-for="(obj, index) in tidyResponse" :key="index">
            <h2 class="accordion-header" :id="'headingOne' + index">
                <div class="p-3  accordion-button collapsed " data-bs-toggle="collapse"
                    :data-bs-target="'#collapseOne' + index" aria-expanded="true" :aria-controls="'collapseOne' + index">
                    <p class="mb-0 fs-5 fw-bolder me-5">訂單編號 : {{ obj.day + '-' + obj.id }}</p>
                    <p class="mb-0 fs-5 fw-bolder">日期 {{ obj.day }}</p>
                </div>
            </h2>
            <div :id="'collapseOne' + index" class="accordion-collapse collapse" :aria-labelledby="'headingOne' + index">
                <div class="accordion-body">
                    <div class="status mb-3">
                        <p class="fs-4 fw-bolder text-center text-muted mb-4">出餐狀態</p>
                        <div class="progress " style="height: 35px;" >
                            <div class="progress-bar progress-bar-striped progress-bar-animated  fs-4 " role="progressbar" aria-valuenow="75" aria-valuemin="0"  aria-valuemax="100" ref="loading" ></div>
                        </div>
                    </div>
                    <table class="table table-borderless fs-5">
                        <thead>
                            <tr>
                                <th class="col-1">圖片</th>
                                <th class="col-2">品項</th>
                                <!-- <th class="col-7">介紹</th> -->
                                <th class="col-1">數量</th>
                                <th class="col-1">金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(food,index) in obj.product" :key="index">
                                <td><img style="width: 60px;" :src="food.image" alt=""></td>
                                <td class="fs-5">{{ food.name }}</td>
                                <td>{{ food.quantity }}</td>
                                <td>{{ food.quantity * food.price }}</td>
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
                                <input class="col input-set" type="text" :value="obj.day" disabled readonly>
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
import { docCookies } from '../../assets/cookie';

export default {
    props: ["getResponse"],
    data() {
        return {
            getProducts: [],
            socket:null,
            status: 0,
        }
    },
    created() {

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
    },
    watch:{
        status(){
            const loadingElement = this.$refs.loading[0];
            if(this.status == 1){
                loadingElement.classList.add('wait');
                loadingElement.innerText = '待接單';
            }else if (this.status == 2) {
                loadingElement.classList.add('wait2');
                loadingElement.classList.remove('wait');
                loadingElement.innerText = '準備中';
            } else if (this.status == 3) {
                loadingElement.classList.add('wait3');
                loadingElement.classList.remove('wait2');
                loadingElement.classList.remove('wait');
                loadingElement.innerText = '餐點完成';
            }
        }
    },
    methods:{

    },
    mounted(){
        this.socket = new WebSocket('ws://localhost:8080/ws');
        let ids = []
        this.getResponse.forEach(id=>{
            ids.push(id.orderid)
        })
        this.socket.onmessage = (event) => {
        const receivedData = JSON.parse(event.data);
            if (ids.includes(receivedData.id)) {
                this.status = receivedData.data;
            }
        };
        this.status = this.getResponse[0].status
        const loadingElement = this.$refs.loading[0];
            if(this.status == 1){
                loadingElement.classList.add('wait');
                loadingElement.innerText = '待接單';
            }else if (this.status == 2) {
                loadingElement.classList.add('wait2');
                loadingElement.classList.remove('wait');
                loadingElement.innerText = '準備中';
            } else if (this.status == 3) {
                loadingElement.classList.add('wait3');
                loadingElement.classList.remove('wait2');
                loadingElement.classList.remove('wait');
                loadingElement.innerText = '餐點完成';
            }
    },
    beforeUnmount() {
    // Close the WebSocket connection when the component is destroyed
    if (this.socket) {
        this.socket.close();
    }
    },
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

.wait{
    width: 10%
}
.wait2{
    width: 50%
}
.wait3{
    width: 100%
}
</style>