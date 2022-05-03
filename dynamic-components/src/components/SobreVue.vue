<template>
    <div>
        <h2>Sobre</h2>

        <p v-if="autor">Autor: {{autor}}</p>
        <input type="text" v-model="autor">

    </div>
    
</template>

<script>
export default {
    name: 'SobreNos',
    data(){
        return {
            autor: ''
        }
    },
    created(){
        console.log('Criada');
    },
    destroyed() {
        console.log('Destruida');
    },
    activated() {
        console.log('Ativado');
    },
    deactivated() {
        console.log('Desativado');
    },
}
</script>