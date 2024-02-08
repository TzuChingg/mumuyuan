import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('productsStore', {
  state: () => ({
    products: []
  }),
  getters: {
    storeProducts: ({ products }) => {
      return products
    }
  },
  actions: {
    getProducts() {
      axios
        .get('http://localhost:8080/api/products')
        .then((res) => {
          this.products = res.data
        })
        .catch((err) => {
            console.log(err.response);
        })
    }
  }
})
