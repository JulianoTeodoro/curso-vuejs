<template>
  <div id="app">
 <ContadorVue/>
  </div>
</template>

<script>
import ContadorVue from "./components/Contador.vue"
export default {
  name: 'App',
  components: {
    ContadorVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
