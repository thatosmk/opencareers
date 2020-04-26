/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import router from '../../router';

const state = {
  all: [],
  job: {},
};

// getters
const getters = {
  jobs(state) {
    return state.all;
  },
};
const mutations = {
  loadJobs(state, jobs) {
    state.all = jobs;
  },
  setJob(state, job) {
    state.job = job;
  },
};

const actions = {
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
