import MenuPage from '../../views/claire/MenuPage.vue'

export default {
  path: '/menu',
  component: MenuPage,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
}
