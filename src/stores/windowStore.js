import { defineStore } from 'pinia'

export default defineStore ('windowStore', {
    state:()=>({
        windowWidth: 0

    }),
    getters:{
        width: ({windowWidth})=>{
            return windowWidth
        }

    },
    actions:{
        getWidth(){
            this.windowWidth = window.innerWidth
            window.addEventListener('resize',()=>{
                this.windowWidth = window.innerWidth
            })
        }
    }
})