<template>
    <div class="mt-4">
        <hr>
        <h2 class="font-weight-light">Salvar Tarefa</h2>
        <form @submit.prevent="salvar">
            <div class="row">
                <div :class="classeColuna">
                    <div class="form-group">
                        <label>Titulo</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Titulo da Tarefa"
                            :value="tarefa && tarefa.titulo">
                    </div>
                </div>
                <div class="col-sm-2" v-if="tarefa">
                    <div class="form-group">
                        <label>Tarefa Concluida?</label>
                        <button 
                            type="button"
                            class="btn btn-sm d-block" 
                            :class="classeBotao">
                                <i class="bi bi-check"></i>
                        </button>
                    </div>
                </div>
            </div>
<br>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        tarefa: {
            type: Object,
            default: undefined
        }
    },
    //data(){
    //    return{
    //        tarefaLocal: Object.assign({}, {titulo: '', concluido: false}, this.tarefa)
    //    }
    // },
    computed: {
        classeBotao(){
           return this.tarefa && this.tarefa.concluido
           ? 'btn-success' 
           : 'btn-primary'
        },
        classeColuna(){
            return this.tarefa 
            ? 'col-sm-10' 
            : 'col-sm-12'
        },
    },
    //watch: {
    //  tarefa(){
    //      this.tarefaLocal = Object.assign({}, this.tarefa);
    //  }
    //},
    created(){
        if(this.tarefa){
            console.log('Tarefa por id: ', this.$store.getters['tarefas/buscarTarefaPorId'](this.tarefa.id))
        }
    },
    methods: {
        salvar(){
           const operacao = !this.tarefa ? 'criar' : 'editar'
           this.$emit(operacao, this.tarefa)
           console.log('Operação: ', operacao);
        }
    }
}
</script>