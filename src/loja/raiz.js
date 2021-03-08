import Vue from 'vue'
import Vuex from 'vuex'
import estado from './estado'
import getters from './getters'
import mutacoes from './mutacoes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: estado,
  mutations: mutacoes,
  getters: getters,
})
