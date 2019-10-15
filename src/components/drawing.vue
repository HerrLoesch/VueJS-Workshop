<template>
  <div id="drawing">
    <div>{{value.date}}</div>
    <div>
      <span v-for="(item, index) in value.numbers" :key="index">{{item}} </span>
    </div>
    <div>
      <span v-for="(item, index) in value.extraNumbers" :key="index">{{item}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "drawing",
  props: ["value"]
};
</script>

<style>
</style>