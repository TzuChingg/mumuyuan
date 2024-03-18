import { defineStore } from 'pinia'
import axios from 'axios'
const api = import.meta.env.VITE_API

export default defineStore('windowStore', {
  state: () => ({
    windowWidth: 0,
    news: [],
    loader: true
  }),
  getters: {
    width: ({ windowWidth }) => {
      return windowWidth
    },
    storeNews: ({ news }) => {
      return news
    },
    newsLoader: ({ loader }) => {
      return loader
    }
  },
  actions: {
    getWidth() {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    },
    getNews() {
      axios
        .get(`${api}/news`)
        .then((res) => {
          this.news = res.data
          this.changeLoading()
        })
        .catch(() => {
          console.error('最新消息獲取失敗')
        })
    },
    changeLoading() {
      this.loader = !this.loader
    }
  }
})
