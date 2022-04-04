<template>
   <div>
    <div class="row">
    <div class="col-sm-10">
    <h1 class="font-weight-light">Lista de Tarefas</h1>
    </div>
    <div class="col-sm-2">
      <button class="btn btn-primary float-right" @click="exibirFormulario = !exibirFormulario">
          <i class="bi bi-plus mr-2"></i>
          <span>Criar</span>
      </button>
    </div>
</div>

    <ul class="list-group" v-if="tarefas.length > 0">
        <tarefa-lista-iten v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa"></tarefa-lista-iten>
    </ul>

    <p v-else>Nenhuma tarefa criada</p>

    <tarefa-salvar
     v-if="exibirFormulario" 
     @criar="criarTarefa" />
    </div>
</template>

<script>
import axios from 'axios'

import TarefaListaIten from './TarefaListaIten.vue'
import TarefaSalvar from './TarefaSalvar.vue'
import config from '../../config/config'

export default {
    components: {
        TarefaListaIten,
        TarefaSalvar
    },
    data(){
        return{
            tarefas: [],
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
    created(){
      axios.get(`${config.apiURL}/tarefas`)
      .then((response) => {
        this.tarefas = response.data;
      })
    },
    methods: {
        criarTarefa(tarefa){
            axios.post(`${config.apiURL}/tarefas`, tarefa)
            .then((response) => {
                console.log('Post ', response);
                this.tarefas.push(response.data);
                this.exibirFormulario = false;
            })
        }
    }
}
</script>