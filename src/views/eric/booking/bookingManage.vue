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
          <input type="search" placeholder="search" class=" form-control border-0 shadow-none" v-model="search">
        </div>
        <div class="card mt-2 shadow-sm w-100" :class="{out:book.timeout}" v-for="(book ,index) in  currentDate.data" :key="index">
          <div class="card-body" >
            <div class="row ">
              <div class="col-4">
                <strong>{{book.name}}</strong>
                <span class="ms-6 ">{{book.people}}位</span><p class="m-0">日期:{{book.data}}</p>
              </div>
              <div class="col-4">
                <strong class="m-0">電話:{{book.phone}}</strong><p class="m-0">時間:{{book.time}}</p>
              </div>
              <div class="col-2">
                <p class="mt-2 fs-5 " :class="{timeout:!book.timeout}">已過期</p>
              </div>
              <div class="col ">
                <i class="bi bi-x-square fs-3 float-end mt-1 me-3" ></i>
                <i class="bi bi-check-square fs-3 float-end mt-1 me-3" :class="{timeout:book.timeout}"></i>
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
    booking:[
      {
        name:"蔡先生",
        people:2,
        phone:"0966654545",
        data:"2024/01/18",
        time:"2:38",
        timeout:false,
      },
      {
        name:"黃先生",
        people:5,
        phone:"0911111111",
        data:"2024/01/15",
        time:"2:38",
        timeout:false,
      },
    ],
    search:""
  }
},

computed: {
  
  currentDate() {
    const copiedData = this.booking.slice();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    // const hours = date.getHours();
    // const minutes = date.getMinutes(); 
   
    copiedData.forEach(data => {
      const thisYear = data.data.split("/")[0];
      const thisMonth = data.data.split("/")[1];
      const thisDay = data.data.split("/")[2];
      // const thishour = data.time.split(":")[0]
      // const thismin = data.time.split(":")[1]
      if (thisYear >= year && thisMonth >= month && thisDay >= day ) {
        data.timeout = false;
      } else {
        data.timeout = true;
      }
    });

    if(this.search){
        return {data: copiedData.filter((name)=>name.phone.includes(this.search))};
    } else {
        return {data: copiedData,}
    }
  }
}
}
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

.timeout{
  display: none;
}
.out{
  opacity: 0.4;
}

.sidebar:hover {
width: 280px;

.main {
  width: calc(100vw - var(--sidebar-width));
  /* margin-left: 0; */
}
}
</style>
