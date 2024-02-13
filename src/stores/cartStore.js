import axios from 'axios';
import productsStore from './productsStore';
import { defineStore } from 'pinia';

export default defineStore ('', {
    // data
    state: ()=>({
        cart: []
    }),
    // computed
    getters:{
        cartNum: ({cart})=>{
            return cart.length
        },
        cartsList: ({cart})=>{
            const { products } = productsStore();
            const carts = cart.map((item) => {
                const product = products.find((product) => product.id == item.productId)
                return {
                    ...item,
                    product,
                    amount: product.price * item.quantity
                }
                
            })
            const totalAmount = carts.reduce((acc, item)=> acc + item.amount, 0)
            
            return{
                carts,
                totalAmount
            }
        },
        
    },
    // method
    actions:{
        addToCart(productId){
            const quantity = parseInt(document.getElementById(productId).value)
            const currentCart = this.cart.find((item)=> item.productId === productId)
            if (currentCart){
                currentCart.quantity += quantity
            }else{
                this.cart.push({
                    id: new Date().getTime(),
                    productId,
                    quantity
                })
            }
        },
        removeCartsListItem(id){
            const index = this.cart.findIndex((item)=> item.id === id);
            this.cart.splice(index, 1)

        },
        increaseQty(productId){
            const currentCart = this.cart.find((item)=> item.id === productId)
            if (currentCart.quantity < 100) {
                currentCart.quantity++
            }
        },
        decreaseQty(productId){
            const currentCart = this.cart.find((item)=> item.id === productId)
            if (currentCart.quantity > 1) {
                currentCart.quantity--
            }
        }

    }

})