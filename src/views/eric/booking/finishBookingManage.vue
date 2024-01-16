<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <main class="main container">
        <div class="input-group mt-5 w-25">
          <span class="input-group-text border-0 bg-white pe-0">
            <i class="bi bi-search"></i>
          </span>
          <input type="search" placeholder="search" class=" form-control border-0 shadow-none">
        </div>
        <div class="card mt-2 shadow-sm w-100" >
          <div class="card-body">
            <div class="row ">
              <div class="col-4">
                <strong>蔡先生</strong>
                <span class="ms-6 ">2位</span><p class="m-0">日期:2024/01/01</p>
              </div>
              <div class="col-4">
                <strong class="m-0">電話:0900000000</strong><p class="m-0">時間:17:00</p>
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
