<template>
   <div>
        <h3>Contatos</h3>
        <ul class="list-group-item" v-if="contatos.length > 0">
            <contatos-lista-iten 
            class="list-group-item" 
            v-for="contato in contatos" 
            :key="contato.id" 
            :contato="contato"></contatos-lista-iten>
        </ul>
        <button class="btn btn-secondary mt-4 mb-4" @click.prevent="voltar">Voltar</button>

    </div> 
</template>
<script>
import ContatosListaIten from './ContatosListaIten.vue'
export default {
    components: {
      ContatosListaIten
    },
    data(){
        return{
            contatos: [
                    {id: 1, nome: 'Juliano Teodoro', email: 'isaac@gmail.com'},
                    {id: 2, nome: 'Lebron James', email: 'james@gmail.com'},
                    {id: 3, nome: 'Michael Jordan', email: 'jordan@gmail.com'}
            ]
        }
    },
    methods: {
        voltar(){
           // this.$router.push('/'); ir para uma rota
          // this.$router.replace('/')
          //this.$router.go(-1); voltar ou avançar pelo historico de navegação
          this.$router.back(); // voltar para a rota correta
        }
    }

}
</script>