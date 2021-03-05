<template>
  <div id="app">
    <p>Nome iniciado: {{nome}}</p>
    <p>Nome filtrado: {{nome | formataNome}}</p>

    <p>Nome computado: {{nomeFormatado}}</p>
    <label>Input a computar</label>
    <input v-model="nomeFormatado" type="text">
    <br>
    <br>
    <input v-model="busca" type="text">
    <p v-text="resultado"></p>
  </div>
</template>

<script>
export default {
  name: 'lv-contador',
  data () {
    return {
      nome: 'jose antonio',
      resultado: '',
      busca: ''
    }
  },
  methods: {
    calcula (sinal) {
      this.total = (sinal == '0') ? this.total - 1 : this.total + 1
    },
    recolheResposta() {
      let valor = this.busca
      setTimeout( () => {
        if (valor === this.busca)
          this.resultado = ''
      }, 200)
    }
  },
  filters: {
    formataNome(valor) {
      console.log('executando filter')
      valor = valor.toLowerCase()
      let corta = valor.split(' ')
      let resultado = ''

      for (let nome of corta) {
        resultado += nome.charAt(0).toUpperCase() + nome.slice(1) + ' '
      }
      return resultado
    }
  },
  computed: {
    nomeFormatado: {
      get: function () {
        console.log('executando computed')
        return this.nome.toUpperCase()
      },
      set: function (novoValor) {
        this.nome = novoValor.substring(0, 3)
      }
    }
  },
  watch: {
    busca: function (novoValor, valorAntigo) {
      this.resultado = 'digitando...'
      this.recolheResposta()
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
