<template>
  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <main class="main container">
        <div class="row p-3 row-cols-3">
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <h2 class="display-6">當日訂位人數</h2>
                <p class="display-4">13,213</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <h2 class="display-6">當日訂單數</h2>
                <p class="display-4">90,213</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body text-end">
                <h2 class="display-6 ">當日營業額</h2>
                <p><span class="fs-3">NT$</span><span class="display-4">980,655</span></p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row p-2">
          <div class="col-6">
            <div class="card shadow-sm h-100">
              <div class="card-body bar">
                <my-chart ></my-chart>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <my-line></my-line>
              </div>
            </div>
          </div>
        </div>
      </main>
  </div>
  
</template>

<script>
import BackendFunctions from '/src/components/eric/BackendFunctions.vue';
import MyChart from '/src/components/eric/MyChart.vue';
import MyLine from '/src/components/eric/MyLine.vue';
export default {

components: {
  BackendFunctions,
  MyChart,
  MyLine,
},
};
</script>


<style lang="scss" scoped>

.d-flex {
  height: 100vh;
}

.bar{
  height: 50vh;
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
max-width: 100%;
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
