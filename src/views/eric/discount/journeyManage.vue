<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <main class="main mt-3">
          <div class="container ">
            <div class="my-3">
              <button type="button" class="btn btn-primary">新增活動</button>
          </div>
            <div class="row row-cols-4">
            <div class="col" v-for="(journey ,index) in thisPage" :key="index">
              <div class="card my-2">
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
            <div class="d-flex justify-content-center h-25 mt-3">
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
components: {
  BackendFunctions,
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
    this.thisPage = this.journey.slice(this.startIndex, this.endIndex);
  },
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
