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
                      <h4 class=" text-center mt-4">折10元</h4>
                      <div class="row px-3 text-center align-items-center py-1">
                        <div class="col-6 fs-4 ">
                            <label for="money" class="ms-5">點數:</label>
                        </div>
                        <div class="col-6 mt-2 ">
                            <h4 class="me-6">50</h4>
                        </div>
                    </div>
                      <div class="m-3">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">折10元</h4>
                      <div class="row px-3 text-center align-items-center py-1">
                        <div class="col-6 fs-4 ">
                            <label for="money" class="ms-5">點數:</label>
                        </div>
                        <div class="col-6 mt-2 ">
                            <h4 class="me-6">50</h4>
                        </div>
                    </div>
                      <div class="m-3">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">折10元</h4>
                      <div class="row px-3 text-center align-items-center py-1">
                        <div class="col-6 fs-4 ">
                            <label for="money" class="ms-5">點數:</label>
                        </div>
                        <div class="col-6 mt-2 ">
                            <h4 class="me-6">50</h4>
                        </div>
                    </div>
                      <div class="m-3">
                            <button type="button" class="btn btn-danger w-100">上架</button>
                       </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="cardbody">
                      <h4 class=" text-center mt-4">折10元</h4>
                      <div class="row px-3 text-center align-items-center py-1">
                        <div class="col-6 fs-4 ">
                            <label for="money" class="ms-5">點數:</label>
                        </div>
                        <div class="col-6 mt-2 ">
                            <h4 class="me-6">50</h4>
                        </div>
                    </div>
                      <div class="m-3">
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
