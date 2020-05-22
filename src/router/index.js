import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'not_found',
    component: () => import('@/views/not_found.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/blog.vue'),
  },
  {
    path: '/blog/:articleId',
    name: 'article',
    component: () => import('@/components/articles/show.vue'),
  },
  {
    path: '/blog/:articleId/edit',
    name: 'edit_article',
    component: () => import('@/components/articles/edit.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/new',
    name: 'new_article',
    component: () => import('@/components/articles/new.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'new_login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/logout',
    name: 'new_logout',
    component: () => import('@/views/logout.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/get_started.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Vue.$cookies.isKey('admin-token')) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});
export default router;
