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
    path: '/profile',
    name: 'profile',
    component: () => import('@/components/users/profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/logout.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/mentorship',
    name: 'mentorship',
    component: () => import('@/views/mentorship.vue'),
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
    path: '/varsities/new',
    name: 'new_university',
    component: () => import('@/components/universities/new.vue'),
  },
  {
    path: '/varsities/:varsityId',
    name: 'university',
    component: () => import('@/components/universities/show.vue'),
  },
  {
    path: '/varsities/:varsityId/faculties/new',
    name: 'new_faculty',
    component: () => import('@/components/faculties/new.vue'),
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
