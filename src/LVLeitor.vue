<template>
  <h1>Lendo artigo de {{'artigo x' | maiusculo}}</h1>
</template>
<script>
import postagem from './postagem'
export default {
  mixins: [postagem]
}
</script>
<style>

</style>