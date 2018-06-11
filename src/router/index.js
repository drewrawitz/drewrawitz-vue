import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Workflow from '@/components/pages/Workflow';
import Plugins from '@/components/pages/Plugins';
import Contact from '@/components/pages/Contact';
import About from '@/components/pages/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
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
