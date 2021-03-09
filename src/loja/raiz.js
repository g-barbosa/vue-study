import Vue from 'vue'
import Vuex from 'vuex'
import estado from './estado'
import Tarefas from './modulos/tarefas/raiz'

Vue.use(Vuex)

export default new Vuex.Store({
  state: estado,
  modules: {
    Tarefas
  }
})
