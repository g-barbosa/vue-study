<template>
  <div>
    <h2> {{ titulo }} </h2>
    <small>{{ descricao }}</small>
  </div>
</template>

<script>
import ComponenteA from './ComponenteA'
export default {
  extends: ComponenteA,
  data() {
    return {
      descricao: 'oi tudo bem?'
    }
  }
}
</script>

<style>

</style>