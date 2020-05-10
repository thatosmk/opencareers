/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'http://localhost:3000';
// initial state
const state = {
  checkIns: [],
  mentees: [],
  checkIn: {},
};

// getters
const getters = {
  checkIns(state) {
    return state.all;
  },
};
// mutatioons
const mutations = {
  setCheckIns(state, checkIns) {
    state.checkIns = checkIns;
  },
  addCheckIn(state, checkIn) {
    state.checkIn = checkIn;
  },
  setMentees(state, mentees) {
    state.mentees = mentees;
  },
};

// actions
const actions = {
  async loadMentees({ commit }) {
    fetch(`${API_URL}/api/v1/mentees.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then(mentees => commit('setMentees', mentees)).catch();
  },
  async loadCheckIns({ commit }) {
    fetch(`${API_URL}/api/v1/check_ins.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'get',
    }).then(response => response.json()).then(checkIns => commit('setCheckIns', checkIns)).catch();
  },
  async loadCheckIn({ commit }, id) {
    fetch(`${API_URL}/api/v1/check_ins/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'get',
    }).then(response => response.json()).then(checkIn => commit('addCheckIn', checkIn)).catch();
  },
  async updateCheckIn({ commit }, formData, id) {
    fetch(`${API_URL}/api/v1/check_ins/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'put',
      body: formData,
    }).then(response => response.json()).then(checkIn => commit('addCheckIn', checkIn)).catch();
  },
  async add({ commit }, formData) {
    fetch(`${API_URL}/api/v1/check_ins.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'post',
      body: formData,
    }).then(response => response.json()).then(checkIn => commit('addCheckIn', checkIn)).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
