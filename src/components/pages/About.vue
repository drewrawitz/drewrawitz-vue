<template>
  <div>
    <Hero heading="About" bg="bg_hiking.jpg" />
    <div class="container">
      <h2>About Me</h2>
      <p>My name is Drew Rawitz, I’ve been working professionally as a web developer for over 8 years now, but have really been specializing in Wordpress development in an agency setting for the last 5 years developing custom themes and plugins for various clients around the world.</p>
      <p>I currently live in Raleigh, NC with my fiancé and our two cats and a dog, and we are excited to be relocating to Albuquerque, New Mexico!</p>
    </div>
  </div>
</template>

<script>
import Hero from '../Hero';

export default {
  name: 'About',
  components: {
    Hero,
  },
};
</script>

<style scoped>
</style>
