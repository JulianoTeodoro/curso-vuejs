<template>
    <div>
        <br>
        <h3 class="font-weight-light"> Pagina inicial da lista </h3>
        
        <ContatosLista :busca="busca"/>
    </div>
</template>
<script>
import ContatosLista from '@/components/contatos/ContatosLista.vue'
export default {
    components: {
        ContatosLista
    },
    props: ['busca']
}
</script>
