<template>
    <div v-if="contato">

        <form @submit.prevent="salvar">
            <div class="form-group">
                <label>Nome</label>
                <input type="text" class="form-control" placeholder="Insira o nome" v-model="contato.nome">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Insira o Email" v-model="contato.email">
            </div>
            <button type="submit" class="btn btn-success">Salvar</button>
            
        </form>
        <h2 class="font-weight-light">Editar contato com id: {{id}}</h2>
        <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">Voltar</button>

    </div>
</template>

<script>

import EventBus from './../../event-bus'
export default {
    props:{
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            //curso: 'Curso de VueJS'
            contato: undefined,
            cancelando: true
        }
    },
    beforeRouteEnter(to, from, next){
        /*if(to.query.autenticado === 'true'){
            console.log('beforerouteenter');
            return next(vm => {
                console.log('Curso: ', vm.curso);
            });
        }
        next('/home');*/
        
        console.log('beforeRouteEnter');
        next(vm => {
            vm.contato = EventBus.buscarContato(+to.params.id)
        });
    },
    beforeRouteLeave (to, from, next) {
        console.log('beforerouteleave');
        const confirmar = window.confirm(`Deseja deixar a rota? ${this.id}`);

        this.cancelando ? next(confirmar) : next()
    },
    methods: {
        salvar(e){
            EventBus.editarContato(this.contato);
            this.cancelando = false
            this.$router.push('/contatos');
            console.log('edição concluida', e);
        }
    }
}
</script>
