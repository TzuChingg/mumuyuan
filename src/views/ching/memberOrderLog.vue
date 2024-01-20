<template>
  <div>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-3 border-end">
              <div class="logoCard d-flex justify-content-center mb-2">
                <img class="rounded-circle mt-2" src="/logoCard.jpg" alt="" style="height: 100px" />
              </div>
              <div class="btn-group-vertical d-flex justify-content-center">
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/memberCenter" class="d-block link-underline link-underline-opacity-0">會員中心</a>
                </button>
                <button class="btn btn-outline-primary active" type="button">
                  <a href="#/member/orderLog" class="d-block text-light link-underline link-underline-opacity-0">歷史訂單</a>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/member/discount" class="d-block link-underline link-underline-opacity-0">我的優惠券</a>
                </button>
                <button class="btn btn-outline-primary" type="button">
                  <a href="#/member/exchange" class="d-block link-underline link-underline-opacity-0">點數兌換</a>
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
                  <div class="accordion mb-4" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="itemImg accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <img src="/14.jpg" alt="" />
                          <div class="row ms-2">
                            <div class="col-12">6 份餐點 $637 <span class="ms-5">已完成</span></div>
                            <div class="col-12">
                              <span>2024年1月20日</span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
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
                              <tr>
                                <td>干貝捲牛肉</td>
                                <td>2</td>
                                <td>45</td>
                                <td>90</td>
                              </tr>
                              <tr>
                                <td>帝王蟹味棒</td>
                                <td>3</td>
                                <td>49</td>
                                <td>147</td>
                              </tr>
                              <tr>
                                <td>剝皮辣椒豬捲</td>
                                <td>4</td>
                                <td>45</td>
                                <td>180</td>
                              </tr>
                              <tr>
                                <td>豆干</td>
                                <td>2</td>
                                <td>25</td>
                                <td>50</td>
                              </tr>
                              <tr>
                                <td>花椰菜</td>
                                <td>1</td>
                                <td>35</td>
                                <td>35</td>
                              </tr>
                              <tr>
                                <td>牛小排</td>
                                <td>3</td>
                                <td>45</td>
                                <td>135</td>
                              </tr>
                            </tbody>
                            <tfoot class="table-group-divider">
                              <td></td>
                              <td colspan="2">總計</td>
                              <td>637</td>
                            </tfoot>
                          </table>
                          <div class="col-12 d-flex justify-content-between">
                            <span>rating</span>
                            <button class="btn btn-primary btn-sm">再次訂購</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- accordion End -->
                  <!-- accordion 2 -->
                  <div class="accordion mb-4" id="accordionExample2">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="itemImg accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <img src="/11.jpg" alt="" />
                          <div class="row ms-2">
                            <div class="col-12">4 份餐點 $290 <span class="ms-5">已完成</span></div>
                            <div class="col-12">
                              <span>2024年1月18日</span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2">
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
                              <tr>
                                <td>醬烤雞心</td>
                                <td>4</td>
                                <td>35</td>
                                <td>140</td>
                              </tr>
                              <tr>
                                <td>花枝丸</td>
                                <td>1</td>
                                <td>30</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>炸豆包串</td>
                                <td>2</td>
                                <td>30</td>
                                <td>60</td>
                              </tr>
                              <tr>
                                <td>四季豆</td>
                                <td>2</td>
                                <td>30</td>
                                <td>60</td>
                              </tr>
                            </tbody>
                            <tfoot class="table-group-divider">
                              <td></td>
                              <td colspan="2">總計</td>
                              <td>290</td>
                            </tfoot>
                          </table>
                          <div class="col-12 d-flex justify-content-between">
                            <span>rating</span>
                            <button class="btn btn-primary btn-sm">再次訂購</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- accordion 2 End -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
button:hover {
  a {
    color: white;
  }
}

.itemImg {
  img {
    object-fit: cover;
    height: 40px;
  }
}

.questionIcon:hover {
  cursor: pointer;
}</style>
