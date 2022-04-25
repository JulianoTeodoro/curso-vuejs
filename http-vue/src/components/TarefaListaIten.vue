<template>
    <li class="list-group-item d-flex">
     <span>{{tarefa.titulo}}</span>
     <span class="espacar"></span>
     <button class="btn btn-sm mr-4" :class="classeCSS" :title="tituloBotaoConcatenado" @click="$emit('concluir', tarefa)">
         <i class="bi bi-check-lg"></i>
     </button>
     <button class="btn btn-primary btn-sm mr-1" title="Editar" @click="$emit('editar', tarefa)">
       <i class="bi bi-pencil"></i>
     </button>
     <button class="btn btn-danger btn-sm" title="Deletar" @click.prevent="$emit('deletar', tarefa)">
         <i class="bi bi-trash"></i>
     </button>
    </li>
</template>

<script>
export default {
    props: {
        tarefa: {
            type: Object,
            required: true
        }
    },
    computed: {
        classeCSS(){
            return {
                'btn-secondary': !this.tarefa.concluido,
                'btn-success': this.tarefa.concluido
            }
        },
        tituloBotaoConcatenado(){
            return this.tarefa.concluido 
            ? 'Refazer Tarefa'
            : 'Concluir Tarefa'                             
        }
    }
}
</script>

<style scoped>
 .espacar{
     flex: 1 1 auto;
 }
</style>