<template>
  <div>
    <Hero heading="Contact" bg="bg_tech2.jpg" />
    <transition name="fade" appear>
      <div class="container">
        <h2>Let's chat!</h2>
        <p>Want to get in touch? Whether you're interested in working on a project together or just want to say hello, feel free to email me at <a href="mailto:email@drewrawitz.com">email@drewrawitz.com</a> and I'll get back to you as soon as I can!</p>
        <p>You can also check out my social links in the footer of the sidebar to get in touch that way.</p>
      </div>
    </transition>
  </div>
</template>

<script>
import Hero from '../Hero';

export default {
  name: 'Contact',
  components: {
    Hero,
  },
};
</script>

<style scoped>
</style>
