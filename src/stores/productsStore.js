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
    storeProducts: ({ products, categorires, sortedProducts, loading }) => {
      // 產品分類與篩選
      // [分類, [產品]]
      categorires.forEach((item) => {
        sortedProducts.push([item.title, products.filter((el) => el.category == item.id)])
      })
      // 檢查產品有沒有空值，刪空值
      return sortedProducts.filter((item) =>item[1].length !== 0)
    },
    // 線上點餐的btn
    storeCategorires: ({ categorires, sortedProducts }) => {
      // 從刪去空值的產品列找分類
      return sortedProducts.filter((item) =>item[1].length !== 0).map(el => el[0])
    }
  },
  // method
  actions: {
    getProducts() {
      if (this.products.length == 0) {
        axios
          .get('http://localhost:8080/api/products')
          .then((res) => {
            this.products = res.data.filter((item)=> item.isLook === false)
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
