/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'http://localhost:3000';
// initial state
const state = {
  all: [],
  doc: {},
};

// getters
const getters = {
  docs(state) {
    return state.all;
  },
};
// mutatioons
const mutations = {
  setDocs(state, docs) {
    state.all = docs;
  },
  addDoc(state, doc) {
    state.doc = doc;
  },
};

// actions
const actions = {
  async loadDocs({ commit }) {
    fetch(`${API_URL}/api/v1/docs.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'get',
    }).then(response => response.json()).then(docs => commit('setDocs', docs)).catch();
  },
  async loadTodo({ commit }, id) {
    fetch(`${API_URL}/api/v1/docs/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'get',
    }).then(response => response.json()).then(doc => commit('addDoc', doc)).catch();
  },
  async updateTodo({ commit }, formData, id) {
    fetch(`${API_URL}/api/v1/docs/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'put',
      body: formData,
    }).then(response => response.json()).then(doc => commit('addDoc', doc)).catch();
  },
  async add({ commit }, formData) {
    fetch(`${API_URL}/api/v1/docs.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'post',
      body: formData,
    }).then(response => response.json()).then(doc => commit('addDoc', doc)).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
