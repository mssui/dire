<template>
  <div class="about">
    <navbar />
 <div class="about container has-text-centered">
    <p class="title is-4">This is an about page</p>
		<p class="subtitle is-6">Match Fix </p>
    <p class="is-medium">This project aims to create user readable frontend for match data.</p>
    <p class="is-medium">You can reach all the source code on <a href="https://github.com/mssui/dire">Github Project Page</a></p>
  </div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
       
        </h2>
      </div>
    </div>
  </section>
    <footerComponent />
  </div>
</template>


<script>

import navbar from '@/components/navbar.vue';
import footerComponent from '@/components/footerComponent.vue';

export default {
	name: 'about',
	components: {
		navbar,
		footerComponent
	},
};
</script>