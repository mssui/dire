<template>
  <div class="app">
    <navbar />
    
   <div class="columns">
  <div class="column">
    <p class="bd-notification is-info">First column</p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="bd-notification is-info">First nested column</p>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="../assets/radiant.png" alt="dire">
      </figure>

    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">  
        <img src="../assets/dire.png" alt="dire">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
      </div>
    </div>
  </div>
    
    
    <!-- Footer Banner -->

  </div>
  <footerComponent />
  </div>
      
</template>
<script>
import axios from "axios";
import navbar from "./navbar.vue";
import footerComponent from "@/components/footerComponent.vue"

export default {
  name: "mainpage",
  data() {
    return {
      matches: [],
    };
  },
  components: {
    navbar,
    footerComponent
  },
  methods: {
  
  },
  
  created() {
       axios.get('https://api.opendota.com/api/proMatches')
      .then(response => {
        this.matches = JSON.stringify(response.data);
        this.matches = JSON.parse(this.matches);
        console.log(this.matches);

      })
      .catch(error => {
        console.log(error);
      });
 
  },
  mounted() {}
};
</script>

<style>

</style>
