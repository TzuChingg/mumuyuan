import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('productsStore', {
  // data
  state: () => ({
    products: [],
    categorires: [],
    sortedProducts: []
  }),
  // computed
  getters: {
    storeProducts: ({ products, categorires, sortedProducts }) => {
      categorires.forEach((item) => {
        sortedProducts.push([item.title, products.filter((el) => el.category == item.id)])
      })
      return sortedProducts
    },
    storeCategorires: ({ categorires }) => {
      return categorires.map((el) => el.title)
    }
  },
  // method
  actions: {
    getProducts() {
      if (this.products.length == 0) {
        axios
          .get('http://localhost:8080/api/products')
          .then((res) => {
            this.products = res.data
            return axios.get('http://localhost:8080/api/categories')
          })
          .then((resTwo) => {
            this.categorires = resTwo.data
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    }
  }
})
