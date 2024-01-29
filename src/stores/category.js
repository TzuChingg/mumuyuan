import { defineStore } from 'pinia'
import axios from 'axios'
const url = 'http://localhost:3000'

const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [
      { id: 1, title: '固定套餐', eng: 'combo' },
      { id: 2, title: '秘捲', eng: 'secret' },
      { id: 3, title: '肉品', eng: 'meat' },
      { id: 4, title: '海鮮', eng: 'seafood' },
      { id: 5, title: '酒食', eng: 'wine' },
      { id: 6, title: '蔬菜', eng: 'vegetable' },
      { id: 7, title: '經典', eng: 'classic' }
    ]
  }),
  actions: {
    // 取 json server 的 categories
    loadData: ({ categories }) => {      
      try {
        let result = axios.get(`${url}/categories`)
        categories = result.data
        console.log('categories' + categories)
        console.log('result.data' + result.data)
        return categories
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    // 取出 categories
    getCategory: ({ categories }) => {
      return categories
    }
  }
})

export default useCategoryStore
