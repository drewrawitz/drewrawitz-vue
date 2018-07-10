<template>
  <div>
    <Hero heading="About" bg="bg_hiking.jpg" />
    <transition name="fade" appear>
      <div class="container">
        <h2>About Me</h2>
        <div class="image-right">
          <figure>
            <img v-img src="../../assets/engagement.jpg" alt="Drew Rawitz" style="max-width: 200px;" />
          </figure>
        </div>
        <p>My name is <strong>Drew Rawitz</strong>, I’m a Senior Frontend Developer currently working remotely out of Raleigh, North Carolina! I've spent the last 8 years as a professional web developer where I specialize in transforming beautiful designs into full-fledged interactive web applications for various clients all around the world.</p>
        <p>My job involves doing what I love, <strong>developing</strong> new websites and applications. I absolutely love learning new things and taking on new challenges. A more detailed look at my professional capabilities and experience is available in my <router-link to="/contact">resume</router-link>.</p>
        <p>I currently live in Raleigh, NC with my fiancé and our two cats and a dog, and we are excited to be relocating to Albuquerque, New Mexico!</p>
        <div class="h-text-center">
          <blockquote>
            <span>"Success consists of going from failure to failure without loss of enthusiasm."</span>
            <em>&mdash;Winston Churchill</em>
          </blockquote>
          <p>★ ★ ★ ★ ★</p>
        </div>
      </div>
    </transition>
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
.image-right {
  float: right;
}

blockquote {
  background: #eaeaea;
  margin: 0;
  padding: 20px;
  border: 1px dashed #bdbdbd;
  border-radius: 3px;
}
</style>
