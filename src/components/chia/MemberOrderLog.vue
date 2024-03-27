<template>
  <h3 class="text-center text-dark" style="font-weight: 600;letter-spacing: 2px;">歷史訂單</h3>
  <hr />
  <div class="row justify-content-center memberorder">
    <div class="col-12 mb-4">
      <h5 class="text-primary fw-bolder" style="letter-spacing: 1px;">歷史訂單</h5>
      <hr />
      <div class="accordion mb-4" v-for="(item, index) in finishOrder" :key="index" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="itemImg accordion-button collapsed" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#index' + item.orderid" aria-expanded="false" :aria-controls="'index' + item.orderid">
              <img src="\首頁圖片\title-illustration-left-brown.png" alt="左串燒icon" />
              <div class="row ms-2">
                <div class="col-12">{{ item.product.length }} 份餐點 ${{ item.price }} <span class="ms-5">已完成</span></div>
                <div class="col-12">
                  <span>{{ item.day }}</span>
                </div>
              </div>
            </button>
          </h2>
          <div :id="'index' + item.orderid" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th class="col-2">品項</th>
                    <th class="col-1">數量</th>
                    <th class="col-1">單價</th>
                    <th class="col-1">總價</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="food in item.product" :key="food">
                    <td>{{ food.productName }}</td>
                    <td>{{ food.quantity }}</td>
                    <td>{{ food.price }}</td>
                    <td>{{ food.quantity * food.price }}</td>
                  </tr>
                </tbody>
                <tfoot class="table-group-divider">
                  <td></td>
                  <td colspan="2" class="p-1">總計(含優惠券使用)</td>
                  <td class="p-1">{{ item.price }}</td>
                </tfoot>
              </table>
              <div v-if="!item.score" class="col-12 d-flex justify-content-between">
                <span>
                  <div className="box">
                    <input type="radio" name="star" :id="'score5' + index" value="5" data-bs-toggle="modal"
                      :data-bs-target="'#star' + index" v-model="star" />
                    <label class="star" :for="'score5' + index"></label>
                    <input type="radio" name="star" :id="'score4' + index" value="4" data-bs-toggle="modal"
                      :data-bs-target="'#star' + index" v-model="star" />
                    <label class="star" :for="'score4' + index"></label>
                    <input type="radio" name="star" :id="'score3' + index" value="3" data-bs-toggle="modal"
                      :data-bs-target="'#star' + index" v-model="star" />
                    <label class="star" :for="'score3' + index"></label>
                    <input type="radio" name="star" :id="'score2' + index" value="2" data-bs-toggle="modal"
                      :data-bs-target="'#star' + index" v-model="star" />
                    <label class="star" :for="'score2' + index"></label>
                    <input type="radio" name="star" :id="'score1' + index" value="1" data-bs-toggle="modal"
                      :data-bs-target="'#star' + index" v-model="star" />
                    <label class="star " :for="'score1' + index"></label>
                  </div>
                  <p class="ms-4 text-success">{歡迎評價}</p>
                </span>
                <button class="btn btn-primary btn-sm  ">再次訂購</button>
              </div>
              <div v-if="item.score" class="col-12 d-flex justify-content-end">
                <button class="btn btn-primary btn-sm  ">再次訂購</button>
              </div>
              <div class="modal fade" :id="'star' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">0
                <div class="modal-dialog">
                  <div class="modal-content border-0">
                    <div class="modal-body fs-3">
                      感謝你為單號[ {{ item.orderid }} ]評價了{{ star }}顆星
                    </div>
                    <textarea id="title" placeholder="請寫下建議內容" class="form-control border-1 shadow-none w-50 ms-4"
                      v-model="ScoreText"></textarea>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click=" pushScore(item.id, star)">確認送出</button>
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
<script>
import { docCookies } from "@/assets/cookie.js";
export default {
  data() {
    return {
      finishOrder: [],
      ScoreText: "",
      star: 0,
    }
  },
  mounted() {
    this.$axios.get(`/orders?userId=${docCookies.getItem('id')}&status=3`)
      .then(res => {
        if (res.status === 200) {
          this.finishOrder = res.data;
        }
      })
  },
  methods: {
    pushScore(itemId, score) {
      let data = { "star": score, "ScoreText": this.ScoreText, "orderId": `${itemId}` }
      let data2 = { score: `${score}` }
      this.$axios.post('/scores', data)
      this.$axios.patch(`/orders/${itemId}`, data2)
      location.reload();
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/main.scss';

.memberorder {
  button:hover {
    a {
      color: white;
    }
  }

  .questionIcon:hover {
    cursor: pointer;
  }
}

.itemImg {
  img {
    object-fit: cover;
    height: 40px;
  }
}

.box {
  >label {
    user-select: none;
    font-size: 30px;

    &:after {
      content: '☆';
    }
  }

  >input {
    display: none;

    &:checked {
      ~label:after {
        content: '★';
        color: $primary;
      }
    }
  }

  display: inline-flex;
  flex-direction: row-reverse;

  >label {
    user-select: none;
    font-size: 30px;

    &:hover {
      cursor: pointer;

      &:after {
        content: '★';
        color: $primary;
      }

      ~label {
        &:after {
          content: '★';
          color: $primary;
        }
      }
    }
  }

  >input {
    display: none;
  }
}
</style>
