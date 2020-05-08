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
    path: '/blog',
    name: 'blog',
    component: () => import('@/components/posts/index.vue'),
  },
  {
    path: '/blog/:postId',
    name: 'blog_post',
    component: () => import('@/components/posts/post.vue'),
  },
  {
    path: '/new',
    name: 'new_blog',
    component: () => import('@/components/posts/new.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/users/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/users/register.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/components/users/logout.vue'),
    meta: { requriesAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.name === 'logout') {
      if (Vue.$cookies.isKey('user-token')) {
        next();
      } else {
        next('/');
      }
    } else if (to.name === 'profile') {
      if (Vue.$cookies.isKey('user-token')) {
        next();
      } else {
        next('/login');
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
