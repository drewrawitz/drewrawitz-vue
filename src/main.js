// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css';
import Vue from 'vue';
import VueImg from 'v-img';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueImg);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
