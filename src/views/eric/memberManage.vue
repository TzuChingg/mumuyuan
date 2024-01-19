<template>
   

  <div class="d-flex">
      <aside class="sidebar  border-5  pt-3 border-end d-flex bg-white flex-column ">
        <BackendFunctions></BackendFunctions>  
      </aside>
      <transition name="fade" mode="out-in">
        <main v-if="select==1" class="main container">
            <div class=" mt-5 ">
              <div class="row justify-content-between">
                <div class="col-8 mb-0 ms-2">
                  <div class="d-flex h-50">
                    <label for="search"><i class="bi bi-search fs-4 "></i></label>
                    <input type="search" placeholder="search" id="search" class=" form-control border-0 shadow-none mt-2 fs-4" v-model="search">
                  </div>
                </div>
                <div class="col-2  ">
                    <select class="form-select border-0 shadow-sm" id="select" aria-label="Default select example" v-model="select">
                      <option selected :value="'1'" >會員資料</option>
                      <option :value="'2'">黑名單</option>
                    </select>
                </div>
              </div>
            </div>
            <div class="card  shadow-sm w-100">
                <div class="card-body" >
                  <table class=" table table-hover align-middle table-sm reduce-spacing" >
                    <tbody class="fs-4 text-nowrap" v-for="(user,index) in filteredUser" :key="index" >
                      <tr >
                          <td>{{user.name}}</td>
                          <td>手機:{{user.phone}}</td>
                          <td class="text-end "><button class="btn btn-outline-primary me-5">黑名單</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </main>
        <main v-else-if="select==2" class="main container">
          <div class=" mt-5 ">
              <div class="row justify-content-between">
                <div class="col-8 mb-0 ms-2">
                  <div class="d-flex h-50">
                    <label for="search"><i class="bi bi-search fs-4 "></i></label>
                    <input type="search" placeholder="search" id="search" class=" form-control border-0 shadow-none mt-2 fs-4" v-model="search">
                  </div>
                </div>
                <div class="col-2  ">
                    <select class="form-select border-0 shadow-sm" id="select" aria-label="Default select example" v-model="select">
                      <option selected :value="'1'" >會員資料</option>
                      <option :value="'2'">黑名單</option>
                    </select>
                </div>
              </div>
          </div>
          <div class="card  shadow-sm w-100">
            <div class="card-body">
              <table class=" table table-hover align-middle table-sm reduce-spacing">
                <tbody class="fs-4 text-nowrap" v-for="(user ,index) in filteredBadUser" :key="index">
                  <tr>
                      <td>{{user.name}}</td>
                      <td>手機:{{user.phone}}</td>
                      <td class="text-end "><button class="btn btn-primary me-5">原諒你</button></td>
                  </tr>
                </tbody>
              </table>
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
      users:[
        {
          name:"蔡先生",
          phone:"09252525225"
        },
        {
          name:"黃先生",
          phone:"09777777777"
        },
      ],
      badusers:[
        {
          name:"蔡先生",
          phone:"09252525225"
        },
        {
          name:"黃先生",
          phone:"09111111111"
        },
      ],
      search:"",
      select:"1"
    }
  },


components: {
  BackendFunctions,
},

computed:{
  filteredUser(){
    if(this.search){
        return this.users.filter((name)=>name.phone.includes(this.search));
    } else {
        return this.users
    }
  },
  filteredBadUser(){
    if(this.search){
        return this.badusers.filter((name)=>name.phone.includes(this.search));
    } else {
        return this.badusers
    }
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
