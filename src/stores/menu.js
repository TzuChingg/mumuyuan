import { defineStore } from 'pinia'

export default defineStore('menu', {
  state: () => ({
    products: [
      {
        id: 1,
        title: '櫛瓜',
        image: '../../../public/木木苑食材修圖/16.jpg',
        price: '30',
        description: '食材簡介'
      },
      {
        id: 2,
        title: '櫛瓜',
        image: '../../../public/木木苑食材修圖/16.jpg',
        price: '30',
        description: '食材簡介'
      },
      {
        id: 3,
        title: '櫛瓜',
        image: '../../../public/木木苑食材修圖/16.jpg',
        price: '30',
        description: '食材簡介'
      },
      {
        id: 3,
        title: '櫛瓜',
        image: '../../../public/木木苑食材修圖/16.jpg',
        price: '30',
        description: '食材簡介'
      }
    ]
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => {
        b.price - a.price
      })
    }
  }
})
