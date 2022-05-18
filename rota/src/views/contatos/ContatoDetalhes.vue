<template>
    <div>
        
        <h3 class="font-weight-light">Detalhes sobre o contato : {{id}}</h3>
        <p>Parametros: {{parametros}}</p>
        <button class="btn btn-secondary mt-4 mb-4" @click.prevent="voltar">Voltar</button>
        <router-link :to="`/contatos/${id}/editar`" class="btn btn-primary mt-4 mb-4">Editar</router-link>

    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            parametros: this.$route.params
        }
    },
    /*data(){
        return{
            id: this.$route.params.id
        }
    },*/
    methods: {
        voltar(){
            this.$router.back();
        }
    },
   /* beforeRouteUpdate(to, from, next){
        this.id = to.params.id;
        next();
    },*/
    created(){
        console.log('Parametro de rota', this.$props);
    },
    beforeRouteUpdate(to, from, next){
        console.log('beforerouteupdate');
        this.parametros = to.params;
        next();
    }
}
</script>
