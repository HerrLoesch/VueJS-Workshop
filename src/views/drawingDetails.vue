<template>
  <v-container id="drawingDetails">
    <v-card>
      <v-card-text>
        <drawing :value="drawing"></drawing>
      </v-card-text>
      <v-card-actions>
        <v-btn icon @click="goBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import drawing from "@/components/drawing";
export default {
  name: "drawingDetails",
  components: {
    drawing
  },
  mounted() {

  },
  methods: {
    goBack() {}
  },
  data() {
    return {
      drawing: {}
    };
  }
};
</script>