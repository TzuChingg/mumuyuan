import { defineStore } from 'pinia'

export default defineStore('category', {
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
  getters: {
    getCategory: ({ categories }) => {
      return categories
    }
  }
})
