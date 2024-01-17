<template>
   

  <div class="d-flex ">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
    <main class="main mt-3">
      <div class="container ">
        <div class="mt-2">
            <button type="button" class="btn btn-primary">新增商品</button>
        </div>
          <div class="row row-cols-4 mb-4" >
            <div class="col" v-for="(product,index) in thisPage" :key="index">
              <div class="card mt-3" >
                  <div class="cardbody">
                                  <h4 class=" text-center mt-4">{{product.title}}</h4>
                                  <div class="row px-3 justify-content-center align-items-center py-3">
                                      <div class="col-4 fs-4 ">
                                          <label for="money" class="ms-3">價錢:</label>
                                      </div>
                                      <div class="col-6 ">
                                          <input type="number" id="money" class="form-control shadow-none" :placeholder="product.money">
                                      </div>
                                  </div>
                                  <div class="row text-center align-items-center py-3">
                                      <div class="col-6  ">
                                          <button type="button" class="btn btn-danger ms-6">下架</button>
                                      </div>
                                      <div class="col-6 ">
                                          <button type="button" class="btn btn-primary me-6">修改</button>
                                      </div>
                                  </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center h-25">
                        <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
                        <strong class="fs-3 text-primary mx-3 "> {{ page }} </strong>
                        <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">下一页</button>
          </div>
      </div>
    </main>
  </div>

  
</template>

<script>
import BackendFunctions from '/src/components/eric/BackendFunctions.vue';

export default {
data() {
  return {
    product:[
      {id:1,title:"青椒",money:50,},
      {id:2,title:"牛肉",money:90,},
      {id:3,title:"貢丸",money:45,},
      {id:4,title:"小豆干",money:45,},
      {id:5,title:"干貝",money:45,},
      {id:6,title:"草蝦",money:45,},
      {id:7,title:"百頁豆腐",money:45,},
      {id:8,title:"雞肉丸",money:45,},
      {id:9,title:"豬肉",money:45,},
      {id:10,title:"豬血糕",money:45,},
      {id:11,title:"魷魚",money:45,},
      {id:12,title:"雞蛋豆腐",money:45,},
      {id:13,title:"雞蛋豆腐",money:45,},
      {id:14,title:"雞蛋豆腐",money:45,},
      {id:15,title:"雞蛋豆腐",money:45,},
      {id:16,title:"雞蛋豆腐",money:45,},
      {id:17,title:"雞蛋豆腐",money:45,},
    ],
    thisPage: [],
    page: 1,
    pg: 16, // 每页显示的数量
  }
},
computed: {
    startIndex() {
      return (this.page - 1) * this.pg;
    },
    endIndex() {
      return this.startIndex + this.pg;
    },
  },
  methods: {
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.updateThisPage();
      }
    },
    nextPage() {
      if (this.thisPage.length >= this.pg) {
        this.page++;
        this.updateThisPage();
      }
    },
    updateThisPage() {
      this.thisPage = this.product.slice(this.startIndex, this.endIndex);
    },
  },
  created() {
    this.updateThisPage();
  },
components: {
  BackendFunctions,

},
};
</script>


<style lang="scss" scoped>

.d-flex {
  height: 100vh;
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


.fades-enter-active, .fades-leave-active {
  transition: opacity 0.4s;
}

.fades-enter-from, .fades-leave-to {
  opacity: 0;
}
</style>
