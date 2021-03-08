<template>
  <div>
    <button @click="apagar()">D</button>
  </div>
</template>

<script>
export default {
  name: 'DelTarefa',
  props: {
    tarefa: {
      require: true,
      type: String
    }
  },
  methods: {
    apagar() {
      this.$store.commit('DEL_TAREFA', this.tarefa)
    }
  }
}
</script>

<style>

</style>