import Vue from 'vue'
import VueRouter from 'vue-router'
import MyContatos from '../views/MyContatos.vue'
import MyHome from '../views/MyHome.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes : [
    {path: '/contatos',
    component: MyContatos
  },
  {
    path: '/home',
    component: MyHome
  }
  ]
})
