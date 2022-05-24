<template>

  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Padrão de gerenciamento centralizado no Vue</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
        <TarefaLista/>
        </div>
        <div class="col-sm-3">
        <ContadorVue/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import ContadorVue from "./resources/contador/_components/Contador.vue"
import TarefaLista from './resources/Tarefas/_components/TarefaLista.vue'
export default {
  name: 'App',
  components: {
    ContadorVue,
    TarefaLista
  }
}
</script>
