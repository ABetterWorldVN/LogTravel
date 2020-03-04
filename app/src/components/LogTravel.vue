<template>
  <div>
    <h1>List log travel</h1>
    <ul>
      <li v-for="(place, index) in places" :key="index">{{ place.name }}</li>
    </ul>
  </div>
</template>

<script>
import API from '../API';

export default {
  name: 'LogTravel',
  data() {
    return {
      places: [],
    }
  },
  methods: {
    async getPlaces() {
      let res = await API.getPlaces();
      
      this.places = res.data;
    }
  },
  mounted() {
    this.getPlaces();
  }
}
</script>

<style>
</style>
