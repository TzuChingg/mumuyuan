<script>
import searchOrder from "../../components/chia/searchOrder.vue";
import searchSeat from "../../components/chia/searchSeat.vue";
export default {
    data() {
        return {
            userInput: {
                phone: '',
                mail: '',
            },
            radioToggle: '',
            getResponse: [],
        }
    },
    methods: {
        startSearch() {
            if (this.userInput.phone.trim() === '' ||
                this.userInput.mail.trim() === '' ||
                this.radioToggle === '') return;
            this.$axios.get(`/${this.radioToggle}?phone=${this.userInput.phone}&mail=${this.userInput.mail}`)
                .then((response) => {
                    if (response.status !== 200 || response.data.length === 0) return;
                    this.getResponse = [...response.data];
                })
        }
    },
    computed: {
        controlBtn() {
            return (this.userInput.phone.trim() === '' ||
                this.userInput.mail.trim() === '' ||
                this.radioToggle === '') ? true : false;
        },
        showOrder() {
            return (this.userInput.phone.trim() !== '' &&
                this.userInput.mail.trim() !== '' &&
                this.radioToggle === 'orders' &&
                this.getResponse.length !== 0) ? true : false;
        },
        showSeat() {
            return (this.userInput.phone.trim() !== '' &&
                this.userInput.mail.trim() !== '' &&
                this.radioToggle === 'bookingfrom' &&
                this.getResponse.length !== 0) ? true : false;
        }
    },
    components: {
        searchOrder,
        searchSeat
    }
}
</script>
<template>
    <div class="search container">
        <div class="searchContent">
            <h2 class="text-center fw-bolder fs-1 text-white py-5">訂單/訂位查詢</h2>
            <div class="d-flex flex-column w-70 m-auto">
                <div class="mb-3 col-4 fs-4">
                    <label for="mumuyuanPhone" class="form-label fw-bolder">手機</label>
                    <input type="email" class="form-control" id="mumuyuanPhone" placeholder="user phone"
                        v-model="userInput.phone">
                </div>
                <div class="mb-4 col-4 fs-4">
                    <label for="mumuyuanMail" class="form-label fw-bolder">信箱</label>
                    <input type="text" class="form-control" id="mumuyuanMail" placeholder="user mail"
                        v-model="userInput.mail">
                </div>
            </div>
            <div class="radioContent w-70 m-auto mb-4 d-flex align-items-center">
                <div class="form-check mb-0 me-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="orders"
                        v-model="radioToggle">
                    <label class="form-check-label fs-5" for="exampleRadios1">
                        訂單
                    </label>
                </div>
                <div class="form-check mb-0 me-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                        value="bookingfrom" v-model="radioToggle">
                    <label class="form-check-label fs-5" for="exampleRadios2">
                        訂位
                    </label>
                </div>
                <button type="button" class="btn btn-dark" :disabled="controlBtn" @click="startSearch">查詢</button>
            </div>
            <div class="min-heigth">
                <searchOrder v-if="showOrder" :getResponse="getResponse"/>
                <searchSeat v-if="showSeat" :getResponse="getResponse" />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.search {
    cursor: default;

    .searchContent {
        background: #d8d0ae;

        #exampleRadios1,
        #exampleRadios2 {
            width: 20px;
            height: 20px;
        }

        .w-70 {
            width: 70%;
        }

        .min-heigth {
            min-height: 300px;
        }
    }
}
</style>