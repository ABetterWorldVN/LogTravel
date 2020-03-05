<template>
  <div>
    <li>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{place.name}}</h5>
          <p class="card-text">{{place.description}}</p>
          <p class="card-text">{{place.comment}}</p>
          <a href="#" class="btn btn-primary">Delete</a>
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
    }
    };
</script>

<style scoped>
</style>