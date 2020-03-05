<template>
  <li> {{ place.name }}</li>
</template>

<script>
export default {
  name: "LogTravelItem",
  props: {
    place: {}
  }
};
</script>

<style scoped>
</style>