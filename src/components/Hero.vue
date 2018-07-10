<template>
  <section class="page-hero" :style="{ 'background-image': 'url(' + this.getAssetPath(bg) + ')' }">
    <div class="page-hero__overlay"></div>
      <h1>
        <transition name="slide-fade" appear>
          <span v-if="heading">{{ heading }}</span>
        </transition>
      </h1>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: ['heading', 'bg'],
  methods: {
    getAssetPath(path) {
      try {
        const image = require(`../assets/${path}`);

        return image;
      } catch (e) {
        console.log(`error: ${e}`);
      }
    },
  },
};
</script>

<style scoped>
.page-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;

  h1 {
    font-size: 50px;
    position: relative;
    margin: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    outline: 1px solid rgba(255, 255, 255, 0.25);
    outline-offset: -8px;
  }
}

.page-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
}
</style>
