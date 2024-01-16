<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <main class="main mt-4">
          <div class="container ">
            <div class="row row-cols-4">
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">全面9折</h4>
                      <div class="m-4">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">全面9折</h4>
                      <div class="m-4">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">全面9折</h4>
                      <div class="m-4">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">全面9折</h4>
                      <div class="m-4">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
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
