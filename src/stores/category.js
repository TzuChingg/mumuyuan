import { defineStore } from 'pinia'

export default defineStore('category', {
  state: () => ({
    categories: ['蔬菜', '肉品', '最新消息']
  }),
  getters: {
    sortProducts: ({ categories }) => {
      return categories
    }
  }
})
