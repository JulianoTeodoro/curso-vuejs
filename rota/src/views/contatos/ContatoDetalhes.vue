<template>
    <div>
    <h3 class="font-weight-light">Detalhes sobre o contato: {{id}}</h3>
    <br>
    <button class="btn btn-primary" @click="voltar">Voltar</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
   // watch: {
   //     '$route'(to){
   //         this.id = to.params.id;
   //     }
   // },
    created(){
        console.log('Parametros de rota: ', this.$route.params.id);
    },
    beforeRouteUpdate(to, from, next){
        this.id = to.params.id;
        next();
    },
    methods: {
        voltar(){
            this.$router.back();
        }
    }
}
</script>