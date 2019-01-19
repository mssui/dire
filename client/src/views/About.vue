<template>
  <div class="about">
    <navbar />
    <animation />
    <h1>This is an about page</h1>
    <footerComponent />
  </div>
</template>


<script>

import navbar from "@/components/navbar.vue"
import footerComponent from "@/components/footerComponent.vue"

export default {
  name: 'about',
  components: {
    navbar,
    footerComponent
  },
}
</script>