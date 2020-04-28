/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const API_URL = 'https://api.threaded.co.za';
// initial state
const state = {
  all: [],
  university: {},
  faculties: {},
};

// getters
const getters = {
  universities(state) {
    return state.all;
  },
};
// mutations
const mutations = {
  setUniversities(state, universities) {
    state.all = universities;
  },
  setUniversity(state, university) {
    state.university = university;
  },
  setFaculties(state, faculties) {
    state.faculties = faculties;
  },
};
// actions
const actions = {
  async loadFaculties({ commit }, id) {
    fetch(`${API_URL}/api/v1/universities/${id}/faculties.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'DELETE',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((faculties) => {
        commit('setFaculties', faculties);
      }).catch();
  },
  async loadUni({ commit }, id) {
    fetch(`${API_URL}/api/v1/universities/${id}.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'DELETE',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((university) => {
        commit('setUniversity', university);
      }).catch();
  },
  async load({ commit }) {
    fetch(`${API_URL}/api/v1/universities.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'DELETE',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((universities) => {
        commit('setUniversities', universities);
      }).catch();
  },
  async updateUni({ commit }, formData, id) {
    fetch(`${API_URL}/api/v1/universities/${id}.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'PUT',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'put',
      body: formData,
    }).then(response => response.json())
      .then((university) => {
        commit('setUniversity', university);
      }).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
