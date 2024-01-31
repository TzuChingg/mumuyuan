import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
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
    // 取出 categories
    getCategory: ({ categories }) => {
      return categories
    },
    // 返回新 data
    getState(state) {
      return state.categories.pop()
    }
  },
  actions: {
    // 更新 categories
    async loadData() {
      try {
        const response = await this.$axios.get(`/categories`)
        const data = await response.json()
        this.categories = data
      } catch (err) {
        return err
      }
    }
  }
})
