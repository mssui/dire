
<template>
  <div class="app maincard">
    <navbar />
    <section class="hero maincard ">
      <div class="hero-body">
        <div class="container">
					<div class="field">
					<div class="control">
						<input v-model="selected" class="input is-medium" type="text" placeholder="Search a lig or team">
					</div>
					</div>
    		</div>
  		</div>
		</section>
    <div v-for="(entry,index) in showbylig.slice(0, this.indexi)" :key="index" class="container box is-fluid maincard">
						<div class="container is-fluid has-text-centered ">
							<p class="title is-4 has-text-grey-lighter">LIG: <strong>{{ entry.league_name }}</strong></p>
							<div class="column"></div>
						</div>
				<div class="container is-fluid ">
				<div class="columns ">
				<div class="column">
					<div class="box boxcolor"><!-- Radiant box starts--> 
						<article class="media">
							<div class="media-left">
								<figure class="image is-64x64">
									<img src="https://cdn.pbrd.co/images/HXbVDwk.png" alt="Image">
								</figure>
							</div>
							<div class="media-content has-text-centered">
								<div class="content">   
									<p class="title is-4"> {{ entry.radiant_name }}</p>
									<p class="subtitle is-6">Team ID: {{ entry.radiant_team_id }}</p>
								</div>
							</div>
							<div class="media-right has-text-centered">
								Score <br><p class="subtitle is-2"> 	
									<i v-if="entry.radiant_win" class="radiant fas fa-shield-alt"></i>
									<i v-else class="radiant fas fa-skull-crossbones"></i>
								{{ entry.radiant_score}}</p>
							</div>
						</article>
					</div>    
				</div> 
				<div class="column">
				<div class="box boxcolor x-lg"><!-- Dire box starts--> 
					<article class="media">
							<div class="media-left has-text-centered">
								Score <br><p class="subtitle is-2"> 
								<i v-if="entry.radiant_win" class="radiant fas fa-skull-crossbones"></i>
									<i v-else class="radiant fas fa-shield-alt"></i>
								{{ entry.dire_score }}</p>
						</div>
						<div class="media-content has-text-centered">
							<div class="content">   
								<p class="title is-4">{{ entry.dire_name }}</p>
								<p class="subtitle is-6">Team ID: {{ entry.dire_team_id }} </p>
							</div>
						</div>
						<div class="media-right">
							<figure class="image is-64x64">
								<img src="https://cdn.pbrd.co/images/HXbVkFz.png" alt="Image">
							</figure>
						</div>
					</article>
				</div>  
				</div>
			</div> 
		</div> 
		<div class="container is-fluid has-text-centered  x-lg">
			<p class="subtitle is-4 has-text-grey-lighter">Start Time: {{moment(entry.start_time).format('hh:mm')}} | Duration: {{moment(entry.duration).format('hh:mm')}}</p>	
				<div class="columns  has-text-centered"> 
					<div class="column">
					<p class="subtitle is-6 has-text-grey-light">Match ID: {{ entry.match_id }} | Series ID: {{ entry.series_id }} | Series Type: {{ entry.series_type }} | League ID:{{ entry.leagueid}}</p>			
					</div> 
				</div>
		</div>
		</div>
    <section class="hero maincard ">
			<div class="hero-body">
				<div class="container has-text-centered">
					<div class="field">
						<span v-if="statustext">{{ statustext }} </span>
							<a v-if="!statustext" class="button is-link is-rounded is-medium showmore" @click="showmore">
								<span class="icon is-medium">
								<i class="fas fa-chevron-down"></i>
								</span>
								<span>SHOW MORE</span>
							</a>
					</div>
				</div>
			</div>
		</section>
				<!-- Last line data finishes-->  

				<!-- Footer Banner -->
  	<footerComponent />
	</div>      
</template>
<script>
import axios from 'axios';
import navbar from './navbar.vue';
import footerComponent from '@/components/footerComponent.vue';

export default {
	name: 'mainpage',
	data() {
		return {
			matches: [],
			loopEntries: [],
			sort: '',
			selected: '',
			indexi: 10,
			statustext: null
		};
	},
	components: {
		navbar,
		footerComponent
	},
	methods: {
		showmore(){
			if(this.indexi >= (this.loopEntries.length -1)){
				document.querySelector('.showmore').classList.add('is-not');
				this.statustext = 'Everything is loaded';
	    } else {
				this.indexi = this.indexi + 10;
			}
		}
	},
	created() {
		axios.get('/datas')
			.then(response => {
				this.matches = JSON.stringify(response.data);
				this.matches = JSON.parse(this.matches);
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

				// Change null ids
				this.loopEntries.forEach(function(o) {
					Object.keys(o).forEach(function(key) {
						if (o[key] === null) {
							o[key] = 'Anonymus';
						}
					});
				});
			})
			.catch(error => {
				console.log(error);
			});
	},
	computed: {
		showbylig: function(){
			const lig = this.loopEntries.filter((data) =>{ 
				return (data.league_name.toLowerCase()).match(this.selected.toLowerCase()) ||
                (data.radiant_name.toLowerCase()).match(this.selected.toLowerCase()) ||
                (data.dire_name.toLowerCase()).match(this.selected.toLowerCase()) ;
			});
			return lig;
		}
	}
};

</script>

<style>
.x-lg{
 margin-bottom: 1em;
}
.is-not{
 display: none !important
}
.addgap{
 margin: 1em;
}
.maincard{
 /* background-color: hsl(0, 0%, 98%); */
background: rgb(104,95,148);
background: linear-gradient(90deg, rgba(104,95,148,1) 0%, rgba(35,21,54,1) 40%, rgba(20,5,33,1) 60%, rgba(116,95,156,1) 100%);
}
.boxcolor{
background: rgb(207,207,207);
background: linear-gradient(90deg, rgba(207,207,207,1) 0%, rgba(233,230,204,1) 50%, rgba(181,181,193,1) 100%);
}

</style>
