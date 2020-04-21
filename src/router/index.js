import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Search from '@/components/Search.vue';
import Career from '@/components/careers/career.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/careers/:careerId',
    name: 'career',
    component: Career,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});
export default router;
