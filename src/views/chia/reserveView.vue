<script>
export default {
    data() {
        return {
            periods: [], //按紐時段
            maxPeople: { //每個時段最多20位(可更改)
                '11:00': 20, '12:00': 20, '13:00': 20, '14:00': 20, '15:00': 20,
                '18:00': 20, '19:00': 20, '20:00': 20, '21:00': 20, '22:00': 20,
                '23:00': 20, '00:00': 20, '01:00': 20, '02:00': 20, '03:00': 20
            },
            remainPeople: { //各時段預定人數
                '11:00': 0, '12:00': 0, '13:00': 0, '14:00': 0, '15:00': 0,
                '18:00': 0, '19:00': 0, '20:00': 0, '21:00': 0, '22:00': 0,
                '23:00': 0, '00:00': 0, '01:00': 0, '02:00': 0, '03:00': 0
            },
            regexStatus: {
                name: false,
                personCount: false,
                phone: false,
                mail: false,
                day: false,
                time: false,
                agree: false
            },
            list: {
                name: '',
                personCount: '',
                phone: '',
                mail: '',
                day: '',
                time: '',
                isCheck: false
            },
            ageinCheck: false // 送出前再次確認
        }
    },
    created() {
        this.getReserveDay(); //抓往後3天
        this.getPeriods(); //抓各時段
    },
    methods: {
        getReserveDay() {
            const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
            const formatDate = date => {
                const year = date.getFullYear().toString();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const dayOfWeek = daysOfWeek[date.getDay()];
                return { date: `${year} / ${month} / ${day}`, day: `${dayOfWeek}` };
            };

            const getThreeDays = () => {
                const today = new Date();
                const threeDays = [];

                const todayFormatted = formatDate(today);
                threeDays.push(todayFormatted);

                for (let i = 1; i < 3; i++) {
                    const nextDay = new Date(today);
                    nextDay.setDate(today.getDate() + i);
                    threeDays.push(formatDate(nextDay));
                }

                return threeDays;
            };
            this.day = getThreeDays();
        },
        getPeriods() {
            this.$http.get(`http://localhost:3000/periods`)
                .then((response) => {
                    if (response.status === 200) {
                        this.periods = [...response.data];
                    };
                })
        },
        checkNumber() {
            const currentInput = this.list.phone;
            if (isNaN(currentInput)) {
                this.list.phone = currentInput.replace(/\D/g, "");
            }
        },
        async goReserve() {
            try {
                const check = await this.$http.get(`http://localhost:3000/bookingfrom?day=${this.list.day}&time=${this.list.time}`);
                const count = this.maxPeople[this.list.time]; // 當天該時段最多用餐人數
                const reduceCounnt = check.data.reduce((acc, cur) => { // 當天該時段已預定人數
                    return acc + cur["personCount"]
                }, 0);
                this.ageinCheck = (this.list.personCount - (count - reduceCounnt) <= 0) ? true : false;
            } catch (error) {
                this.ageinCheck = false;
                console.log(error);
            }

            if (this.allTrue || !this.ageinCheck) return;
            this.$http.post('http://localhost:3000/bookingfrom', {
                ...this.list
            }).then((response) => {
                if (response.status === 201) {
                    alert('訂位成功');
                    this.$router.push({ path: '/' });
                }
            })
        }
    },
    computed: {
        allTrue() {
            return (this.regexStatus.name &&
                this.regexStatus.personCount &&
                this.regexStatus.phone &&
                this.regexStatus.mail &&
                this.regexStatus.day &&
                this.regexStatus.time &&
                this.regexStatus.agree) ? false : true;
        },
    },
    watch: {
        "list.name": {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== '') this.regexStatus.name = true;
            }
        },
        "list.personCount": {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal > 10) this.list.personCount = 10;
                if (newVal < 1) this.list.personCount = 1;
                this.regexStatus.personCount = true;
            }
        },
        "list.phone": {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== '' && newVal.length === 10) this.regexStatus.phone = true;
            }
        },
        "list.mail": {
            deep: true,
            handler(newVal, oldVal) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const status = emailRegex.test(this.list.mail);
                this.regexStatus.mail = status ? true : false;
            }
        },
        "list.day": {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== '') this.regexStatus.day = true;
                this.$http.get(`http://localhost:3000/bookingfrom?day=${newVal}`)
                    .then((response) => {
                        if (response.status === 200) {
                            this.remainPeople = {
                                '11:00': 0, '12:00': 0, '13:00': 0, '14:00': 0, '15:00': 0,
                                '18:00': 0, '19:00': 0, '20:00': 0, '21:00': 0, '22:00': 0,
                                '23:00': 0, '00:00': 0, '01:00': 0, '02:00': 0, '03:00': 0
                            }

                            response.data.reduce((acc, curr) => {
                                const time = curr.time;
                                const personCount = curr.personCount;

                                acc[time] = (acc[time] || 0) + personCount;

                                return acc;
                            }, this.remainPeople);
                        }
                    })
            }
        },
        "list.time": {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== '') this.regexStatus.time = true;
            }
        }
    }
}
</script>
<template>
    <div class="reserve container">
        <div class="reserveContent">
            <form class="w-75 m-auto">
                <div class="row mb-3">
                    <h2 class="text-center fw-bolder fs-1 text-white py-5">即刻訂位</h2>
                    <div class="col-6">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="reserveName" v-model="list.name">
                            <label for="reserveName">預約人</label>
                            <div v-if="list.name != ''">
                                <span v-if="regexStatus.name" class="text-success">✔</span>
                                <span v-else class="text-danger">✘</span>
                            </div>
                        </div>
                        <div class="form-floating">
                            <input type="number" min="1" max="10" class="form-control" id="reservepersonCount"
                                v-model="list.personCount">
                            <label for="reservepersonCount">預約人數</label>
                            <div v-if="list.personCount != ''">
                                <span v-if="regexStatus.personCount" class="text-success">✔</span>
                                <span v-else class="text-danger">✘</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <select class="form-select form-select-lg p-2" aria-label="Default select example"
                            v-model="list.day">
                            <option value="" selected disabled>選擇時段</option>
                            <option v-for="i in day" :key="i.day" :value="i.date.replaceAll(' ', '')">
                                {{ `${i.date} (${i.day})` }}
                            </option>
                        </select>
                        <div v-if="list.day != ''">
                            <span v-if="regexStatus.day" class="text-success">✔</span>
                            <span v-else class="text-danger">✘</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="reservePhone" maxlength="10" v-model="list.phone"
                                @input="checkNumber">
                            <label for="reservePhone">聯絡電話</label>
                            <div v-if="list.phone != ''">
                                <span v-if="regexStatus.phone" class="text-success">✔</span>
                                <span v-else class="text-danger">✘</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="mail" class="form-control" id="reserveMail" v-model="list.mail">
                            <label for="reserveMail">信箱</label>
                            <div v-if="list.mail != ''">
                                <span v-if="regexStatus.mail" class="text-success">✔</span>
                                <span v-else class="text-danger">✘</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="timeContent m-auto py-3">
                <p class="fs-3 fw-bolder text-dark">剩餘座位</p>
                <div class="row" role="group" aria-label="Basic radio toggle button group">
                    <div class="col-lg-3 col-sm-6 text-center my-3" v-for="(time, idx) in periods">
                        <input type="radio" class="btn-check" name="time" :id="time" :value="time" v-model="list.time"
                            autocomplete="off">
                        <label class="btn btn-outline-dark w-75" :for="time">{{ time }}
                            ({{ maxPeople[time] - remainPeople[time] }})</label>
                    </div>
                </div>
            </div>
            <div class="notice w-50 py-4 m-auto">
                <p class="my-1 fs-5">注意事項</p>
                <ul class="list fs-5">
                    <li>現場保留時間為10分，請客人盡早準時抵達</li>
                    <li>人數異動、臨時取消，請提前告知店家，避免影響雙方權益</li>
                    <li>響應食材不浪費，離開前如有浪費食物疑慮，即額外收取相關費用</li>
                </ul>
                <div class="d-flex align-items-center">
                    <input type="checkbox" name="agree" id="agree" class="agree d-inline-block mx-2"
                        v-model="this.regexStatus.agree">
                    <label class="my-4 fs-5 d-inline-block" for="agree">本人已詳細閱讀注意事項，並遵守用餐相關規定。</label>
                </div>
                <button type="button" class="d-block btn btn-dark mx-auto my-5 py-2 px-3" @click="goReserve"
                    :disabled="allTrue">送出預定</button>
            </div>
            <div class="imgContent pt-5">
                <img src="https://picsum.photos/id/10/700/300" alt="" class="col-4">
                <img src="https://picsum.photos/id/20/700/300" alt="" class="col-4">
                <img src="https://picsum.photos/id/30/700/300" alt="" class="col-4">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.reserve {
    cursor: default;

    .reserveContent {
        background: #d8d0ae;

        .timeContent {
            width: 65%;
        }

        .list {
            list-style-type: auto;
        }

        .agree {
            width: 20px;
            height: 20px;
        }

        .imgWidth {
            width: 25%;
        }
    }
}
</style>