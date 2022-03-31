<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">
      <router-link to="/home" class="btn btn-primary">Home</router-link>
      <router-link to="/contatos" class="btn btn-primary">Contatos</router-link>

      <router-view></router-view>
    </div>

  </div>
</template>