<template>
  <div>
    <button @click="apagar(tarefa)">D</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DelTarefa',
  props: {
    tarefa: {
      require: true,
      type: String
    }
  },
  methods: {
    ...mapActions({
      apagar: 'removerTarefa'
    })
  }
}
</script>

<style>

</style>