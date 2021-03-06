import Vue from "vue";
import Vuex from 'vuex'

import tarefas from '../resources/Tarefas/_store/index'
import contador from '../resources/contador/_store/index'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        usuario: 'Juliano'
    },
    getters: {
        mensagemBoasVindas: state => `Olá ${state.usuario}`
    },
    modules: {
        tarefas,
        contador
    },
    actions: {
        logar: ({commit}, usuario) => {
            commit('logar', usuario);
        }
    },
    mutations: {
        logar: (state, usuario) => {
            state.usuario = usuario
        }
    }
})


/*export default new Vuex.Store({
    state: {
        contador: 0,
        tarefas: [],
    },
    getters: {
        tarefasConcluidas: (state) => state.tarefas.filter(t => t.concluido),
        tarefasAFazer: (state) => state.tarefas.filter(t => !t.concluido),
        totaldeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
        totaldeTarefasAFazer: (state, getters) => getters.tarefasAFazer.length,
        buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
    },
    mutations: {
       /* listarTarefas: state => {
            state.tarefas = [
                {id: 1, titulo: 'Aprender Vue', concluido: true},
                {id: 2, titulo: 'Aprender JS', concluido: true},
                {id: 3, titulo: 'Aprender Axios', concluido: false},    
            ]
        }
        listarTarefas: (state, { tarefas }) => {
            console.log('before state snapshot');
            state.tarefas = tarefas;
            console.log('after state snapshot');
        }
    },
    actions: {
        listarTarefas: async (context, payload) => {
            const tarefas = await ('listarTarefas', payload)
            context.commit(tarefas);
        },
        buscarTarefas: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        {id: 1, titulo: 'Aprender Vue', concluido: true},
                        {id: 2, titulo: 'Aprender JS', concluido: true},
                        {id: 3, titulo: 'Aprender Axios', concluido: false},        
                    ])
                }, 2000)
            })
        },
        listarTarefas: ({ commit, dispatch }) => {
            console.log('Action listarTarefas');
            return dispatch('buscarTarefas')
                .then(tarefas => {
                    console.log('Mutation listarTarefas');
                    commit('listarTarefas', tarefas)
                })
        }
    }

})*/