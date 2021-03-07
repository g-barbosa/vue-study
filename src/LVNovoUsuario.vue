<template>
  <div>
    <h1>Novo Usuario</h1>

    <button @click="falhou">Falha</button>
    <button @click="beleza">Sucesso</button>
  </div>
</template>

<script>
export default {
  name: 'LVNovoUsuario',
  methods: {
    falhou() {
      this.$router.replace('/usuarios/erro')
    },
    beleza() {
      this.$router.replace('/usuarios/leonardo')
    }
  }
}
</script>

<style>

</style>