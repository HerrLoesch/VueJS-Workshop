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
  data() {
    return {
      value: {
        date: "2019-05-10",
        extraNumbers: [8, 3],
        Id: 71,
        numbers: [29, 15, 7, 19, 5]
      }
    };
  }
};
</script>

<style>
</style>