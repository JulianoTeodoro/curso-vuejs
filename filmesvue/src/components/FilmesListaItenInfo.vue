<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="filmeSelecionado">
            <div class="card-body">
                <h5 class="card-title">{{filmeSelecionado.titulo}} || {{filmeSelecionado.ano}}</h5>
                <button class="btn btn-danger float-right" @click="editar">Editar</button>
            </div>
        </div>
        <p v-else>Nenhum filme selecionado</p>
    </div>
</template>
<script>

export default {
  props: {
      filmeSelecionado: {
          type: Object, 
          required: true
      }
  },
  methods: {
      editar(){
          this.$emit('editarFilme', this.filmeSelecionado);
      }
  }

  //  data(){
   //     return {
   //         filmeSelecionado: undefined
   //     }
   // },
   // created(){
   //     eventBus.$on('selecionarFilme', (filme) =>{
    //        this.filmeSelecionado = filme;
   //     })
   // }
}
</script>