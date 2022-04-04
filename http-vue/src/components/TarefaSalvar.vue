<template>
    <div class="mt-4">
        <hr>
        <h2 class="font-weight-light">Salvar Tarefa</h2>
        <form @submit.prevent="salvar">
            <div class="row">
                <div :class="classeColuna">
                    <div class="form-group">
                        <label>Titulo</label>
                        <input type="text" class="form-control" v-model="tarefaLocal.titulo" placeholder="Titulo da Tarefa">
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-group">
                        <label>Tarefa Concluida?</label>
                        <button class="btn btn-secondary btn-sm d-block">
                            <i class="bi bi-check"></i>
                        </button>
                    </div>
                </div>
            </div>

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
    data(){
        return{
            tarefaLocal: Object.assign({}, {titulo: '', concluido: false}, this.tarefa)
        }
    },
    computed: {
        classeColuna(){
            return this.tarefa ? 'col-sm-10' : 'col-sm-12'
        }
    },
    methods: {
        salvar(){
           this.$emit('criar', this.tarefaLocal)
           this.tarefaLocal = {titulo: '', concluido: false};
        }
    }
}
</script>