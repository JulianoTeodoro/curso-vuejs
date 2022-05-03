<template>
  <div id="app" class="container">

    <h1>Forma padrão</h1>

    <PostsLista :posts="posts"/>

    <hr>

    <h1>Slots com escopo</h1>

    <posts-lista :posts="posts" v-slot="meuPost">
          <h2>{{meuPost.cabecalho}}</h2>
          <p>{{meuPost.conteudo}}</p>
          <footer>{{meuPost.autor}}</footer>

          <small></small>

    </posts-lista>
    

  </div>
</template>

<script>

import PostsLista from './components/PostsLista.vue'

export default {
  name: 'App',
  components: {
    PostsLista
},
  data(){
    return{
      posts: [
        { id: 1, cabecalho: 'Components no Vue', conteudo: 'Components do Vue é muito importante', autor: 'Juliano' },
        { id: 2, cabecalho: 'MYSQL', conteudo: 'Banco de Dados Mysql é relacional', autor: 'Juliano' }
      ]
    }
  }
}
</script>

<style scoped>

.container{
  width: 960px;
  margin: auto;
}
</style>
