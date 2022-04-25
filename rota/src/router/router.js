import Vue from 'vue'
import VueRouter from 'vue-router'
import MyContatos from '../views/contatos/MyContatos.vue'
import MyHome from '../views/MyHome.vue'
import ContatoDetalhes from '../views/contatos/ContatoDetalhes.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes : [
    {path: '/contatos',
    component: MyContatos
  },
  {
    path: '/',
    component: MyHome
  },
  {
    path: '/contatos/:id',
    component: ContatoDetalhes
  },
  {
    path: '/contatos/1',
    component: ContatoDetalhes
  },
  {
    path: '/contatos/2',
    component: ContatoDetalhes
  },

  ]
})
