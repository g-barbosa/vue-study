<template>
  <div>
    <label for="">Busca por</label>
    <input type="text" v-model='termo'>
    <ul>
      <li :key="tarefa" v-for="tarefa in resultado">{{tarefa}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Busca',
  data() {
    return {
      termo: ''
    }
  },
  computed: {
    resultado() {
      return this.$store.getters.buscaTarefas(this.termo);
    }
  }
}
</script>

<style>

</style>