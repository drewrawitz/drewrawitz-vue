import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Workflow from '@/components/pages/Workflow';
import MoviesList from '@/components/MoviesList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/workflow',
      name: 'Workflow',
      component: Workflow,
    },
    {
      path: '/movies',
      name: 'MoviesList',
      component: MoviesList,
    },
  ],
});
