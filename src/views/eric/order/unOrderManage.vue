<template>

    <div class="d-flex">
        <aside class="sidebar  border-5  border-end d-flex bg-white flex-column">
          <BackendFunctions></BackendFunctions>  
        </aside>
        <main class="main container">
          <div class="card mt-5 shadow-sm w-100">
            <div class="card-body  " >
              <div class="accordion accordion-flush " id="accordionFlushExample">
                    <div class="accordion-item " >
                            <h2 class="accordion-header " id="flush-headingOne">
                              <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  <strong class="me-5">蔡先生</strong> <span class="ms-5 mt-11">手機:0911111111</span>
                                  
                              </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                <div class="accordion-body" >     
                                  <div class="row">
                                    <div class="col-6">                                  <div class="table-responsive">
                                        <table class=" table table-borderless align-middle table-sm reduce-spacing">
                                          <thead class="table-dark fs-5">
                                            <tr>
                                              <td colspan="5" class="ps-2">餐點</td>
                                            </tr>
                                          </thead>
                                          <tbody class="fs-4 text-nowrap">
                                            <tr>
                                                <td>豬肉片</td>
                                                <td>豬肉片</td>
                                                <td>豬肉片</td>
                                                <td>豬肉片</td>
                                                <td>豬肉片</td>

                                            </tr>
                                            <tr>
                                                <td>牛肉片</td>
                                                <td>牛肉片</td>
                                                <td>牛肉片</td>
                                                <td>牛肉片</td>
                                                <td>牛肉片</td>

                                            </tr>
                                            <tr>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                            </tr>
                                            <tr>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                            </tr>
                                            <tr>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                            </tr>
                                            <tr>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                                <td>豬血糕</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div> 
                                    </div>
                                  <div class="col-6 position-relative mt-auto">
                                    <table class=" table table-striped align-middle table-sm">
                                      <tbody>
                                        <tr>
                                          <td class="fs-5 "><strong>是否要餐具:</strong>要</td>
                                        </tr>
                                        <tr>
                                          <td class="fs-5"><strong>是否要加購提袋:</strong>要</td>
                                        </tr>
                                        <tr>
                                          <td class="fs-5"><strong>訂購方式:</strong>自取</td>
                                        </tr>
                                        <tr>
                                          <td class="fs-5"><strong>預計取餐時間:</strong><span class="text-danger">17:30</span></td>
                                        </tr>
                                        <tr>
                                          <td class="fs-5"><strong>付款方式:</strong>現金</td>
                                        </tr>
                                        <tr>
                                          <td class="fs-5"><strong>是否使用活動券:</strong>否</td>
                                        </tr>
                                        <tr>
                                          <td class="fs-5"><strong>備註:</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime suscipit nemo expedita error commodi reiciendis eum tenetur rerum beatae quam excepturi voluptates, totam obcaecati deserunt reprehenderit iusto laboriosam. Ad.</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                      
                                      <button type="btn" class="btn btn-primary w-100 mt-1">完成</button>
                                  </div>
                                  </div>         

                                  
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

  methods:{

  }
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
.reduce-spacing td {
        margin: 0;
        padding: 0px; /* 调整需要的内边距 */
    }
</style>

