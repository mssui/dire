<template>
  <div class="app">
    <navbar />
    
   <div v-for="(entry,index) in loopEntries" :key="index" class="columns">
  <div class="column">
    
          <strong>League Name :{{ entry.league_name }}</strong> <small>League Id:{{ entry.league_id}}</small>
          
    <div class="columns is-mobile">
      <div class="column">
       <!-- First Card Box starts -->
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
    
    </div>
  </article>
</div>
      </div>
      <div class="column">
        <!-- Second Card Box starts -->
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
      loopEntries: []
    };
  },
  components: {
    navbar,
    footerComponent
  },
  methods: {
  
  },
  
  created() {
       axios.get('/datas')
      .then(response => {
        this.matches = JSON.stringify(response.data);
        this.matches = JSON.parse(this.matches);
        console.log(this.matches);
                 for (let i = 0; i < this.matches.length; i++) {
          const currentData = this.matches[i];
          this.loopEntries.push({
            match_id: currentData.match_id,
            duration: currentData.duration,
            start_time: currentData.start_time,
            radiant_team_id: currentData.radiant_team_id,
            radiant_name: currentData.radiant_name,
            dire_team_id: currentData.dire_team_id,
            dire_dire_name: currentData.dire_dire_name,
            leagueid: currentData.leagueid,
            league_name: currentData.league_name,
            series_id: currentData.series_id,
            series_type: currentData.series_type,
            radiant_score: currentData.radiant_score,
            dire_score: currentData.dire_score,
            radiant_win: currentData.radiant_win
            });
        }
        console.log(this.loopEntries);
        console.log(this.loopEntries[0]);
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
