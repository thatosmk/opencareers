import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import GetStarted from '@/views/GetStarted.vue';
// users
import User from '@/components/users/user.vue';
import Login from '@/components/users/auth/login.vue';
import Signout from '@/components/users/auth/signout.vue';
import Bookings from '@/components/users/dashboard/bookings.vue';
import Overview from '@/components/users/dashboard/overview.vue';

import NewBooking from '@/components/NewBooking.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/get-started',
    name: 'get_started',
    component: GetStarted,
  },
  {
    path: '/plabsters',
    name: 'plabster',
    children: [
    ],
  },
  {
    path: '/users',
    name: 'users',
    component: User,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'overview',
        name: 'user_dashboard',
        component: Overview,
      },
      {
        path: 'logout',
        name: 'user_logout',
        component: Signout,
      },
      {
        path: 'bookings',
        name: 'user_bookings',
        component: Bookings,
      },
      {
        path: 'profile',
        name: 'user_profile',
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/user-login',
    name: 'user_login',
    component: Login,
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: Bookings,
  },
  {
    path: '/bookings/new',
    name: 'new_booking',
    component: NewBooking,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else if (to.name !== 'user_logout') {
      next({ path: '/' });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('token') == null) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
