import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Workflow from '@/components/pages/Workflow';
import Plugins from '@/components/pages/Plugins';
import Contact from '@/components/pages/Contact';

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
      path: '/plugins',
      name: 'Plugins',
      component: Plugins,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
