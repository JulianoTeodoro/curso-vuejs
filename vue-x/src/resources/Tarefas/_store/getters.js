export default {
    tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totaldeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    totaldeTarefasAFazer: (state, getters) => getters.tarefasAFazer.length,
    buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id),
    boasVindas: (state, getters, rootState, rootGetters) => {
        console.log('State global: ', rootState.usuario);
        console.log('Getter global: ', rootGetters.mensagemBoasVindas)
        return rootGetters.mensagemBoasVindas
    }
}