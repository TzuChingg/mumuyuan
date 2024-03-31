<script>
import { docCookies } from '@/assets/cookie'
export default {
  data() {
    return {
      periods: [],
      day: [],
      maxPeople: {
        '11:00': 20, '12:00': 20, '13:00': 20, '14:00': 20, '15:00': 20,
        '18:00': 20, '19:00': 20, '20:00': 20, '21:00': 20, '22:00': 20,
        '23:00': 20, '00:00': 20, '01:00': 20, '02:00': 20, '03:00': 20
      },
      remainPeople: {
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
      ageinCheck: false
    }
  },
  created() {
    if (docCookies.getItem('identity') === 'baduser') {
      this.$swal.fire({
        icon: "warning",
        title: "警告!!!",
        text: "您目前處於黑名單，",
        footer: '如有疑問請詢問相關人員，謝謝。'
      }).then(() => {
        this.$router.push('/')
      });
      return
    }
    this.getReserveDay();
    this.getPeriods();
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
      this.$axios.get(`/periods`)
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
        const check = await this.$axios.get(`/bookingfrom?day=${this.list.day}&time=${this.list.time}`);
        const count = this.maxPeople[this.list.time];
        const reduceCounnt = check.data.reduce((acc, cur) => {
          return acc + cur["personCount"]
        }, 0);
        this.ageinCheck = (this.list.personCount - (count - reduceCounnt) <= 0) ? true : false;
      } catch (error) {
        this.ageinCheck = false;
        console.error(error);
      }

      if (this.allTrue || !this.ageinCheck) {
        this.$swal({
          icon: 'error',
          title: '訂位失敗',
          text: '欄位請填寫完整',
          timer: 2000
        })
        return
      };

      this.$axios.post('/bookingfrom', {
        ...this.list
      }).then((response) => {
        if (response.status === 201) {
          this.$swal({
            icon: 'success',
            title: '訂位成功',
            text: '待返回首頁',
            timer: 2000
          }).then(() => {
            this.$router.push({ path: '/' });
          });
        }
      }).catch(() => {
        this.$swal({
          icon: 'error',
          title: '訂位失敗',
          text: '請稍後再試',
          timer: 2000
        }).then(() => {
          window.location.href = import.meta.env.VITE_BASE;
        });
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
      handler(newVal) {
        if (newVal !== '') this.regexStatus.name = true;
      }
    },
    "list.personCount": {
      deep: true,
      handler(newVal) {
        if (newVal > 10) this.list.personCount = 10;
        if (newVal < 1) this.list.personCount = 1;
        this.regexStatus.personCount = true;
      }
    },
    "list.phone": {
      deep: true,
      handler(newVal) {
        if (newVal !== '' && newVal.length === 10) this.regexStatus.phone = true;
      }
    },
    "list.mail": {
      deep: true,
      handler() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const status = emailRegex.test(this.list.mail);
        this.regexStatus.mail = status ? true : false;
      }
    },
    "list.day": {
      deep: true,
      handler(newVal) {
        if (newVal !== '') this.regexStatus.day = true;
        this.$axios.get(`/bookingfrom?day=${newVal}`)
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
      handler(newVal) {
        if (newVal !== '') this.regexStatus.time = true;
      }
    }
  }
}
</script>

<template>
  <div class="reserve container">
    <div class="reserveContent col-lg-10 m-auto">
      <form>
        <div class="row">
          <h2 class="text-center fw-bolder fs-1 text-white py-5">即刻訂位</h2>
          <div class="col-lg-6 col-md-12">
            <div class="form-floating mb-1" style="height: 85px;">
              <input type="text" class="form-control" id="reserveName" v-model="list.name">
              <label for="reserveName">預約人</label>
              <div v-if="list.name != ''">
                <span v-if="regexStatus.name" class="text-success">✔</span>
                <span v-else class="text-danger">✘</span>
              </div>
            </div>
            <div class="form-floating mb-1" style="height: 85px;">
              <input type="number" min="1" max="10" class="form-control" id="reservepersonCount"
                v-model="list.personCount">
              <label for="reservepersonCount">預約人數(最多10位)</label>
              <div v-if="list.personCount != ''">
                <span v-if="regexStatus.personCount" class="text-success">✔</span>
                <span v-else class="text-danger">✘</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 form-floating" style="height: 85px;">
            <select class="form-select form-select-lg fs-4 p-2" aria-label="Default select example" v-model="list.day">
              <option value="" selected disabled></option>
              <option v-for="i in day" :key="i.day" :value="i.date.replaceAll(' ', '')">
                {{ `${i.date} (${i.day})` }}
              </option>
            </select>
            <label style="left: 10px;" v-if="list.day == ''">選擇時段</label>
            <div v-if="list.day != ''">
              <span v-if="regexStatus.day" class="text-success">✔</span>
              <span v-else class="text-danger">✘</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="form-floating mb-1" style="height: 85px;">
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
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="form-floating mb-1" style="height: 85px;">
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
      <div class="timeContent m-auto py-3" v-if="list.day !== ''">
        <p class="fs-3 fw-bolder text-dark">剩餘座位</p>
        <div class="row" role="group" aria-label="Basic radio toggle button group">
          <div class="col-lg-3 col-md-6 col-sm-12 text-center my-3" v-for="(time, idx) in periods" :key="idx">
            <input type="radio" class="btn-check" name="time" :id="time" :value="time" v-model="list.time"
              autocomplete="off" :disabled="list.personCount >= maxPeople[time] - remainPeople[time] ? true : false">
            <label class="btn btn-outline-dark w-75" :for="time">{{ time }}
              ({{ maxPeople[time] - remainPeople[time] }})</label>
          </div>
        </div>
      </div>
      <div class="notice col-lg-6 col-md-10 pt-4  m-auto text-start">
        <div class="mb-3">
          <p class="my-1 fs-4 fw-bolder text-dark">注意事項</p>
          <ul class="list fs-5 text-dark">
            <li>現場保留時間為10分，請客人盡早準時抵達</li>
            <li>人數異動、臨時取消，請提前告知店家，避免影響雙方權益</li>
            <li>響應食材不浪費，離開前如有浪費食物疑慮，即額外收取相關費用</li>
          </ul>
          <div class="d-flex align-items-center">
            <input type="checkbox" name="agree" id="agree" class="agree mx-2" v-model="this.regexStatus.agree">
            <label class="my-4 fs-5 fw-bolder text-dark" for="agree">本人已詳細閱讀注意事項，並遵守用餐相關規定。</label>
          </div>
        </div>
        <button type="button" class="d-block btn btn-dark mx-auto mb-5 py-2 px-3" @click="goReserve"
          :disabled="allTrue">送出預定</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reserve {
  cursor: default;

  .reserveContent {
    background: #d8d0ae;

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
