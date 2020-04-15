import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import GetStarted from '@/views/GetStarted.vue';
import Customers from '@/components/Customers.vue';
// users
import User from '@/components/User.vue';
import UserBookings from '@/components/UserBookings.vue';
import UserDashboard from '@/components/UserDashboard.vue';

// plabsters
import PlabsterProfile from '@/components/PlabsterProfile.vue';
import Search from '@/components/Search.vue';
import Bookings from '@/components/Bookings.vue';
import NewBooking from '@/components/NewBooking.vue';
import RegisterMinervas from '@/components/RegisterMinervas.vue';
import SessionMinervas from '@/components/SessionMinervas.vue';
import TodoItems from '@/components/Todos.vue';

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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/get-started',
    name: 'get_started',
    component: GetStarted,
  },
  {
    path: '/plabster',
    name: 'plabster',
    component: User,
    children: [
      {
        path: 'plabster-dashboard',
        name: 'plabster_dashboard',
        component: UserDashboard,
      },
      {
        path: 'plabster-bookings',
        name: 'plabster_bookings',
        component: UserBookings,
      },
      {
        path: 'plabster-profile',
        name: 'plabster_profile',
        component: PlabsterProfile,
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'user-dashboard',
        name: 'user_dashboard',
        component: UserDashboard,
      },
      {
        path: 'user-bookings',
        name: 'user_bookings',
        component: UserBookings,
      },
      {
        path: 'user-profile',
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
    path: '/bookings',
    name: 'bookings',
    component: Bookings,
  },
  {
    path: '/bookings/new',
    name: 'new_booking',
    component: NewBooking,
  },
  {
    path: '/todo-items',
    name: 'todo-items',
    component: TodoItems,
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers,
  },
  {
    path: '/minervas/sign_in',
    name: 'minervas_login',
    component: SessionMinervas,
  },
  {
    path: '/minervas/sign_up',
    name: 'minervas',
    component: RegisterMinervas,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
