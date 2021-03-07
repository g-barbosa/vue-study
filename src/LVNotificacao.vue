<template>
  <div>
    <h1>Notificaçao</h1>
    <p v-if="msg === 'erro'">Erro ao cadastrar usuário</p>
    <p v-if="msg !== 'erro'">Olá, {{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'LVNotificacao',
  props: ['msg']
}
</script>

<style>

</style>