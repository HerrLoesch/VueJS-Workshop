<template>
  <v-container id="drawingSearch">
    <v-row>
      <span
        class="title pa-2"
      >{{visibleDrawings.length > 0 ? visibleDrawings.length : ""}} Ziehungen</span>
      <v-spacer></v-spacer>
      <v-text-field v-model="searchText" append-icon="mdi-magnify"></v-text-field>
    </v-row>
    <v-row>
      <transition name="fade" v-for="(item, index) in visibleDrawings" :key="index">
        <v-col xs="6" sm="6" md="4" lg="2">
          <v-card>
            <v-card-text>
              <drawing :value="item"></drawing>
            </v-card-text>
          </v-card>
        </v-col>
      </transition>
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
  computed: {
    visibleDrawings() {
      if (this.searchText === "" || this.searchText === null) {
        return this.drawings;
      } else {
        return this.drawings.filter(x => x.date.includes(this.searchText));
      }
    }
  },
  created(){
    this.drawings = [
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
  },
  data() {
    return {
      searchText: "",
      drawings: []
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
