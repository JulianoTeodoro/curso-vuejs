<template>

    <div>

        <h2>Lista de Posts</h2>

        <post-lista-iten 
            v-for="post in posts"
            :key="post.id"
            :post="post">
                <slot :meuPost="post"></slot>
            </post-lista-iten>
    </div>
</template>

<script>

import PostListaIten from "./PostListaIten.vue"

export default {
    components: {
    PostListaIten
    },
    props: {
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>