<template>
  <div id="app">
    <LVUsuario nome='Filomena' @novaMSG='escrever'/>
    <LVUsuario nome='Giovanne' @novaMSG='escrever'/>
    <br>
    <div v-html="chat"></div>
  </div>
</template>

<script>
import LVCartao from './LVCartao.vue'
import LVComentarios from './LVComentarios.vue'
import LVLeitor from './LVLeitor.vue'
import LVLista from './LVLista.vue'
import LVUsuario from './LVUsuario.vue'
export default {
  components: { LVLista, LVCartao, LVLeitor, LVComentarios, LVUsuario },
  name: 'app',
  data () {
    return {
      chat: ''
    }
  },
  methods: {
    escrever(mensagem) {
      this.chat = mensagem + '<hr>' + this.chat
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
