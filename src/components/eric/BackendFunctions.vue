<template>
  <div class="bg d-flex flex-column">
    <div class="p-3 text-nowrap bg">
      <Transition name="shop" mode="out-in">
        <keep-alive>
          <button v-if="open" type="button" class="btn btn-success w-100 " @click="open = !open" once>開店</button>
          <button v-else type="button" class="btn btn-danger w-100 " @click="open = !open" once>關店</button>
        </keep-alive>
      </Transition>
    </div>
    <div class="p-2 d-flex justify-content-center text-nowrap bg">
      <strong class="text-nowrap ">木木苑後台系統</strong>
    </div>
    <div class="overflow-auto">
      <div v-for="(menu, index) in menuItems" :key="index">
        <router-link v-if="!menu.subMenu" :to="menu.path" class="sidebar-link py-2" :class="{ active: menu.at }">
          <div class="d-flex  justify-content-between px-4 ">
            <p class="mb-0 text-nowrap">
              {{ menu.label }}
            </p>
          </div>
        </router-link>
        <a v-else :href="'#menu-order-' + index" class="sidebar-link  icon py-2" data-bs-toggle="collapse"
          @click.prevent="toggler(index)">
          <div class="d-flex  justify-content-between px-4 ">
            <p class="mb-0 text-nowrap">
              {{ menu.label }}
            </p>
            <div>
              <i class="bi text-dark" :class="menu.icon"></i>
            </div>
          </div>
        </a>
        <div class="collapse" :id="'menu-order-' + index" v-for="(subMenuItem, subIndex) in menu.subMenu"
          :key="subIndex">
          <router-link :to="subMenuItem.path" class="sidebar-link py-2" :class="{ active: subMenuItem.at }">
            <div class="ps-5">
              {{ subMenuItem.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <a href="#" class="mt-auto text-nowrap sidebar-link">
      <div class="ps-4" @click="signOut">
        登出
      </div>
    </a>
  </div>
</template>

<script>
import { docCookies } from '@/assets/cookie';

export default {
  data() {
    return {
      menuItems: [
        {
          label: "訂單狀態",
          expend: false,
          path: '/order',
          at: false,
          icon: "bi-caret-left-fill",
        },
        {
          label: "會員資料",
          expend: false,
          path: '/memberMange',
          at: false,
          icon: "bi-caret-left-fill"
        },
        {
          label: "銷售統計",
          expend: false,
          path: '/sales',
          at: false,
          icon: "bi-caret-left-fill"
        },
        {
          label: "編輯商品",
          expend: false,
          path: '/product',
          at: false,
          icon: "bi-caret-left-fill"
        },
        {
          label: "訂位管理",
          expend: false,
          path: '/booking',
          at: false,
          icon: "bi-caret-left-fill"
        },
        {
          label: "活動管理",
          expend: false,
          subMenu: [
            { title: '優惠券', path: '/discount', at: false },
            { title: '活動', path: '/journey', at: false },
          ],
          icon: "bi-caret-left-fill"
        },
        {
          label: "去首頁",
          expend: false,
          path: '/',
          at: false,
          icon: "bi-caret-left-fill"
        },
      ],
      open: true,
      myIdentity: ""
    }
  },
  watch: {
    open() {
      const data = { shopStatus: this.open };
      this.$axios.patch("/shop", data)
    }
  },
  methods: {
    toggler(index) {
      this.menuItems[index].expend = !this.menuItems[index].expend;
      if (this.menuItems[index].expend) {
        this.menuItems[index].icon = "bi-caret-down-fill"
      } else {
        this.menuItems[index].icon = "bi-caret-left-fill"
      }
    },
    signOut() {
      docCookies.removeItem("token");
      docCookies.removeItem("identity");
      docCookies.removeItem("id");
      window.location.href = import.meta.env.VITE_BASE;
    },
  },
  mounted() {
    const url = this.$route.path
    this.menuItems.forEach(item => {
      if (url == item.path)
        item.at = true
    });
    this.menuItems.forEach(item => {
      if (item.subMenu) {
        item.subMenu.forEach(item => {
          if (url == item.path)
            item.at = true
        })
      }
    });
    this.myIdentity = docCookies.getItem("identity")
    if (this.myIdentity != 'admin') {
      this.signOut()
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.bg {
  background: $secondary;
}

.sidebar-link {
  color: rgb(2, 2, 1);
  display: block;
  text-decoration: none;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  transition: all 0.35s ease-in-out;

  &:hover {
    color: #fff;
    background: linear-gradient(to right, $primary, $secondary);
  }
}

a {
  text-decoration: none;
}

.sidebar-link.active {
  position: relative;
  color: white;
  background-color: $dark;

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
