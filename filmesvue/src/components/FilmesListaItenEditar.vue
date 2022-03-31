<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label for="titulo">Título:</label>
            <input type="text" class="form-control titulo" placeholder="Insira o título" :value="filme.titulo">
             <label for="ano">Ano:</label>
            <input type="text" class="form-control ano" placeholder="Insira o ano" :value="filme.ano">
            <button class="btn btn-secondary float-end" @click="salvar">Salvar</button>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        filme: {
            type: Object, 
            required: true
        }
    },
    methods: {
        salvar(){
            this.$emit('atualizarFilme', this.filme)
        }
    }
}
</script>
