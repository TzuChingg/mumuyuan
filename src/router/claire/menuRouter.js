import MenuPage from '../../views/claire/MenuPage.vue'

export default {
  path: '/menu',
  component: MenuPage,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else if (to.hash) {
      const element = document.getElementById(to.hash)
      console.log(to.hash)
      if (element) {
        return { el: element, behavior: 'smooth' } // <==== the important part
      }
    } else {
      return { top: 0 }
    }
  }
}
