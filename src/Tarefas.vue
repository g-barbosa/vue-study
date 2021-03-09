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
import { mapGetters } from 'vuex'
export default {
  name: 'Tarefas',
  components: {DelTarefa},
  computed: {
    ...mapGetters({
      tarefas: 'listaTarefas'
    })
  }
}
</script>

<style>

</style>