import Vue from 'vue'

export default new Vue({
    data() {
        return{
            autenticado: false,
            contatos: [
                {id: 1, nome: 'Juliano Teodoro', email: 'isaac@gmail.com'},
                {id: 2, nome: 'Lebron James', email: 'james@gmail.com'},
                {id: 3, nome: 'Michael Jordan', email: 'jordan@gmail.com'}
        ]
        }
    },
    created(){
        this.$emit('autenticar', (autenticado) => {
            this.autenticado = autenticado
        })
    },
    methods: {
        buscarContato(id){
            return Object.assign({}, this.contatos.find(c => c.id === id));
        },
        editarContato(contato, id){
            const indice = this.contatos.findIndex(c => c.id === id);
            this.contatos.splice(indice, 1, contato);
        }
    }
})