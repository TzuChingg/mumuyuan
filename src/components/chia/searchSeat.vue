<template>
    <div class="w-70 m-auto table-responsive">
        <table class="table fs-5  align-middle">
            <thead class="table-danger">
                <tr>
                    <th scope="col">訂單編號</th>
                    <th scope="col">訂位人</th>
                    <th scope="col">人數</th>
                    <th scope="col">時段</th>
                    <th scope="col">日期</th>
                    <th scope="col">取消訂位</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1031212-1</th>
                    <td>Mark</td>
                    <td>5</td>
                    <td>13:00 PM</td>
                    <td>01/18 (四)</td>
                    <td><button type="button" class="btn btn-primary">取消</button></td>
                </tr>
                <tr>
                    <th>1031212-2</th>
                    <td>Tommy</td>
                    <td>2</td>
                    <td>11:00 AM</td>
                    <td>01/19 (五)</td>
                    <td><button type="button" class="btn btn-primary">取消</button></td>
                </tr>
                <tr>
                    <th>1031212-3</th>
                    <td>Sun</td>
                    <td>10</td>
                    <td>17:00 PM</td>
                    <td>01/20 (六)</td>
                    <td><button type="button" class="btn btn-primary">取消</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="notice w-50 py-4 m-auto">
        <p class="my-0 fs-5">注意事項</p>
        <ul class="list fs-5">
            <li>現場保留時間為10分，請客人盡早準時抵達。</li>
            <li>人數異動、臨時取消，請提前告知店家，避免影響雙方權益</li>
            <li>響應食材不浪費，離開前如有浪費食物疑慮，即額外收取相關費用</li>
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