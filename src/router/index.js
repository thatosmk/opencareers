import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';

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
    component: () => import('@/views/get_started.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/ask-me-anything',
    name: 'ama',
    component: () => import('@/views/ama.vue'),
  },
  {
    path: '/varsities',
    name: 'universitites',
    component: () => import('@/components/universities/index.vue'),
  },
  {
    path: '/varsities/:varsityId',
    name: 'university',
    component: () => import('@/components/universities/show.vue'),
  },
  {
    path: '/faculties/:facultyId',
    name: 'university_faculties',
    component: () => import('@/components/faculties/show.vue'),
  },
  {
    path: '/programmes/:programmeId',
    name: 'faculty_programmes',
    component: () => import('@/components/programmes/show.vue'),
  },
  {
    path: '/courses/:courseId',
    name: 'course',
    component: () => import('@/components/courses/show.vue'),
  },
  {
    path: '/careers/new',
    name: 'new_career',
    component: () => import('@/components/careers/new.vue'),
  },
  {
    path: '/careers/:careerId',
    name: 'career',
    component: () => import('@/components/careers/career.vue'),
  },
  {
    path: '/careers/:careerId/update',
    name: 'edit_career',
    component: () => import('@/components/careers/edit.vue'),
  },
  {
    path: '/careers',
    name: 'careers',
    component: () => import('@/components/careers/index.vue'),
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
