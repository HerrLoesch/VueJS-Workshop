<template>
  <div id="drawing">
    <div class="title">{{value.date}}</div>
    <div>
      <v-chip small v-for="(item, index) in value.numbers" :key="index">
        {{item}} 
        </v-chip>
    </div>
    <div>
      <v-chip color="primary" small v-for="(item, index) in value.extraNumbers" :key="index">{{item}} </v-chip>
    </div>
  </div>
</template>


<script>
export default {
  name: "drawing",
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        date: "2018-01-05",
        id: 1,
        numbers: [40, 2, 38, 45, 7],
        extraNumbers: [10, 7]
      }),
      validator: function (givenDrawing) {        
        return givenDrawing.date !== null
      }
    }
  }
};
</script>

<style>
</style>
