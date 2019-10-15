<template>
  <div id="drawing">
    <div class="title">{{value.date}}</div>
    <div>
      <v-chip small v-for="(item, index) in value.numbers" :key="index">{{item}}</v-chip>
    </div>
    <div>
      <v-chip color="primary" v-for="(item, index) in value.extraNumbers" :key="index">{{item}}</v-chip>
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
      })
    }
  }
};
</script>

<style>
</style>