// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css';
import Vue from 'vue';
import VueImg from 'v-img/dist/v-img';
import App from './App';
import router from './router';
import './styles/vars.css';

Vue.config.productionTip = false;

Vue.use(VueImg);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
