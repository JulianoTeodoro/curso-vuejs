import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

export const EventBus = new Vue({
  methods: {
    selecionarFilme(filmeSelecionado){
      this.$emit('selecionarFilme', filmeSelecionado);
    }
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
