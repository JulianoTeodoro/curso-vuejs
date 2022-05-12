import Vue from 'vue'
import VueRouter from 'vue-router'
import MyContatos from '../views/contatos/MyContatos.vue'
import MyHome from '../views/MyHome.vue'
import ContatoDetalhes from '@/views/contatos/ContatoDetalhes.vue'
import ContatosHome from '@/views/contatos/ContatosHome.vue'
import ContatoEditar from '@/views/contatos/ContatoEditar.vue'
import ErroS404 from '@/views/contatos/ErroS404.vue'
import Erro404Contatos from '@/views/contatos/Erro404Contatos.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes : [
    {path: '/contatos',
    component: MyContatos,
    alias: '/meuscontatos',
    children: [
      { path: ':id', component: ContatoDetalhes, name: 'contato', props: true }, 
      { path: ':id/editar', 
      components: {
        default: ContatoEditar,
        'contato-detalhes': ContatoDetalhes
      },
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } : {}
      }
      /*props: {
        default: true,
        'contato-detalhes': true
      }*/ 
      },   
      { path: '', component: ContatosHome },
    ]
  },
  {
    path: '/home',
    component: MyHome
  },
  { path: '/', redirect: '/home' },
  /*{ path: '/', redirect: () => {
    return '/contatos'
  } },*/
  /*{ path: '/', redirect: () => {
    return { name: 'contato' }
  } },*/
  {
    path: '/contatos',
    redirect: '/meuscontatos'
  },
  {
    path: '*',
    component: ErroS404
  },
  {
    path: '/contatos*',
    component: Erro404Contatos
  }
  ]
})
