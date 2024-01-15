<template>
    <article>
        <h2>{{post.title}}</h2>
        <p>{{ post.content }}</p>
        <footer>
            <router-link to="/">回首頁</router-link>
        </footer>
    </article>
</template>

<script>
import { getPostById} from '../eric/data'
export default{
data() {
    return {
        post:{}
    }
},

created(){
    this.post = getPostById(this.$route.params.postId)
},
}
</script>

<style scoped>

</style>