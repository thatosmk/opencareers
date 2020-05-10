/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const API_URL = 'http://localhost:3000';
// initial state
const state = {
  all: [],
  results: [],
  programmes: [],
  career: {},
};

// getters
const getters = {
  careers(state) {
    return state.all;
  },
};
// mutatioons
const mutations = {
  searches(state, careers) {
    state.results = careers;
  },
  load(state, careers) {
    state.all = careers;
  },
  addProgrammes(state, programmes) {
    state.programmes = programmes;
  },
  setCareer(state, career) {
    state.career = career;
  },
};

// actions
const actions = {
  async search({ commit }) {
    fetch(`${API_URL}/api/v1/careers.json`, {
      headers: {
        accept: 'application/json',
      },
      method: 'get',
    }).then(response => response.json()).then(careers => commit('load', careers)).catch();
  },
  async loadCareers({ commit }) {
    fetch(`${API_URL}/api/v1/careers.json`, {
      headers: {
        accept: 'application/json',
      },
      method: 'get',
    }).then(response => response.json()).then(careers => commit('load', careers)).catch();
  },
  async loadCareer({ commit }, id) {
    fetch(`${API_URL}/api/v1/careers/${id}`, {
      headers: {
        accept: 'application/json',
      },
      method: 'get',
    }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
  },
  async updateCareer({ commit }, formData, id) {
    fetch(`${API_URL}/api/v1/careers/${id}`, {
      headers: {
        accept: 'application/json',
      },
      method: 'put',
      body: formData,
    }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
  },
  async createCareer({ commit }, formData) {
    fetch(`${API_URL}/api/v1/careers.json`, {
      headers: {
        accept: 'application/json',
      },
      method: 'post',
      body: formData,
    }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
  },
  async loadProgrammes({ commit }, id) {
    fetch(`${API_URL}/api/v1/careers/${id}/tagged.json`, {
      headers: {
        accept: 'application/json',
      },
      method: 'get',
    }).then(response => response.json()).then(programmes => commit('addProgrammes', programmes)).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
