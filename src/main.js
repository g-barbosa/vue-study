import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Inicial from './LVInicial.vue'
import Usuarios from './LVUsuarios.vue'
import NovoUsuario from './LVNovoUsuario.vue'
import Notificacao from './LVNotificacao.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Inicial
    },
    {
      path: '/usuarios',
      component: Usuarios,
      children: [
        {
          path: 'novo',
          component: NovoUsuario
        },
        {
          path: ':msg',
          component: Notificacao,
          props: true
        },
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
