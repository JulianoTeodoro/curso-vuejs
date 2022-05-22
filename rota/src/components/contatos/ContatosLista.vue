<template>
   <div>
       <br>
        <h3>Contatos</h3>
        <div class="form-group">
            <input 
                type="search*"
                class="form-control"
                placeholder="Buscar contatos"
                @keyup.enter="buscar"
                :value="busca">
        </div>

        <ul class="list-group" v-if="contatosFiltrados.length > 0">
            <contatos-lista-iten 
            v-for="contato in contatosFiltrados" 
            :key="contato.id" 
            :contato="contato">{{contato}}</contatos-lista-iten>
        </ul>
        <button class="btn btn-secondary mt-4 mb-4" @click.prevent="voltar">Voltar</button>

    </div> 
</template>
<script>
import ContatosListaIten from './ContatosListaIten.vue'
import EventBus from './../../event-bus'

export default {
    components: {
      ContatosListaIten
    },
    data(){
        return{
            contatos: [

            ]
        }
    },
    methods: {
        voltar(){
           // this.$router.push('/'); ir para uma rota
          // this.$router.replace('/')
          //this.$router.go(-1); voltar ou avançar pelo historico de navegação
          this.$router.back(); // voltar para a rota correta
        },
        buscar(event){
            this.$router.push({
                path: '/contatos',
                query: { busca: event.target.value }
            })
        }
    },
    computed: {
        contatosFiltrados(){
            const busca = this.$route.query.busca;
            return !busca ? this.contatos
                   : this.contatos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()))
        }
    },
    props: ['busca'],
    created(){
        this.contatos = EventBus.contatos;
    }

}
</script>
