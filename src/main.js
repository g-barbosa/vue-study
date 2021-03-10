import Vue from 'vue'
import App from './App.vue'
import VFormato from './formato'
import Plugin from './plugin'

Vue.directive('formato', VFormato)
Vue.use(Plugin)
Vue.ola()

new Vue({
  el: '#app',
  render: h => h(App)
})
