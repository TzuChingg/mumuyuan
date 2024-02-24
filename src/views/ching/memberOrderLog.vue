<template>
  <div>
    <div class="memberorder container py-5">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="btn-group-vertical d-flex justify-content-center mt-5">
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/memberCenter"
                    class="d-block link-underline link-underline-opacity-0 ">會員中心</router-link>
                </button>
                <button class="btn btn-outline-primary active" type="button">
                  <router-link to="/member/orderLog"
                    class="d-block text-light link-underline link-underline-opacity-0">歷史訂單</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/discount"
                    class="d-block link-underline link-underline-opacity-0">我的優惠券</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/member/exchange"
                    class="d-block link-underline link-underline-opacity-0">點數兌換</router-link>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <router-link to="/" class="d-block link-underline link-underline-opacity-0"
                    @click="signOut">登出</router-link>
                </button>
              </div>
            </div>
            <div class="col-9">
              <h3 class="text-center">歷史訂單</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="col-11 mb-4">
                  <h5>歷史訂單</h5>
                  <hr />
                  <!-- accordion -->
                  <div class="accordion mb-4" v-for="(item, index) in finishOrder" :key="index" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="itemImg accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          :data-bs-target="'#index' + item.orderid" aria-expanded="false"
                          :aria-controls="'index' + item.orderid">
                          <img src="/14.jpg" alt="" />
                          <div class="row ms-2">
                            <div class="col-12">{{ item.product.length }} 份餐點 ${{ item.price }} <span
                                class="ms-5">已完成</span></div>
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
                                <th scope="col">品項</th>
                                <th scope="col">數量</th>
                                <th scope="col">單價</th>
                                <th scope="col">總價</th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                              <tr v-for="food in item.product" :key="food">
                                <td>{{ food.name }}</td>
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
                          <!-- model -->
                          <div class="modal fade" :id="'star' + index" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">0
                            <div class="modal-dialog">
                              <div class="modal-content border-0">
                                <div class="modal-body fs-3">
                                  感謝你為單號[ {{ item.orderid }} ]評價了{{ star }}顆星
                                </div>
                                <textarea id="title" placeholder="請寫下建議內容"
                                  class="form-control border-1 shadow-none w-50 ms-4" v-model="ScoreText"></textarea>
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
                  <!-- accordion End -->
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
import { docCookies } from '../../assets/cookie';

export default {
  data() {
    return {
      finishOrder: [],
      ScoreText: "",
      star: 0,
    }
  },
  created() {

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
    signOut() {
      docCookies.removeItem("token");
      docCookies.removeItem("identity");
      docCookies.removeItem("id");
      window.location.href = "/"; 
    },
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
@import '/src/assets/main.scss';

.memberorder {
  min-height: calc(100vh - 174px);

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
        color: $primary; // 使用你定义的 $primary 变量
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
        color: $primary; // Assuming you have a variable $primary defined
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
