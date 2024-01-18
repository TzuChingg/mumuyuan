<template>
  
    <div class="d-flex">
        <aside class="sidebar  border-5  border-end d-flex bg-white flex-column">
          <BackendFunctions></BackendFunctions>  
        </aside>
        <main class="main container">
          <div class="card mt-5 shadow-sm w-100 mb-3">
            <div class="card-body" v-for="(order,index) in order" :key="index">
              <div class="accordion accordion-flush " id="accordionFlushExample">
                <div class="accordion-item " >
                    <h2 class="accordion-header " :id="'flush-heading' + index">
                      <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne'+ index" aria-expanded="false" aria-controls="flush-collapseOne">
                          <strong class="me-5 fs-4">{{order.name}}</strong> <span class="ms-5 mt-11 fs-4">手機:{{order.phone}}</span>
                      </button>
                    </h2>
                    <div :id="'flush-collapseOne'+index" class="accordion-collapse collapse " :aria-labelledby="'flush-heading' + index" data-bs-parent="#accordionFlushExample" >
                        <div class="accordion-body" >     
                          <div class="row row-cols-2 " >
                            <div class="col d-flex flex-wrap h-25" >  
                                <div class="row row-cols-4 text-center  h-25" >
                                  <div class="col fs-3" v-for="(food,index) in order.food" :key="index">{{food}}</div>
                                </div>   
                              </div> 
                              <div class="col">
                                  <table class=" table table-striped align-middle table-sm h-100">
                                    <tbody>
                                      <tr>
                                        <td class="fs-5 "><strong>是否要餐具:</strong>{{ order.tableware ? "要":"不要" }}</td>
                                      </tr>
                                      <tr>
                                        <td class="fs-5"><strong>是否要加購提袋:</strong>{{order.bags ? "要":"不要"}}</td>
                                      </tr>
                                      <tr>
                                        <td class="fs-5"><strong>訂購方式:</strong>{{order.way}}</td>
                                      </tr>
                                      <tr>
                                        <td class="fs-5"><strong>預計取餐時間:</strong><span class="text-danger">{{order.time}}</span></td>
                                      </tr>
                                      <tr>
                                        <td class="fs-5"><strong>付款方式:</strong>{{order.payment}}</td>
                                      </tr>
                                      <tr>
                                        <td class="fs-5"><strong>總金額:</strong>{{order.total}}</td>
                                      </tr>
                                      <tr>
                                        <td class="fs-5"><strong>備註:</strong>{{ order.remark }}</td>
                                      </tr>
                                    </tbody>
                                    <tfoot>
                                      <button type="btn" class="btn btn-primary w-100 mb-1">接受</button>
                                    <button type="btn" class="btn btn-primary w-100 mt-1">拒絕</button>
                                    </tfoot>
                                  </table>
                              </div>
                          </div>  
                        </div>         
                    </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  

</template>
<!--   -->
<script>
import BackendFunctions from '/src/components/eric/BackendFunctions.vue';
export default {
  components: {
    BackendFunctions,
  },
  // 
  data() {
    return {
        order:[
          {
            name:"eric",
            phone:"09111111111",
            food:["牛肉","豬肉","青椒","豬血糕","百頁豆腐","雞肉","雞心","七里香","田不辣","小豆干","玉米","香腸","貢丸","棉花糖","番薯","麻糬","草蝦","蛤蠣","干貝"],
            tableware:true,
            bags:true,
            way:"自取", //可以用數字呈現
            time:"17:00",
            payment:"現金", //可以用數字呈現
            remark:"烤熟一點",
            total:600
          },
          {
            name:"eric",
            phone:"09111111111",
            food:["牛肉","豬肉","青椒","豬血糕","百頁豆腐","雞肉","雞心","七里香","田不辣","小豆干","玉米","香腸","貢丸","棉花糖","番薯","麻糬","草蝦","蛤蠣","干貝"],
            tableware:true,
            bags:true,
            way:"自取", //可以用數字呈現
            time:"17:00",
            payment:"現金", //可以用數字呈現
            remark:"烤熟一點",
            total:600
          },
        ]
    }
  },
  computed:{

  },
  methods:{

  }
};
</script>


<style lang="scss" scoped>

.d-flex {
    height: 100vh;
}

td {
  white-space: pre-line;
}
.sidebar {
flex: 0 0 auto;
width: 280px;
overflow: hidden;
transition: width 0.5s;
}

.main {
flex: 1; /* 让主要内容区域占据剩余的所有可用空间 */
overflow-y: auto;
width: 100%;
transition: width 0.5s, margin-left 0.5s;
}

.sidebar:not(:hover) {
width: 0;
}

.sidebar:hover {
width: 280px;

.main {
    width: calc(100vw - var(--sidebar-width));
    /* margin-left: 0; */
}
}
.reduce-spacing td {
        margin: 0;
        padding: 0px; /* 调整需要的内边距 */
    }
</style>

