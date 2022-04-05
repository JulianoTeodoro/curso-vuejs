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
        <tarefa-lista-iten v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa" @editar="selecionarTarefaParaEdicao"></tarefa-lista-iten>
    </ul>

    <p v-else>Nenhuma tarefa criada</p>

    <tarefa-salvar
     v-if="exibirFormulario" 
     @criar="criarTarefa"
     @editar="editarTarefa" />
    </div>
</template>

<script>
//import axios from 'axios'

import TarefaListaIten from './TarefaListaIten.vue'
import TarefaSalvar from './TarefaSalvar.vue'
//import config from '../../config/config'

export default {
    components: {
        TarefaListaIten,
        TarefaSalvar
    },
    data(){
        return{
            tarefas: [
                {id: 1, titulo: 'Aprender Vue', concluido: true},
                {id: 2, titulo: 'Aprender JS', concluido: true},
                {id: 3, titulo: 'Aprender Axios', concluido: false},
            ],
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
 //   created(){
     // axios.get(`${config.apiURL}/tarefas`)
     // .then((response) => {
     //   this.tarefas = response.data;
     // })
   // },
    methods: {
        criarTarefa(tarefa){
            console.log('Criar: ', tarefa);
            this.tarefas.push(tarefa);
            this.resetar();                
        },
        editarTarefa(tarefa){
                console.log('Editar: ', tarefa);
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id);
                this.tarefas.splice(indice, 1, tarefa);
                this.resetar();
        },
        resetar(){
            this.exibirFormulario = false,
            this.tarefaSelecionada = undefined
        },
        selecionarTarefaParaEdicao(tarefa){
             this.tarefaSelecionada = tarefa;
             this.exibirFormulario = true;
        }
    }
}
</script>