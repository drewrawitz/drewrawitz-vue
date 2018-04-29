import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { MOVIEDB_API_TOKEN, API_FAVORITE_MOVIES } from '../config';

Vue.use(Vuex);

const getters = {
  favoriteMovies: state => state.favorites.movies,
};

const mutations = {
  SET_LOADING(state, flag) {
    state.loading = flag;
  },
  SET_FAVORITE_MOVIES(state, movies) {
    state.favorites.movies = movies;
  },
};

const actions = {
  loadFavoriteMovies({ commit }) {
    commit('SET_LOADING', true);
    axios
      .get(API_FAVORITE_MOVIES, {
        headers: {
          Authorization: `Bearer ${MOVIEDB_API_TOKEN}`,
        },
      })
      .then(r => r.data.results)
      .then((movies) => {
        commit('SET_FAVORITE_MOVIES', movies);
        commit('SET_LOADING', false);
      });
  },
};

const state = {
  loading: true,
  favorites: {
    movies: [],
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
