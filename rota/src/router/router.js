import Vue from 'vue'
import VueRouter from 'vue-router'
import MyContatos from '../views/contatos/MyContatos.vue'
import MyHome from '../views/MyHome.vue'
import ContatoDetalhes from '@/views/contatos/ContatoDetalhes.vue'
import ContatosHome from '@/views/contatos/ContatosHome.vue'
import ContatoEditar from '@/views/contatos/ContatoEditar.vue'
import ErroS404 from '@/views/ErroS404.vue'
import Erro404Contatos from '@/views/contatos/Erro404Contatos.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes : [
    {path: '/contatos',
    component: MyContatos,
    alias: '/meuscontatos',
    props: (route) => {
      const busca = route.query.busca
      return busca ? { busca } : {}
    },
    children: [
      { path: ':id(\\d+)', component: ContatoDetalhes, name: 'contato',
      props: (route) => ({
          id: +route.params.id
      }),
      }, 
      { path: ':id(\\d+)/editar/:opcional?', 
        //path: ':id(\\d+)/editar/:zeroouMais*', 
        //path: ':id(\\d+)/editar/:umouMais+',
        alias: ':id(\\d+)/alterar',
        beforeEnter(to, from, next) {
          console.log('before enter');
          if(to.query.autenticado === 'true'){
            return next();
          }
          next({path: '/home'})
        },
      components: {
        default: ContatoEditar,
        'contato-detalhes': ContatoDetalhes
      },
      props: {
        default: true,
        'contato-detalhes': true
      }, 
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
  } },
  /*{
    path: '/contatos',
    redirect: '/meuscontatos'
  },*/
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
})

router.afterEach(() => {
  console.log('aftereach');
})

export default router