<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <main class="main mt-3">
          <div class="container ">
            <div class="my-3">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">新增優惠券</button>
            </div>
            <div class="row row-cols-4">
            <div class="col" v-for="(discount,index) in thisPage" :key="index">
              <div class="card my-2">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">{{discount.title}}</h4>
                      <div class="row px-3 justify-content-center align-items-center py-3">
                          <div class="col-4 fs-4 ">
                              <label for="money" class="ms-3">點數:</label>
                          </div>
                          <div class="col-6 ">
                              <input type="number" id="money" class="form-control shadow-none" :placeholder="discount.point">
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
            <div class="d-flex justify-content-center h-25 mt-3">
                        <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
                        <strong class="fs-3 text-primary mx-3 "> {{ page }} </strong>
                        <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">下一页</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title " id="exampleModalLabel">折價券內容</h5>
                          </div>
                          <div class="modal-body">
                            <div class="card border-0">
                              <div class="cardbody mt-4">
                                <div class="d-flex h-25 justify-content-center my-2">
                                  <btn class="btn btn-primary" @click="$refs.fileInput.click()">上傳檔案</btn>
                                  <input type="file" style="display: none" ref="fileInput" @change="uploadFile">
                                </div>
                                <div class="d-flex h-25 justify-content-center mt-5 mb-2">
                                  <label for="title" class="fs-3 me-2">券名:</label>
                                  <input type="text" id="title" placeholder="牛肉" class=" form-control border-1 shadow-none  w-50" >
                                </div>
                                <div class="d-flex h-25 justify-content-center mb-2">
                                  <label for="title" class="fs-3 me-2">點數:</label>
                                  <input type="text" id="title" placeholder="100" class=" form-control border-1 shadow-none  w-50" >
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
        </div>
      </main>
  </div>
  
</template>

<script>
import BackendFunctions from '/src/components/eric/BackendFunctions.vue';
export default {
components: {
  BackendFunctions,
},

data() {
  return {
    discount:[
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
      {title:"折10元",point:30},
    ],
    thisPage: [],
    page: 1,
    pg: 16, 
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
    this.thisPage = this.discount.slice(this.startIndex, this.endIndex);
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
</style>
