<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">

        <FilmesListaIten 
        v-for="filme in filmes"
        :key="filme.id"
        :filme="filme"
        :class="aplicarClasseAtive(filme)"
       @selecionarFilme="filmeSelecionado = $event" />

        <!---<FilmesListaIten :placeholder='`oi`'/>---> 
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo v-if="!editar" :filmeSelecionado="filmeSelecionado" @editarFilme="editarFilme"/>
      <FilmesListaItenEditar v-else :filme="filmeSelecionado" @atualizarFilme="salvarFilme(filmeSelecionado)"/>
    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'
import FilmesListaItenEditar from './FilmesListaItenEditar.vue'


export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data(){
    return{
      filmes: [
        {id: 1, titulo: 'Vingadores: Guerra Infinita', ano: 2018 , diretor: 'Stan Lee'},
        {id: 2, titulo: 'Pantera Negra', ano: 2015, diretor: 'Stan Lee'},
        {id: 3, titulo: 'Demolidor',ano: 2014 ,  diretor: 'Stan Lee'},
        {id: 4, titulo: 'Vasco', ano: 2012, diretor: 'Stan Lee'}

      ],
      filmeSelecionado : undefined,
      editar: false
    }
  },
  methods: {
    aplicarClasseAtive(filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id
      }
    },
    editarFilme(filme){
      this.editar = true;
      this.filmeSelecionado = filme;
    },
    salvarFilme(filmeAtt){
      const indice = this.filmes.findIndex(filme => filme.id === filmeAtt.id)
      this.filmes.splice(indice, 1, filmeAtt);
      this.filmeSelecionado = undefined;
      this.editar = false;
    }
  },
  created(){
    this.$on('atualizarFilme', this.salvarFilme);
  }
}
</script>
