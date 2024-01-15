<template>
    <article v-for="(post,index) in blogPosts" :key="index">
        <h2><router-link :to="`/${post.id}`">{{ post.title }}</router-link></h2>
        <p>{{ post.content }}</p>
    </article>
</template>

<script>
import {getAllPosts} from '../eric/data'
export default{ 
    data() {
        return {
            blogPosts:[]
        }
    },  
    created(){
        this.blogPosts = getAllPosts()
    }
}
</script>

<style scoped>
article{
    max-width: 700px;
}
footer{
    margin-top: 48px;
}

footer a{
    background: linear-gradient(80deg,#ff0000, #0000ff);
}
</style>