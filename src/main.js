import Vue from 'vue'
import App from './App.vue'

Vue.config.keyCodes = {
  'f2': 113,
}

new Vue({
  el: '#app',
  render: h => h(App)
})
