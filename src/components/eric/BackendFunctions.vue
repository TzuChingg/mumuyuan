<template>
        <div class="d-flex">
        <aside class="sidebar vh-100 border-5  pt-3 border-end d-flex bg-white flex-column ">
            <div class="ps-4 pb-3 ">
                <strong class="text-nowrap ">木木苑後台系統</strong>
            </div>
            <div class="overflow-auto">
                <div v-for="(menu,index) in menuItems" :key="index">
                    <a :href="'#menu-order-' + index" class="sidebar-link  icon" data-bs-toggle="collapse" @click.prevent="toggler(index)">
                        <div class="d-flex  justify-content-between px-4 ">
                            <p class="mb-0 text-nowrap">
                                {{menu.label}}
                            </p>
                            <div v-if="menu.subMenu.length > 0">
                                <i class="bi" :class="menu.icon"></i>
                            </div>
                        </div>
                    </a>
                    <div  class="collapse" :id="'menu-order-' + index">
                        <a href="" class="sidebar-link " v-for="(subMenuItem, subIndex) in menu.subMenu" :key="subIndex">
                            <div class="ps-5">
                                {{subMenuItem}}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" class="mt-auto  text-nowrap sidebar-link">
                <div class="ps-4 ">
                    登出
                </div>
            </a>
        </aside>
        <main class="main">

        </main>
    </div>
</template>


<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
data() {
    return {
        menuItems:[
            {label:"訂單狀態",expend:false,subMenu:['待接受', '已完成'],icon:"bi-caret-left-fill"},
            {label:"會員資料",expend:false,subMenu:['一般會員', '黑名單'],icon:"bi-caret-left-fill"},
            {label:"銷售統計",expend:false,subMenu:[],icon:"bi-caret-left-fill"},
            {label:"編輯商品",expend:false,subMenu:['商品', ' 商品下架區'],icon:"bi-caret-left-fill"},
            {label:"定位管理",expend:false,subMenu:['尚未確認', '已確認歷史紀錄'],icon:"bi-caret-left-fill"},
            {label:"活動管理",expend:false,subMenu:['優惠券', '優惠券下架區','活動','活動下架區'],icon:"bi-caret-left-fill"},
        ],
        
    }
},
methods:{
    toggler(index){
        this.menuItems[index].expend = !this.menuItems[index].expend;
        if(this.menuItems[index].expend){
            this.menuItems[index].icon = "bi-caret-down-fill"
        }else{
            this.menuItems[index].icon = "bi-caret-left-fill"
        }
    },
}

}
</script>


<style scoped lang="scss">
  /* :root {
    --sidebar-width: 280px;
  } */
  .sidebar {
    width: 280px;
    overflow: hidden;
    transition: width 0.5s;

    .sidebar-link {
      color: rgb(2, 2, 1);
      display: block;
      text-decoration: none;
      padding-top: 0.875rem;
      padding-bottom: 0.875rem;

      &:hover {
        background-color: red;
        transition: background-color 0.5s;
      }
    }

    .sidebar-link.active {
      position: relative;
      color: white;
      background-color: blueviolet;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 2px;
        height: 100%;
        width: 3px;
        background: blue;
      }
    }
  }

  .main {
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

  i {
    transition: transform 0.1s ease-in-out;
  }
</style>
