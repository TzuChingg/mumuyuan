import axios from 'axios'
import productsStore from './productsStore'
import { defineStore } from 'pinia'
const api = import.meta.env.VITE_API

export default defineStore('', {
  state: () => ({
    cart: [],
    information: { coupon: [] }
  }),
  getters: {
    cartNum: ({ cart }) => {
      return cart.length
    },
    cartsList: ({ cart }) => {
      const { products } = productsStore()
      const carts = cart.map((item) => {
        const product = products.find((product) => product.id == item.productId)
        return {
          ...item,
          product,
          amount: product.price * item.quantity
        }
      })
      const totalAmount = carts.reduce((acc, item) => acc + item.amount, 0)
      const point = parseInt(totalAmount / 100)
      return {
        carts,
        totalAmount,
        point
      }
    },
    storeInformation: ({ information }) => {
      return information
    }
  },
  actions: {
    addToCart(productId, quantity = 1) {
      const currentCart = this.cart.find((item) => item.productId === productId)
      if (currentCart) {
        currentCart.quantity += quantity
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          quantity
        })
      }
    },
    removeCartsListItem(id) {
      const index = this.cart.findIndex((item) => item.id === id)
      this.cart.splice(index, 1)
    },
    increaseQty(productId) {
      const currentCart = this.cart.find((item) => item.id === productId)
      if (currentCart.quantity < 100) {
        currentCart.quantity++
      }
    },
    decreaseQty(productId) {
      const currentCart = this.cart.find((item) => item.id === productId)
      if (currentCart.quantity > 1) {
        currentCart.quantity--
      }
    },
    useCoupon(couponName, id) {
      if (this.information) {
        const index = this.information.coupon.find((item) => item.name === couponName)
        this.information.coupon.splice(index, 1)
        const data = { coupon: this.information.coupon }
        return axios.patch(`${api}/users/${id}`, data)
      }
    },
    member(id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${api}/users/${id}`)
          .then((res) => {
            this.information = res.data
            resolve(true)
          })
          .catch(() => {
            reject('非會員')
          })
      })
    }
  }
})
