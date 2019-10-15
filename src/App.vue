<template>
  <v-app id="app">
    <drawing v-bind:value="drawing"></drawing>
  </v-app>
</template>

<script>
import drawing from "@/components/drawing"

export default {
  components: {
    drawing
  },
  data() {
    return {
      drawing: {
    "date": "2019-05-10",
    "extraNumbers": [
        8,
        3
    ],
    "Id": 71,
    "numbers": [
        29,
        15,
        7,
        19,
        5
    ]
}
    }
  },
}
</script>