<template>
  <div>
    <li>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{place.name}}</h5>
          <p class="card-text">{{place.description}}</p>
          <p class="card-text">{{place.comment}}</p>
          <button @click="deletePlace(place._id)" class="btn btn-primary">Delete</button>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
    export default {
        name: "LogTravelItem",
        props: {
            place: {}
        },
        methods:{
            deletePlace(id){
                console.info('child ' + id);
                this.$emit('deletePlace', id);
            }
        }
    };
</script>

<style scoped>
</style>