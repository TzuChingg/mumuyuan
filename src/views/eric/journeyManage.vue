<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions v-once></BackendFunctions>  
      </aside>
      <transition name="fade" mode="out-in">
        <main v-if="select==1" class="main ">
          <div class="container mt-6">
            <div class="mt-3">
              <div class="row justify-content-between">
                <div class="col-2">
                  <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">新增活動</button>
                </div>
                <div class="col-2">
                  <select-list :options="options" @updata="get" v-once></select-list>
                </div>
              </div>
            </div>
            <div class="row row-cols-4 mt-2">
            <div class="col" v-for="(journey ,index) in thisPage" :key="index">
              <div class="card my-4">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">{{journey.title}}</h4>
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
            <div class="d-flex justify-content-center h-25 mt-4">
                        <button class="btn btn-primary" @click="prevPage" :disabled="page === 1">上一页</button>
                        <strong class="fs-3 text-primary mx-3 "> {{ page }} </strong>
                        <button class="btn btn-primary" @click="nextPage" :disabled="thisPage.length < pg">下一页</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title " id="exampleModalLabel">活動內容</h5>
                          </div>
                          <div class="modal-body">
                            <div class="card border-0">
                              <div class="cardbody mt-4">
                                <div class="d-flex h-25 justify-content-center my-2">
                                  <btn class="btn btn-primary" @click="$refs.fileInput.click()">上傳檔案</btn>
                                  <input type="file" style="display: none" ref="fileInput" @change="uploadFile">
                                </div>
                                <div class="d-flex h-25 justify-content-center mt-5 mb-2">
                                  <label for="title" class="fs-3 me-2">活動名:</label>
                                  <input type="text" id="title" placeholder="牛肉" class=" form-control border-1 shadow-none  w-50" >
                                </div>
                                <div class="d-flex h-25 justify-content-center mb-2">
                                  <label for="title" class="fs-3 me-2">詳細內容:</label>
                                  <input type="text" id="title" placeholder="" class=" form-control border-1 shadow-none  w-50" >
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
        <main v-else-if="select==2" class="main ">
          <div class="container mt-6">
            <div class="my-2">
              <div class="row justify-content-end">
                <div class="col-2">
                  <select-list :options="options2" @updata="get" v-once></select-list>
                </div>
              </div>
            </div>
            <div class="row row-cols-4">
            <div class="col" v-for="(dj ,index) in thisPage2" :key="index">
              <div class="card my-4">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">{{dj.title}}</h4>
                      <div class="m-4">
                            <button type="button" class="btn btn-danger w-100">上架</button>
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
          </div>
        </main>
      </transition>
  </div>
</template>

<script>
import selectList from '/src/components/eric/selectList.vue';
import BackendFunctions from '/src/components/eric/BackendFunctions.vue';
export default {
components: {
  BackendFunctions,
  selectList,
},

data() {
  return {
    journey:[
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
      {title:"優惠券在這邊"},
    ],
    downJourney:[
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
      {title:"優惠券"},
    ],
    thisPage: [],
    thisPage2: [],
    page: 1,
    pg: 12, 
    select:"1",
    options: [
      { value: '1', label: '活動管理' },
      { value: '2', label: '下架活動' },
    ],
    options2: [
      { value: '2', label: '下架活動' },
      { value: '1', label: '活動管理' },
    ],
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
    this.thisPage = this.journey.slice(this.startIndex, this.endIndex);
  },
  updatePage() {
    this.thisPage2 = this.downJourney.slice(this.startIndex, this.endIndex);
  },

  uploadFile () {
      const file = this.$refs.fileInput.files[0]
      const form = new FormData()
      form.append('file', file)
      form.append('userId', 'test1234')
      // axios.post('https://後端網址', form)
    },
    get(data){
       this.select = data
    }
},
created() {
  this.updateThisPage();
  this.updatePage()
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
</style>
