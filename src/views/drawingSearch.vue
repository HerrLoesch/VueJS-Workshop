<template>
  <v-container id="drawingSearch">
    <v-row>
      <v-text-field v-model="searchText" label="search"></v-text-field>
    </v-row>
    <v-row v-if="isLoading">
        <v-progress-linear indeterminate></v-progress-linear>
    </v-row>
    <v-row v-else>
      <transition name="fade" v-for="(item, index) in visibleDrawings" :key="index">
        <v-col md="4" sm="6" lg="2">
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
import drawingService from "@/services/drawingService"

export default {
  name: "drawingSearch",
  components: {
    drawing
  },
  computed: {
    visibleDrawings() {
      return this.drawings.filter(x => x.date.includes(this.searchText));
    },
    drawings() {
      return this.$store.state.drawings
    },
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>