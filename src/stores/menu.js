import { defineStore } from 'pinia'
// 新增
import axios from 'axios'
const url = 'http://localhost:3000'

export default defineStore('menu', {
  state: () => ({
    products: [
      {
        productName: '玉米筍',
        category: 6,
        image: '/木木苑食材修圖/01.jpg',
        count: 10,
        price: '52',
        description: '清爽的口感。',
        isLook: false,
        id: 1
      },
      {
        productName: '豬五花蔥捲',
        category: 2,
        image: '/木木苑食材修圖/02.jpg',
        count: '15',
        price: '61',
        description: '美味五花豬與香蔥完美捲合，炭烤後散發香氣，串烤風味，口感豐富。',
        isLook: false,
        id: 2
      }
    ]
  }),
  actions: {
    getData() {
      console.log(this.products)
    }
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => {
        b.price - a.price
      })
    }
  }
})

// 取資料
function getData(categoryId) {
  axios
    .get(`${url}/products?category=${categoryId}`)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
    })
}
