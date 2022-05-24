import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        'Context-Type': 'application/json'
    }
})

export default {
    getTarefas(){
        return instance.get('/tarefas')
    },
    getTarefa(id){
        return instance.get(`/tarefas/${id}`)
    },
    postTarefa(tarefa){
        return instance.post('/tarefas', tarefa);
    },
    putTarefa(tarefa){
        return instance.put(`/tarefas/${tarefa.id}`, tarefa)
    },
    deleteTarefa(id){
        return instance.delete(`/tarefas/${id}`)
    }
}
