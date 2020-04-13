import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Customers from '@/components/Customers.vue';
import Bookings from '@/components/Bookings.vue';
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
    path: '/bookings',
    name: 'bookings',
    component: Bookings,
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
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
