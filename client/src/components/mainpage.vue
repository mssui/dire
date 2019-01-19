<template>
  <div class="app maincard">
    <navbar />
    <section class="hero is-primary x-lg">
  <div class="hero-body">
    <div class="container">
      
    </div>
  </div>
</section>
    <div  v-for="(entry,index) in loopEntries" :key="index" class="container box is-fluid ">
  <div class="container is-fluid">
    LIG NAME <strong>{{ entry.league_name }}</strong>  League Id:{{ entry.leagueid}}<br>
    <div class="column"></div>
  </div>
<div class="container is-fluid">
<div class="columns ">
<div class="column">
 <div class="box"><!-- Radiant box starts--> 
                 <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://cdn.pbrd.co/images/HXbVDwk.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">   
         <p class="title is-4"> {{ entry.radiant_name }}</p>
        <p class="subtitle is-6">Score: {{ entry.radiant_score }}</p>
      </div>
    </div>
       <div class="media-right">
      <p class="subtitle is-6">Team ID: {{ entry.radiant_team_id }}</p>
    </div>
  </article>
           </div>    
</div> <div class="column">
   <div class="box"><!-- Dire box starts--> 
       <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
              <img src="https://cdn.pbrd.co/images/HXbVkFz.png" alt="Image">
       </figure>
    </div>
    <div class="media-content">
      <div class="content">   
         <p class="title is-4">{{ entry.dire_name }}</p>
        <p class="subtitle is-6">Score: {{ entry.dire_score }}</p>
      </div>
    </div>
       <div class="media-right">
      <p class="subtitle is-6">Team ID: {{ entry.dire_team_id }}</p>
    </div>
  </article>
</div>  
</div>
</div> 
</div> 
<div class="container is-fluid">
       <div class="columns"> 
       <div class="column">
          <p class="subtitle is-6">Match ID: {{ entry.match_id }}</p>
          <p class="subtitle is-6">Start Time: {{ entry.start_time }}</p>
          <p class="subtitle is-6">Duration: {{ entry.duration }}</p>
          
    </div> 
       <div class="column"> 
         <p class="subtitle is-6">Series ID: {{ entry.series_id }}</p>
          <p class="subtitle is-6">Series Type: {{ entry.series_type }}</p>
       <p class="subtitle is-6">Winner</p>
       <p class="title is-4">Team45</p>
      </div>
       </div>
</div>
</div>

<!-- Last line data finishes-->  

<!-- Footer Banner -->
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
            dire_name: currentData.dire_name,
            leagueid: currentData.leagueid,
            league_name: currentData.league_name,
            series_id: currentData.series_id,
            series_type: currentData.series_type,
            radiant_score: currentData.radiant_score,
            dire_score: currentData.dire_score,
            radiant_win: currentData.radiant_win
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
 
  }
};
</script>

<style>
.x-lg{
 margin-bottom: 1em;
}
.addgap{
 margin: 1em;
}
.maincard{
 background-color: hsl(0, 0%, 98%);
}


</style>
