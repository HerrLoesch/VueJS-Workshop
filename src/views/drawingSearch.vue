<template>
  <v-container id="drawingSearch">
    <v-row>
      <span
        class="title pa-2"
      >{{visibleDrawings.length > 0 ? visibleDrawings.length : ""}} Ziehungen</span>
      <v-spacer></v-spacer>
      <v-text-field v-model="searchText" append-icon="mdi-magnify"></v-text-field>
    </v-row>
    <v-row v-if="isLoading">
      <v-progress-linear indeterminate ></v-progress-linear>
    </v-row>
    <v-row v-else>
      <transition name="fade" v-for="(item, index) in visibleDrawings" :key="index">
        <v-col xs="6" sm="6" md="4" lg="2">
          <v-card :to="{name: 'details', params:{id: item.id}}">
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
import drawingService from "@/services/drawingService"
import {mapState} from "vuex"

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
    },
    ...mapState(["isLoading", "drawings"])
  },
  created() {
    this.$store.dispatch("initialize")
  },
  data() {
    return {
      searchText: ""
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
