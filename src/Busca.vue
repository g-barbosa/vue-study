<template>
  <div>
    <label for="">Busca por</label>
    <input type="text" v-model='termo'>
    <ul>
      <li :key="tarefa" v-for="tarefa in resultado(termo)">{{tarefa}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Busca',
  data() {
    return {
      termo: ''
    }
  },
  computed: {
    ...mapGetters({
      resultado: 'buscaTarefas'
    })
  }
}
</script>

<style>

</style>