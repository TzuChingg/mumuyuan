import { defineStore } from 'pinia'

export default defineStore('category', {
  state: () => ({
    categories: [
      { id: 1, title: '固定套餐' },
      { id: 2, title: '秘捲' },
      { id: 3, title: '肉品' },
      { id: 4, title: '海鮮' },
      { id: 5, title: '酒食' },
      { id: 6, title: '蔬菜' },
      { id: 7, title: '經典' }
    ]
  }),
  getters: {
    getCategory: ({ categories }) => {
      return categories
    }
  }
})
