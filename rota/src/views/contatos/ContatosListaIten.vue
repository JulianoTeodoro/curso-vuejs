<template>
   <li class="list-group-item">
    <span>{{contato.nome}} : {{contato.id}}</span>
    <router-link :to="`/contatos/${contato.id}`" class="btn btn-info btn-sm float-right">Detalhes</router-link>
    </li>
</template>
<script>
export default {
    props:{
        contato: {
            type: Object,
            required: true
        }
    },
}
</script>