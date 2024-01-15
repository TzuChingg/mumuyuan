<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <main class="main container">
        <div class="card mt-5 shadow-sm w-100">
            <div class="card-header bg-transparent">
                <div class="input-group">
                  <span class="input-group-text border-0 bg-white pe-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input type="search" placeholder="search" class=" form-control border-0 shadow-none">
                </div>
            </div>
            <div class="card-body">
              <table class=" table table-hover align-middle table-sm reduce-spacing">
                <tbody class="fs-4 text-nowrap ">
                  <tr>
                      <td>黃先生</td>
                      <td>手機:0000000000</td>
                      <td class="text-end "><button class="btn btn-outline-primary me-5">黑名單</button></td>
                  </tr>
                  <tr>
                      <td>黃先生</td>
                      <td>手機:0000000000</td>
                      <td class="text-end "><button class="btn btn-outline-primary me-5">黑名單</button></td>
                  </tr>
                  <tr>
                      <td>黃先生</td>
                      <td>手機:0000000000</td>
                      <td class="text-end "><button class="btn btn-outline-primary me-5">黑名單</button></td>
                  </tr>
                </tbody>
              </table>
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
