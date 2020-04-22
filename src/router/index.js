import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Search from '@/components/Search.vue';
// careers
import Career from '@/components/careers/career.vue';
import EditCareer from '@/components/careers/edit.vue';
import NewCareer from '@/components/careers/new.vue';
// jobs
import Jobs from '@/components/jobs/jobs.vue';
import Job from '@/components/jobs/job.vue';
import NewJob from '@/components/jobs/new.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/careers/new',
    name: 'new_career',
    component: NewCareer,
  },
  {
    path: '/careers/:careerId',
    name: 'career',
    component: Career,
  },
  {
    path: '/careers/:careerId/update',
    name: 'edit_career',
    component: EditCareer,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/jobs/new',
    name: 'new_job',
    component: NewJob,
  },
  {
    path: '/jobs/:jobId',
    name: 'job',
    component: Job,
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
