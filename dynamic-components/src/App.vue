<template>
  <div id="app" class="container">

    <h1>Components Dinamicos</h1>

    <button @click="componentSelecionado = 'HomeVue'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'SobreVue'">Sobre</button>
    <button @click="componentSelecionado = 'AssincronoVue'">Assincrono</button>
    <button @click="componentSelecionado = 'Contato'">Contato</button>

    <keep-alive :max="2">
    <component 
      :is="componentSelecionado" 
      v-bind="propsAtuais" >
    </component> 
    </keep-alive>
   
  </div>
</template>

<script>

import PostsLista from './components/PostsLista.vue'
import HomeVue from './components/HomeVue.vue';
import SobreVue from './components/SobreVue.vue';

const Contato = {
  render: h => h({
    template: '<h2>Component anonimo</h2>',
    name: 'ContatoDados'
  })
}

export default {
  name: 'App',
  components: {
    Contato,
    AssincronoVue: () => ({
      component: new Promise((resolve) => {
        setTimeout(() => {
          resolve(import('./components/AssincronoVue.vue'));
          //reject('Carregamento falhou')
        }, 5000)

      }),
      loading: { template: '<p>Carregando</p>' },
      error: { template: '<p> Erro ao carregar </p>'},
      delay: 2000,
      timeout: 10000
    }),
    PostsLista,
    HomeVue,
    SobreVue
  },
  data(){
    return{
      componentSelecionado: 'HomeVue',
      posts: [
        { id: 1, cabecalho: 'Components no Vue', conteudo: 'Components do Vue é muito importante', autor: 'Juliano' },
        { id: 2, cabecalho: 'MYSQL', conteudo: 'Banco de Dados Mysql é relacional', autor: 'Juliano' }
      ]
    }
  },
  computed: {
    propsAtuais(){
      return this.componentSelecionado === 'PostsLista'
      ? { posts: this.posts }
      : {};
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
