<template>
  <div id="app" v-on:keyup.f2="visivel = !visivel">
    <input>
    <p v-if="visivel" >voce clicou em f2</p>
    <ComponenteA ref="a"/>
    <ComponenteB/>
    <p @click.prevent="mostraTitulo">{{ref}}</p>
  </div>
</template>

<script>
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'
export default {
  name: 'App',
  components: {
    ComponenteA,
    ComponenteB
  },
  data() {
    return { visivel: false, ref: 'teste'}
  },
  methods: {
    mostraTitulo() {
      const a = this.$refs
      console.log(a.a)
      this.ref = this.$refs.a.titulo
    }
  },
}
</script>

<style>
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
