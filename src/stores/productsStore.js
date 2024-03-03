import axios from 'axios'
import { defineStore } from 'pinia'
const api =  import.meta.env.VITE_API

export default defineStore('productsStore', {
  // data
  state: () => ({
    products: [],
    categorires: [],
    sortedProducts: [],
    loader:true
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
    },
    storeLoader: ({loader})=>{
      return loader
    }
  },
  // method
  actions: {
    getProducts() {
      if (this.products.length == 0) {
        axios
          .get(`${api}/products`)
          .then((res) => {
            this.products = res.data.filter((item)=> item.isLook === false)
            return axios.get(`${api}/categories`)
          })
          .then((resTwo) => {
            this.categorires = resTwo.data
            this.changeLoading()
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    },
    changeLoading(){
      this.loader = !this.loader
    }
  }
})
