import MenuPage from '../../views/claire/MenuPage.vue'

export default {
  path: '/menu',
  component: MenuPage,
  routes: [{ path: '/menu', name: 'categoryId' }],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(to.hash)
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
}
// vue 點擊按鈕滾動到錨點