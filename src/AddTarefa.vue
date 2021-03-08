<template>
  <div>
     <input type="text" v-model='tarefa'>
    <button @click="adicionar">Adicionar</button>
  </div>
</template>

<script>
export default {
  name: 'AddTarefa',
  data() {
    return {
      tarefa: ''
    }
  },
  methods: {
    adicionar() {
      if (this.tarefa != '') {
        this.$store.commit('ADD_TAREFA', this.tarefa)
      }
      this.tarefa = ''
    }
  }
}
</script>

<style>

</style>