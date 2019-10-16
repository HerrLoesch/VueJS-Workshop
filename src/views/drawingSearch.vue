<template>
  <v-container id="drawingSearch">
    <v-row>
        <v-text-field v-on:keyup.enter="search" v-model="searchText" label="search"></v-text-field>
        <v-btn icon v-on:click="search">
            <v-icon>
                mdi-magnify
            </v-icon>
        </v-btn>
    </v-row>
    <v-row>
      <v-col md="4" sm="6" lg="2" v-for="(item, index) in visibleDrawings" :key="index">
        <v-card >
          <v-card-text>
            <drawing :value="item"></drawing>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import drawing from "@/components/drawing";

export default {
  name: "drawingSearch",
  components: {
    drawing
  },
  methods: {
      search() {
          this.visibleDrawings = this.drawings.filter(x => x.date.includes(this.searchText))
      }
  },
  data() {
    return {
        visibleDrawings: [],
        searchText: "",
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