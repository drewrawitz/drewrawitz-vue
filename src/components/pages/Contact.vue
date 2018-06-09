<template>
  <div>
    <Hero heading="Contact" bg="bg_tech2.jpg" />
    <div class="container">
      <h2 class="heading-icon">
        <HandshakeIcon />
        <span>Let's chat!</span>
      </h2>
      <p>Want to get in touch? Whether you're interested in working on a project together or just want to say hello, feel free to email me at <a href="mailto:email@drewrawitz.com">email@drewrawitz.com</a> and I'll get back to you as soon as I can!</p>
    </div>
  </div>
</template>

<script>
import Hero from '../Hero';
import HandshakeIcon from '../../assets/svg/handshake.svg';

export default {
  name: 'Plugins',
  components: {
    Hero,
    HandshakeIcon
  },
};
</script>

<style scoped>
</style>
