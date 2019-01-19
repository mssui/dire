<template>
  <div class="app">
    <navbar />
       <div  v-for="(entry,index) in loopEntries" :key="index" class="columns box ">
    <!-- Lig name top column starts-->
     <div class="column">
       LIG NAME {{ entry.league_name }}<br>
         <div>WINNER</div>     <!-- If winner is true will be added here-->
       League Id:{{ entry.league_id}}
            </div>
            <!-- Lig name top column finishes-->

          <!-- Second line with boxes starts-->  
      <div class="column">
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
         <p class="title is-4">Team Name {{ entry.radiant_name }}</p>
        <p class="subtitle is-6">Team Score {{ entry.radiant_score }}</p>
      </div>
    </div>
       <div class="media-right">
      <p class="subtitle is-6">Team ID {{ entry.radiant_team_id }}</p>
    </div>
  </article>
           </div>    
            </div>
            <div class="column">
       <div class="box"><!-- Dire box starts--> 
       <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
              <img src="https://cdn.pbrd.co/images/HXbVkFz.png" alt="Image">
       </figure>
    </div>
    <div class="media-content">
      <div class="content">   
         <p class="title is-4">Team Name {{ entry.dire_name }}</p>
        <p class="subtitle is-6">Team Score  {{ entry.dire_score }}</p>
      </div>
    </div>
       <div class="media-right">
      <p class="subtitle is-6">Team ID {{ entry.dire_team_id}} </p>
    </div>
  </article>
           </div>    
            </div>
            </div>
<!-- Second line with boxes finishes-->  
<!-- Last line data starts-->  
             <div class="column">
                <div class="column">
                  <strong>Match ID:</strong>  {{ entry.match_id }}
                </div>
                <div class="column">
                 <strong>Start Time:</strong> {{ entry.start_time }} 
                </div>
                <div class="column">
                 <strong>Duration:</strong> {{ entry.duration }} 
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
 
  },
  mounted() {}
};
</script>

<style>

</style>
