<template>
            <div class="p-3 text-nowrap">
                <Transition name="shop" mode="out-in">
                    <button v-if="open" type="btn" class="btn btn-success w-100 "  @click="open=!open">開店</button>
                    <button v-else type="btn" class="btn btn-danger w-100 " @click="open=!open" >關店</button>
                </Transition>
            </div>
            <div class="p-2 d-flex justify-content-center text-nowrap">
                <strong class="text-nowrap ">木木苑後台系統</strong>
            </div>
            <div class="overflow-auto">
                <div v-for="(menu,index) in menuItems" :key="index">
                    <a :href="'#menu-order-' + index" class="sidebar-link  icon py-2" data-bs-toggle="collapse" @click.prevent="toggler(index)">
                        <div class="d-flex  justify-content-between px-4 ">
                            <p class="mb-0 text-nowrap">
                                {{menu.label}}
                            </p>
                            <div v-if="menu.subMenu.length > 0">
                                <i class="bi" :class="menu.icon"></i>
                            </div>
                        </div>
                    </a>
                    <div class="collapse" :id="'menu-order-' + index" v-for="(subMenuItem, subIndex) in menu.subMenu" :key="subIndex">
                        <router-link :to="subMenuItem.path" class="sidebar-link py-2" :class="{active:subMenuItem.at}">
                            <div class="ps-5">
                                {{subMenuItem.title}}
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <a href="#" class="mt-auto   text-nowrap sidebar-link">
                <div class="ps-4 ">
                    登出
                </div>
            </a>

</template>


<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default {
data() {
    return {
        menuItems:[
            {   label:"訂單狀態",
                expend:false,
                subMenu:[{title:'待接受',path:'/order',at:false}, {title:'待完成',path:'/unOrder',at:false}],
                icon:"bi-caret-left-fill",
            },
            {   label:"會員資料",
                expend:false,
                subMenu:[{title:'一般會員',path:'/member',at:false}, {title:'黑名單',path:'/badMember',at:false}],
                icon:"bi-caret-left-fill"
            },
            {   label:"銷售統計",
                expend:false,
                subMenu:[{title:'統計',path:'/sales',at:false}],
                icon:"bi-caret-left-fill"
            },
            {   label:"編輯商品",
                expend:false,
                subMenu:[{title:'商品',path:'/product',at:false}, {title:'商品下架區',path:'/downProduct',at:false}],
                icon:"bi-caret-left-fill"
            },
            {   label:"訂位管理",
                expend:false,
                subMenu:[{title:'尚未確認',path:'/booking',at:false}, {title:'已到場歷史紀錄',path:'/finishBooking',at:false}],
                icon:"bi-caret-left-fill"
            },
            {   label:"活動管理",
                expend:false,
                subMenu:[   
                            {title:'優惠券',path:'/discount',at:false}, 
                            {title:'優惠券下架區',path:'/downDiscount',at:false},
                            {title:'活動',path:'/journey',at:false},
                            {title:'活動下架區',path:'/downJourney',at:false}
                        ],
                icon:"bi-caret-left-fill"
            },
        ],
        open:true
        
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
}, 

mounted() {

    const url = this.$route.path
    this.menuItems.forEach(item => {
      item.subMenu.forEach(item=>{
        
        if(url==item.path)
        item.at = true
      })
    });
    
  },

}
</script>


<style scoped lang="scss">

@import '/src/assets/main.scss'; 
.sidebar-link {
    
    color: rgb(2, 2, 1);
    display: block;
    text-decoration: none;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    transition: all 0.35s ease-in-out;
    

    &:hover {
    color: #fff;    
    // background-color: plum;
    background: linear-gradient(to right, $blue, $purple);
    }
}
a{     
        text-decoration: none;
     }
.sidebar-link.active {
    position: relative;
    color: white;
    background-color: gray;

    &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    height: 100%;
    width: 7px;
    background: rgb(2, 2, 1);
    }
}




.shop-enter-from,
.shop-leave-to {
    opacity: 0;
}

.shop-enter-to,
.shop-leave-from {
    opacity: 1;
}

.shop-enter-active {
    transition: opacity 0.3s ease-in-out;
}

.shop-leave-active {
    transition: opacity 0.5s ease-in-out;
}

i {
transition: transform 0.1s ease-in-out;
}


</style>
