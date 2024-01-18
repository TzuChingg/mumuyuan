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
            radioToggle: 'order'
        }
    },
    created() {

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
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="order"
                        v-model="radioToggle">
                    <label class="form-check-label fs-5" for="exampleRadios1">
                        訂單
                    </label>
                </div>
                <div class="form-check mb-0 me-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="seat"
                        v-model="radioToggle">
                    <label class="form-check-label fs-5" for="exampleRadios2">
                        訂位
                    </label>
                </div>
                <button type="button" class="btn btn-dark">查詢</button>
            </div>
            <searchOrder v-if="radioToggle == 'order'" />
            <searchSeat v-else />
        </div>
    </div>
</template>
<style scoped lang="scss">
.search {
    cursor: default;
    min-height: 100vh;

    .searchContent {
        background: #918a8a;

        #exampleRadios1,
        #exampleRadios2 {
            width: 20px;
            height: 20px;
        }

        .w-70 {
            width: 70%;
        }
    }
}
</style>