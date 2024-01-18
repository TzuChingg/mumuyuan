<template>
    <div class="accordion w-70 m-auto mb-5" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <div class="p-3  accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    <p class="mb-0 fs-5 fw-bolder mb-2">訂單編號 : 1130103-1</p>
                    <p class="mb-0 fs-5 fw-bolder">日期 1130103</p>
                </div>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-borderless fs-5">
                        <thead>
                            <tr>
                                <th colspan="5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="1">七里香</td>
                                <td colspan="1">蜜粉不辣</td>
                                <td colspan="1">x1</td>
                                <td colspan="1">$ 25</td>
                                <td colspan="1"></td>
                            </tr>
                            <tr>
                                <td colspan="1">豆干</td>
                                <td colspan="1">蜜粉不辣</td>
                                <td colspan="1">x2</td>
                                <td colspan="1">$ 50</td>
                                <td colspan="1"></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                    <div class="text-end px-4 fs-5 mb-2">優惠券:<span class="ps-3">xxx券</span></div>
                    <div class="text-end px-4 fs-5">總金額<span class="ps-3">$ 60</span></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <div class="p-3  accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <p class="mb-0 fs-5 fw-bolder mb-2">訂單編號 : 1130103-1</p>
                    <p class="mb-0 fs-5 fw-bolder">日期 1130103</p>
                </div>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-borderless fs-5">
                        <thead>
                            <tr>
                                <th colspan="5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="1">七里香</td>
                                <td colspan="1">蜜粉不辣</td>
                                <td colspan="1">x1</td>
                                <td colspan="1">$ 25</td>
                                <td colspan="1"></td>
                            </tr>
                            <tr>
                                <td colspan="1">豆干</td>
                                <td colspan="1">蜜粉不辣</td>
                                <td colspan="1">x2</td>
                                <td colspan="1">$ 50</td>
                                <td colspan="1"></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                    <div class="text-end px-4 fs-5 mb-2">優惠券:<span class="ps-3">xxx券</span></div>
                    <div class="text-end px-4 fs-5">總金額<span class="ps-3">$ 60</span></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <div class="p-3 accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    <p class="mb-0 fs-5 fw-bolder mb-2">訂單編號 : 1130103-1</p>
                    <p class="mb-0 fs-5 fw-bolder">日期 1130103</p>
                </div>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-borderless fs-5">
                        <thead>
                            <tr>
                                <th colspan="5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="1">七里香</td>
                                <td colspan="1">蜜粉不辣</td>
                                <td colspan="1">x1</td>
                                <td colspan="1">$ 25</td>
                                <td colspan="1"></td>
                            </tr>
                            <tr>
                                <td colspan="1">豆干</td>
                                <td colspan="1">蜜粉不辣</td>
                                <td colspan="1">x2</td>
                                <td colspan="1">$ 50</td>
                                <td colspan="1"></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                    <div class="text-end px-4 fs-5 mb-2">優惠券:<span class="ps-3">xxx券</span></div>
                    <div class="text-end px-4 fs-5">總金額<span class="ps-3">$ 60</span></div>
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

}
</script>

<style scoped lang="scss">
.w-70 {
    width: 70%;
}
</style>