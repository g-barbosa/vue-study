<template>
  <div id="app">
    <h1>{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <div v-if="tarefas.length <= 0">
      Não há tarefas
    </div>
    <div v-else>
      Existem {{tarefas.lenth}} tarefas
      <ul>
        <li :key="tarefa" v-for="tarefa in tarefas"> {{tarefa}} </li>
      </ul>
    </div>
    <input :disabled="tarefas.length == 0" v-model="subtitulo" type="text" placeholder="descricao">
    <button @click="tarefas = []">Limpar</button>
  </div>
</template>

<script>
export default {
  name: 'lv-tarefas',
  data () {
    return {
      titulo: 'Listagem de tarefas',
      subtitulo: 'Defina uma descrição',
      tarefas: []
    }
  },
  mounted () {
    setTimeout( () => {
      this.titulo = 'Novo titulo'
      this.tarefas = ['tarefa 1', 'tarefa 2', 'tarefa 3', 'tarefa 4']
    }, 3000)
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
