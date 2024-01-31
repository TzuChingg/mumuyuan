import { defineStore } from 'pinia'

const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    // 加入購物車
    addToCart(productId, qty = 1) {
      
      this.cart.push({ id: new Date().getTime(), productId, qty })
      console.log(this.cart)
    }    
  },
  getters: {
    // 回傳購物車狀態
   cartList:()=>{
    return {
      carts:[],
      total:0
    }
   }
  }
})

export default useCartStore
