<template>
  <img :src="posterImage" :alt="title" />
</template>

<script>
import { MOVIEDB_POSTER_PATH } from '../config';

export default {
  name: 'Movie',
  props: ['title', 'poster'],
  computed: {
    posterImage() {
      return `${MOVIEDB_POSTER_PATH}/${this.poster}`;
    },
  },
};
</script>

<style scoped>

</style>
