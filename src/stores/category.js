import { defineStore } from 'pinia'
import axios from 'axios'
const url = 'http://localhost:8080/api/categories'
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
    ],
    category: []
  }),
  getters: {
    // 取出 categories 的資料狀態
    getCategory: ({ categories }) => {
      return categories
    }
  },
  actions: {
    // 更新 categories
    async loadData() {
      try {
        const response = await this.$axios.get(`/categories`)
        console.log(response)
        this.categories = response
      } catch (err) {
        console.log(err)
      }
    },
   
  }
})

export default useCategoryStore
