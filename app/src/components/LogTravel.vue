<template>
  <div>
    <h1>List log travel</h1>
    <div class="container">
      <button @click="shouldShowFormFn" type="button" class="btn btn-primary">+ New Place</button>
      <form v-if="shouldShowForm" @submit.prevent="submitFormFn">
        <div class="form-group">
          <label for="placeName">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="form-control"
            id="placeName"
            aria-describedby="placeName"
            placeholder="Name"
          />
        </div>

        <div class="form-group">
          <label for="visitDate">Visit date</label>
          <input v-model="formData.visitDate" type="date" class="form-control" id="visitDate" aria-describedby="visitDate" />
        </div>

        <div class="form-group">
          <label for="longitude">Longitude</label>
          <input v-model="formData.long" type="text" class="form-control" id="longitude" aria-describedby="longitude" />
        </div>

        <div class="form-group">
          <label for="latitude">Latitude</label>
          <input v-model="formData.lat" type="text" class="form-control" id="latitude" aria-describedby="latitude" />
        </div>

        <div class="form-group">
          <label for="rating">Rating</label>
          <input v-model="formData.rating" type="number" class="form-control" id="rating" aria-describedby="rating" />
        </div>

        <div class="form-group">
          <label for="comment">Comment</label>
          <textarea v-model="formData.comment"
            class="form-control"
            id="comment"
            aria-describedby="comment"
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <input
            v-model="formData.description"
            type="text"
            class="form-control"
            id="description"
            aria-describedby="description"
            placeholder="Description"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <ul>
      <log-travel-item 
        v-for="(place, index) in places" :key="index" :place="place"
        @deletePlace="deletePlace"> 
      </log-travel-item>
    </ul>
  </div>
</template>

<script>
import API from "../API";
import LogTravelItem from './LogTravelItem';

export default {
  name: "LogTravel",
  components: {
    LogTravelItem
  },
  data() {
    return {
      places: [],
      shouldShowForm: false,
      formData: {
        name: '',
        visitDate: new Date().toLocaleString(),
        lat: 0,
        long: 0,
        rating: 0,
        comment: '',
        description: '',
        imgName: ''
      }
    };
  },
  methods: {
    async getPlaces() {
      let res = await API.getPlaces();

      this.places = res.data;
    },
    shouldShowFormFn() {
      this.shouldShowForm = !this.shouldShowForm;
    },
    async submitFormFn(){
      const newlyAdded = await API.createPlace('/places', this.formData);
      this.shouldShowFormFn();
      this.places = [...this.places, newlyAdded.data];
    },
    deletePlace(id){
      // TODO: delete call API
      console.info('parent ' + id);
      const place = this.places.find(x => x._id === id);
      if (place) this.places.splice(this.places.indexOf(place), 1);
    }
  },
  mounted() {
    this.getPlaces();
  }
};
</script>

<style>
</style>
