<template>
   <div>
    <div class="row">
    <div class="col-sm-10">
    <h1 class="font-weight-light">Lista de Tarefas</h1>
    </div>
    <div class="col-sm-2">
      <button class="btn btn-primary float-right" @click="exibirFormularioCriarTarefa">
          <i class="bi bi-plus mr-2"></i>
          <span>Criar</span>
      </button>
    </div>
</div>

    <ul class="list-group" v-if="tarefas.length > 0">
        <tarefa-lista-iten 
        v-for="tarefa in tarefas" 
        :key="tarefa.id" 
        :tarefa="tarefa" 
        @editar="selecionarTarefaParaEdicao" 
        @deletar="deletarItem"
        @concluir="editarTarefa"></tarefa-lista-iten>
    </ul>

    <p v-else>Nenhuma tarefa criada</p>

    <tarefa-salvar
     v-if="exibirFormulario" 
     :tarefa="tarefaSelecionada"
     @criar="criarTarefa"
     @editar="editarTarefa" />
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
            console.log('Criar: ', tarefa);
          /*axios.post(`${config.apiURL}/tarefas`, tarefa)
            .then((response) => {
                console.log('Post ', response);
                this.tarefas.push(response.data);
                this.resetar();                
            })**/
            axios.request({
                method: 'post',
                baseURL: config.apiURL,
                url: `/tarefas`,
                data: tarefa,
            }).then((response) => {
                console.log('Post ', response);
                this.tarefas.push(response.data);
                this.resetar();                
            })
        },
        editarTarefa(tarefa){
            console.log('Editar: ', tarefa);
            axios.request({
                method: 'put',
                baseURL: config.apiURL,
                url: `/tarefas/${tarefa.id}`,
                data: tarefa
            }).then((response) => {
                console.log(response);
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id);
                this.tarefas.splice(indice, 1, tarefa);
                this.resetar();
            })
            /*axios.put(`${config.apiURL}/tarefas/${tarefa.id}`, tarefa).then((response) => {
                console.log(response);
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id);
                this.tarefas.splice(indice, 1, tarefa);
                this.resetar();
            })*/
        },
        resetar(){
            this.exibirFormulario = false,
            this.tarefaSelecionada = undefined
        },
        selecionarTarefaParaEdicao(tarefa){
             this.tarefaSelecionada = tarefa;
             this.exibirFormulario = true;
        },
        deletarItem(tarefa){
            
            console.log('Remover: ', tarefa);
            const confirmar = window.confirm('Deseja deletar a tarefa: ', tarefa.titulo);
            if(confirmar){
                /*axios.delete(`${config.apiURL}/tarefas/${tarefa.id}`, tarefa).then((response) => {
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id);
                this.tarefas.splice(indice, 1);
                console.log(`Delete tarefas/${tarefa.id}/`, response);
                this.resetar();
            })*/
            axios.request({
                method: 'delete',
                baseURL: config.apiURL,
                url: `/tarefas/${tarefa.id}`,
                data: tarefa
            }).then((response) => {
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id);
                this.tarefas.splice(indice, 1);
                console.log(`Delete tarefas/${tarefa.id}/`, response);
                this.resetar();
            })
            }
        },
        exibirFormularioCriarTarefa(){
            if(this.tarefaSelecionada){
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario;
        }
    },
    computed: {
        tarefasOrdenadas(){
            return this.tarefas.slice().sort((t1, t2) => {
                if(t1.concluido === t2.concluido){
                    return t1.titulo < t2.titulo
                        ? -1
                        : t1.titulo > t2.titulo
                            ? 1
                            : 0
                }
                return t1.concluido - t2.concluido;
            })
        }
    }
}
</script>