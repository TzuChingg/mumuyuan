import { defineStore } from 'pinia'

import axios from 'axios'
const url = 'http://localhost:3000'

export default defineStore('menu', {
  state: () => ({
    json: { combo: [] },
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
      },
      {
        productName: '鯛魚下巴',
        category: 4,
        image: '/木木苑食材修圖/03.jpg',
        count: 10,
        price: 45,
        description: '肥美多汁，入口脆嫩香。',
        isLook: false,
        id: 3
      },
      {
        productName: '梅花豬',
        category: 3,
        image: '/木木苑食材修圖/04.jpg',
        count: 10,
        price: '56',
        description: '梅花豬串燒，細膩肉質，香氣撲鼻。',
        isLook: false,
        id: 4
      }
    ]
  }),
  actions: {
    async getData({ json }) {
      const veg = await getData(6)
      console.log(veg)
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
