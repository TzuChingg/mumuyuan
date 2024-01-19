<template>
  <div class="d-flex ">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <transition name="fade" mode="out-in">
        <main v-if="select==1" class="main ">
        <div class="container mt-5">
          <div class="mt-2">
            <div class="row justify-content-between">
              <div class="col-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">新增商品</button>
              </div>
              <div class="col-2">
                <select class="form-select border-0 shadow-sm bg-primary text-white" id="select" aria-label="Default select example" v-model="select">
                      <option selected :value="'1'" >商品管理</option>
                      <option :value="'2'">下架商品</option>
              </select>
              </div>
            </div>
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
        <!-- Button trigger modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title " id="exampleModalLabel">商品內容</h5>
              </div>
              <div class="modal-body">
                <div class="card border-0">
                  <div class="cardbody">
                    <div class="d-flex h-25 justify-content-center my-5">
                      <btn class="btn btn-primary" @click="$refs.fileInput.click()">上傳檔案</btn>
                      <input type="file" style="display: none" ref="fileInput" @change="uploadFile">
                    </div>
                    <div class="d-flex h-25 justify-content-center mt-6 mb-2">
                      <label for="title" class="fs-3 me-2">品名:</label>
                      <input type="text" id="title" placeholder="牛肉" class=" form-control border-1 shadow-none  w-50" >
                    </div>
                    <div class="d-flex h-25 justify-content-center mb-2">
                      <label for="title" class="fs-3 me-2">價格:</label>
                      <input type="text" id="title" placeholder="100" class=" form-control border-1 shadow-none  w-50" >
                    </div>
                    <div class="d-flex h-25 justify-content-center mb-2">
                      <label for="title" class="fs-3 me-2">介紹:</label>
                      <input type="text" id="title" placeholder="多汁" class=" form-control border-1 shadow-none  w-50" >
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary">新增</button>
              </div>
            </div>
            </div>
            </div>
        </main>
        <main v-else-if="select==2" class="main ">
          <div class="container mt-5">
            <div class="mt-2">
              <div class="row justify-content-end">
                <div class="col-2">
                  <select class="form-select border-0 shadow-sm bg-primary text-white" id="select" aria-label="Default select example" v-model="select">
                        <option selected :value="'1'" >商品管理</option>
                        <option :value="'2'">下架商品</option>
                </select>
                </div>
              </div>
            </div>
            <div class="row row-cols-4 mb-4">
              <div class="col px-2" v-for="(down ,index) in thisPage2" :key="index">
                <div class="card mt-3 ">
                  <div class="cardbody">
                    <h4 class=" text-center mt-3">{{down.title}}</h4>
                    <div class="row px-3 text-center align-items-center py-1">
                      <div class="col-6 fs-4 ">
                                  <label for="money" class="ms-5">價錢:</label>
                              </div>
                              <div class="col-6 mt-2 ">
                                <h4 class="me-6">{{down.money}}</h4>
                              </div>
                            </div>
                            <div class="m-3">
                              <button type="button" class="btn btn-danger w-100">上架</button>
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
      </transition>

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
      {id:3,title:"貢丸",money:900,},
      {id:4,title:"小豆干",money:900,},
      {id:5,title:"干貝",money:900,},
      {id:6,title:"草蝦",money:900,},
      {id:7,title:"百頁豆腐",money:900,},
      {id:8,title:"雞肉丸",money:900,},
      {id:9,title:"豬肉",money:900,},
      {id:10,title:"豬血糕",money:900,},
      {id:11,title:"魷魚",money:900,},
      {id:12,title:"雞蛋豆腐",money:45,},
      {id:13,title:"雞蛋豆腐",money:45,},
      {id:14,title:"雞蛋豆腐",money:45,},
      {id:15,title:"雞蛋豆腐",money:45,},
      {id:16,title:"雞蛋豆腐",money:45,},
      {id:17,title:"雞蛋豆腐",money:45,},
    ],
    downProduct:[
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
      {id:17,title:"雞蛋豆腐",money:900,},
    ],
    thisPage: [],
    thisPage2:[],
    page: 1,
    pg: 16, 
    select:"1",
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
      if(this.select==1){
        this.updateThisPage();
      }else if(this.select==2){
        this.updatePage()
      }
    }
  },
  nextPage() {
    if (this.thisPage.length >= this.pg) {
      this.page++;
      if(this.select==1){
        this.updateThisPage();
      }else if(this.select==2){
        this.updatePage()
      }
    }
  },
  updateThisPage() {
    this.thisPage = this.product.slice(this.startIndex, this.endIndex);
  },
  updatePage() {
    this.thisPage2 = this.downProduct.slice(this.startIndex, this.endIndex);
  },

  uploadFile () {
      const file = this.$refs.fileInput.files[0]
      const form = new FormData()
      form.append('file', file)
      form.append('userId', 'test1234')
      // axios.post('https://後端網址', form)
    }
},
created() {
  this.updateThisPage();
  this.updatePage()
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.fades-enter-active, .fades-leave-active {
  transition: opacity 0.4s;
}

.fades-enter-from, .fades-leave-to {
  opacity: 0;
}
</style>
