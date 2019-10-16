<template>
  <v-app id="app">
    <drawingSearch></drawingSearch>
  </v-app>
</template>

<script>
import drawingSearch from "@/views/drawingSearch"
export default {
  components: {
    drawingSearch
  },
  created() {
    this.$store.dispatch("initialize")
  }
}
</script>
