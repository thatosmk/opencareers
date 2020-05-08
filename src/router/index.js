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
    path: '/get-started',
    name: 'get_started',
    component: () => import('@/views/get_started.vue'),
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
