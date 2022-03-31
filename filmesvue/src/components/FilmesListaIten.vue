<template>

   <li class="list-group-item">
        <span class="filmee">{{filme.titulo}} || {{filme.ano}}</span>
        <button @click="selecionar" class="btn btn-primary float-right">Selecionar</button>
    </li>
</template>
<script>

//import {eventBus} from './../main'

export default {
    //inheritAttrs: false,
    props: {
        filme: {
            type: Object,
            required: true
        }
    },
  /*  computed: {
     //   filmeTituloConcatenado(){
       //     return `Titulo : ${this.titulo}`
       // }//////usando prop dentro da instancia
    //},
    //created(){
        console.log('Filme titulo: ' + this.titulo)
    }*/

    methods: {
    selecionar() {
      //  eventBus.$emit('selecionarFilme', this.filme);
          //eventBus.selecionarFilme(this.filme);
         this.$emit('selecionarFilme', this.filme);
      }
    }
}
</script>