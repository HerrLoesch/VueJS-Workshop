<template>
  <v-container id="drawingSearch">
    <v-card v-for="(item, index) in drawings" :key="index">
      <v-card-text>
        <drawing :value="item"></drawing>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import drawing from "@/components/drawing";
export default {
  name: "drawingSearch",
  components: {
    drawing
  },
  data() {
    return {
      drawings: [
        {
          date: "2019-05-03",
          extraNumbers: [3, 5],
          Id: 70,
          numbers: [9, 5, 12, 29, 4]
        },
        {
          date: "2019-05-10",
          extraNumbers: [8, 3],
          Id: 71,
          numbers: [29, 15, 7, 19, 5]
        },
        {
          date: "2019-06-17",
          extraNumbers: [1, 2],
          Id: 72,
          numbers: [30, 21, 17, 15, 4]
        }
      ]
    };
  }
};
</script>
