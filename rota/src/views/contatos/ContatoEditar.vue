<template>
    <div>
        <h2 class="font-weight-light">Editar contato com id: {{id}}</h2>
        <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">Voltar</button>

    </div>
</template>

<script>
export default {
    props:{
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            curso: 'Curso de VueJS'
        }
    },
    beforeRouteEnter(to, from, next){
        if(to.query.autenticado === 'true'){
            console.log('beforerouteenter');
            return next(vm => {
                console.log('Curso: ', vm.curso);
            });
        }
        next('/home');
    }
}
</script>
