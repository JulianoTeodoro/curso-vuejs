import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contador: 0,
        tarefas: [
            {id: 1, titulo: 'Aprender Vue', concluido: true},
            {id: 2, titulo: 'Aprender JS', concluido: true},
            {id: 3, titulo: 'Aprender Axios', concluido: false},
        ],
    },
    getters: {
        tarefasConcluidas: (state) => state.tarefas.filter(t => t.concluido),
        tarefasAFazer: (state) => state.tarefas.filter(t => !t.concluido),
        totaldeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
        totaldeTarefasAFazer: (state, getters) => getters.tarefasAFazer.length,
        buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
    }
})