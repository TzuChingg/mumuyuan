import { defineStore } from 'pinia'

const cartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    // 加入購物車
    addToCart(productId, qty = 1) {
      this.cart.push({ id: new Date().getTime(), productId, qty })
    }
  },
  getters: {
    getCart:({ cart })=> {
      console.log(cart)
    }
  }
})

export default cartStore
