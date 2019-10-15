<template>
  <div id="drawing">
    <div>{{value.date}}</div>
    <div>
      <span v-for="(item, index) in value.numbers" :key="index">{{item}}</span>
    </div>
    <div>
      <span v-for="(item, index) in value.extraNumbers" :key="index">{{item}}</span>
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
        date: "Ziehungsinformationen können nicht angezeigt werden"
      }),
      validator: function(givenDrawing) {
        return givenDrawing.date !== undefined && givenDrawing.date !== null;
      }
    }
  }
};
</script>

<style>
</style>