import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Workflow from '@/components/pages/Workflow';
import MoviesList from '@/components/MoviesList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
