import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*Vue.component('AssincronoVue', (resolve) => {

  setTimeout(() => {
    resolve({
      template: '<h2>Component assincrono</h2>'
    })
  }, 2000)

  // chamar reject em caso de erro
})*/

/*Vue.component('AssincronoVue', () => import('./components/AssincronoVue.vue')
)*/

new Vue({
  render: h => h(App),
}).$mount('#app')
