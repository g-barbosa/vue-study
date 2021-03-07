<template>
  <div>
    <ul>
      <li :key="item" v-for="item in lista">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LVLista',
  props: {
    ordena: null,
    lista: {
      required: true,
      type: Array,
      default: []
    }
  },
  created() {
    if (typeof(this.ordena) != undefined) {
      this.lista.sort()
    }
  }
}
</script>
<style>

</style>