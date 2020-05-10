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
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/components/users/profile.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'profile/:userId',
        name: 'user',
        component: () => import('@/components/users/show.vue'),
      },
      {
        path: 'mentees',
        name: 'user_mentees',
        component: () => import('@/components/users/mentees.vue'),
      },
      {
        path: 'dashboard',
        name: 'user_dashboard',
        component: () => import('@/components/users/dashboard.vue'),
      },
      {
        path: 'messages',
        name: 'user_messages',
        component: () => import('@/components/users/inbox.vue'),
      },
      {
        path: 'settings',
        name: 'user_settings',
        component: () => import('@/components/users/settings.vue'),
      },
      {
        path: 'files',
        name: 'user_files',
        component: () => import('@/components/users/files.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'posts/:postId',
        name: 'post',
        component: () => import('@/components/posts/post.vue'),
      },
      {
        path: 'check_ins/:checkInId',
        name: 'checkIn',
        component: () => import('@/components/users/checkIn.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Vue.$cookies.isKey('user-token')) {
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
