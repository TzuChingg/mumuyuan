import { defineStore } from "pinia"
import menuStore from "./menu"

export const cartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(productId, qty = 1) {
      console.log(productId, qty)
    }
  }
})
