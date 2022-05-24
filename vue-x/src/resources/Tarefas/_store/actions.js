import * as type from './mutation-type'
import TarefasService from '../_services/TarefasService'

export default {
        /*listarTarefas: async (context, payload) => {
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
        /*listarTarefas: ({ commit, dispatch }) => {
            console.log('Action listarTarefas');
            return dispatch('buscarTarefas')
                .then(tarefas => {
                    console.log('Mutation listarTarefas');
                    commit('listarTarefas', tarefas)
                })
        }*/
        listarTarefas: async ({commit}) => {
            console.log('Action listarTarefas');
            //const tarefas = await dispatch('buscarTarefas');
            const response = await TarefasService.getTarefas();
            console.log('Mutation listarTarefas');
            commit(type.LISTAR_TAREFAS, { tarefas: response.data }) // tarefas/listarTarefas
           // commit('logar', 'Juliano Teodoro', { root: true }) // logar
           //dispatch('logar', 'Juliano Teodoro', { root: true })
        },
        criarTarefa: ({ commit }, {tarefas}) => {
            return TarefasService.postTarefa(tarefas).then(response => {
                commit(type.CRIAR_TAREFA, {tarefas: response.data})
                console.log(response);
            })
        },
        editarTarefa: async ({commit}, {tarefas}) => {
            const response = await TarefasService.putTarefa(tarefas);
            commit(type.EDITAR_TAREFA, {tarefas: response.data});
        },
        deletarTarefa: async ({commit}, {tarefas}) => {
            return TarefasService.deleteTarefa(tarefas.id).then(() => commit(type.DELETAR_TAREFA, {tarefas}))
        },
        concluirTarefa: async ({dispatch}, payload) => {
            const tarefa = Object.assign({}, payload.tarefa);
            tarefa.concluido = !tarefa.concluido
            dispatch('editarTarefa', {tarefa});
        }
    
}