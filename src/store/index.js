import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    careers: [],
    jobs: [],
    career: {},
    job: {},
  },

  getters: {
    careers(state) {
      return state.careers;
    },
    career(state) {
      return state.career;
    },
    jobs(state) {
      return state.jobs;
    },
    job(state) {
      return state.job;
    },
  },

  mutations: {
    loadCareers(state, careers) {
      state.careers = careers;
    },
    setCareer(state, career) {
      state.career = career;
    },
    loadJobs(state, jobs) {
      state.jobs = jobs;
    },
    setJob(state, job) {
      state.job = job;
    },
  },

  actions: {
    async loadJobs({ commit }) {
      fetch('http://localhost:3000/api/v1/jobs', {
        headers: {
          accept: 'application/json',
        },
        method: 'get',
      }).then(response => response.json()).then(jobs => commit('loadJobs', jobs)).catch();
    },
    async loadJob({ commit }) {
      fetch(`http://localhost:3000/api/v1/jobs/${router.currentRoute.params.jobId}`, {
        headers: {
          accept: 'application/json',
        },
        method: 'get',
      }).then(response => response.json()).then(job => commit('setJob', job)).catch();
    },
    async createJob({ commit }, formData) {
      fetch('http://localhost:3000/api/v1/jobs', {
        headers: {
          accept: 'application/json',
        },
        method: 'post',
        body: formData,
      }).then(response => response.json()).then(job => commit('setJob', job)).catch();
    },
    async loadCareers({ commit }) {
      fetch('http://localhost:3000/api/v1/careers', {
        headers: {
          accept: 'application/json',
        },
        method: 'get',
      }).then(response => response.json()).then(careers => commit('loadCareers', careers)).catch();
    },
    async loadCareer({ commit }) {
      fetch(`http://localhost:3000/api/v1/careers/${router.currentRoute.params.careerId}`, {
        headers: {
          accept: 'application/json',
        },
        method: 'get',
      }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
    },
    async updateCareer({ commit }, formData) {
      fetch(`http://localhost:3000/api/v1/careers/${router.currentRoute.params.careerId}`, {
        headers: {
          accept: 'application/json',
        },
        method: 'put',
        body: formData,
      }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
    },
    async createCareer({ commit }, formData) {
      fetch('http://localhost:3000/api/v1/careers', {
        headers: {
          accept: 'application/json',
        },
        method: 'post',
        body: formData,
      }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
    },
  },
});

export default store;
