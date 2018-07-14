import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {
  windowWidth: state => state.windowWidth,
  mobileMenuOpen: state => state.mobileMenuOpen,
  showColorPicker: state => state.showColorPicker,
};

const mutations = {
  SET_WINDOW_WIDTH(state) {
    state.windowWidth = document.documentElement.clientWidth;
  },
  SET_MOBILE_MENU_STATE(state, val) {
    if (state.windowWidth <= 768) {
      state.mobileMenuOpen = val;
    }
  },
  TOGGLE_COLOR_PICKER(state, val) {
    state.showColorPicker = val;
  },
};

const state = {
  windowWidth: 0,
  mobileMenuOpen: false,
  showColorPicker: false,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
