import { defineStore } from 'pinia'

export default defineStore('category', {
  state: () => ({
    categories: [
      { id: 1, name: '固定套餐' },
      { id: 2, name: '秘捲' },
      { id: 3, name: '肉品' },
      { id: 4, name: '海鮮' },
      { id: 5, name: '酒食' },
      { id: 6, name: '蔬菜' },
      { id: 7, name: '經典' }
    ]
  }),
  getters: {
    getCategory: ({ categories }) => {
      return categories
    }
  }
})
