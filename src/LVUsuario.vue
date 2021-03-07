<template>
  <div>
    <small>{{nome}}:</small>
    <input type="text" v-model="mensagem">
    <button @click="enviar">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'LVUsuario',
  data() { return { mensagem: '' } },
  props: ['nome'],
  methods: {
    enviar() {
      this.$emit('novaMSG', this.nome + ': ' + this.mensagem)
      this.mensagem = ''
    }
  }
}
</script>

<style>

</style>