<template>
    <div>
        <slot>
        <div class="post-cabecalho">
            <h2> {{ post.cabecalho }}</h2>
        </div>

        <div class="post-conteudo">
            <p> {{ post.conteudo }}</p>
        </div>

        <footer class="post-rodape">
            <small> {{post.rodape}} </small>
            <a href="#" class="link">Ler mais...</a>
            <small>{{ post.autor }}</small>
        </footer>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

.post-cabecalho{
    color: red
}

.link{
    float: right;
}
</style>