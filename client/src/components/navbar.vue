<template>
<div id="app">
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link :to="{name: 'mainpage'}">
             <strong>Match Fix</strong> 
          </router-link>
      </a>
      <a role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
         @click="showNav = !showNav" :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link :to="{name: 'mainpage'}">
            Main Page
          </router-link>
        </a>

        <a class="navbar-item">
           <router-link :to="{name: 'about'}">
            About
          </router-link>
        </a>

      </div>

      <div class="navbar-end">
    </div>
    </div>
  </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Navbar',
	data() {
		return {
			showNav: false
		};
	},
	components: {
    
	},
	methods: {
   
	}
};
</script>

<style>

</style>
