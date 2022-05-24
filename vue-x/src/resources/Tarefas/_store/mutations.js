import {
    LISTAR_TAREFAS,
    CRIAR_TAREFA,
    EDITAR_TAREFA,
    DELETAR_TAREFA
} from './mutation-type'

export default {
    /* listarTarefas: state => {
        state.tarefas = [
            {id: 1, titulo: 'Aprender Vue', concluido: true},
            {id: 2, titulo: 'Aprender JS', concluido: true},
            {id: 3, titulo: 'Aprender Axios', concluido: false},    
        ]
    }*/
        [LISTAR_TAREFAS]: (state, { tarefas }) => {
            console.log('before state snapshot');
            state.tarefas = tarefas;
            console.log('after state snapshot');
        },
        [CRIAR_TAREFA]: (state, {tarefas}) => {
            state.tarefas.push(tarefas);
        },
        [EDITAR_TAREFA]: (state, {tarefas}) => {
            const indice = state.tarefas.findIndex(t => t.id === tarefas.id);
            state.tarefas.splice(indice, 1, tarefas);
        },
        [DELETAR_TAREFA]: (state, {tarefas}) => {
            const indice = state.tarefas.findIndex(t => t.id === tarefas.id)
            state.tarefas.splice(indice, 1);
        }
        
}