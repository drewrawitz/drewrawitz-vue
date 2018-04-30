<template>
  <div class="container">
    <h1>Movies</h1>
    <ul>
      <li
        v-for="movie in favoriteMovies"
        :key="movie.id"
      >
        <Movie :title="movie.title" :poster="movie.poster_path" />
      </li>
    </ul>
  </div>
</template>

<script>
import Movie from './Movie';

export default {
  name: 'MoviesList',
  created() {
    if (!this.favoriteMovies.length) {
      this.$store.dispatch('loadFavoriteMovies');
    }
  },
  components: {
    Movie,
  },
  computed: {
    favoriteMovies() {
      return this.$store.getters.favoriteMovies;
    },
  },
};
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 0;
  grid-gap: 20px;
  margin: 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

li {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
