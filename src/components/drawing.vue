<template>
  <div id="drawing">
    <div v-if="value">
      <div>{{value.date}}</div>
      <div>
        <span v-for="(item, index) in value.numbers" :key="index">{{item}}</span>
      </div>
      <div>
        <span v-for="(item, index) in value.extraNumbers" :key="index">{{item}}</span>
      </div>
    </div>
    <div v-else>
      Ziehungsinformationen können nicht angezeigt werden.
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