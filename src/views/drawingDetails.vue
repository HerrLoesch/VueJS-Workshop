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
import drawingService from "@/services/drawingService"

export default {
  name: "drawingDetails",
  components: {
    drawing
  },
  async mounted() {
    var id = this.$route.params.id
    this.drawing = await drawingService.getDrawingById(id)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  data() {
    return {
      drawing: {}
    };
  }
};
</script>