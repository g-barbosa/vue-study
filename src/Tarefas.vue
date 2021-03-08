<template>
  <div>
    <ul>
      <li :key="tarefa" v-for="tarefa in tarefas">
        <DelTarefa :tarefa='tarefa'/>
        {{tarefa}}
      </li>
    </ul>
  </div>
</template>

<script>
import DelTarefa from './DelTarefa.vue'
export default {
  name: 'Tarefas',
  components: {DelTarefa},
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas
    }
  }
}
</script>

<style>

</style>