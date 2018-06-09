<template>
  <section class="page-hero" :style="{ 'background-image': 'url(' + this.getAssetPath(bg) + ')' }">
    <div class="page-hero__overlay"></div>
    <h1>
      <span v-if="heading">{{ heading }}</span>
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
        return 'nope';
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
    position: relative;
    font-weight: 700;
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

.page-hero--workflow {
  background-image: url(../assets/bg_workflow.jpg);
}
</style>
