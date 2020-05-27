/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'http://localhost:3000';
// initial state
const state = {
  all: [],
  beta: {},
  article: {},
};

// mutatioons
const mutations = {
  setArticles(state, articles) {
    state.all = articles;
  },
  addArticle(state, article) {
    state.article = article;
  },
  addBeta(state, beta) {
    state.beta = beta;
  },
};

// actions
const actions = {
  async loadArticles({ commit }) {
    fetch(`${API_URL}/api/v1/articles.json`, {
      headers: {
        accept: 'application/json',
      },
      method: 'get',
    }).then(response => response.json()).then(articles => commit('setArticles', articles)).catch();
  },
  async loadArticle({ commit }, id) {
    fetch(`${API_URL}/api/v1/articles/${id}`, {
      headers: {
        accept: 'application/json',
      },
      method: 'get',
    }).then(response => response.json()).then(article => commit('addArticle', article)).catch();
  },
  async updateArticle({ commit }, [formData, id]) {
    fetch(`${API_URL}/api/v1/articles/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('admin-token'),
      },
      method: 'put',
      body: formData,
    }).then(response => response.json()).then(article => commit('addArticle', article)).catch();
  },
  async deleteArticle({ commit }, id) {
    fetch(`${API_URL}/api/v1/articles/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('admin-token'),
      },
      method: 'delete',
    }).then(response => response.json()).then(article => commit('addArticle', article)).catch();
  },
  async createArticle({ commit }, formData) {
    fetch(`${API_URL}/api/v1/articles.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('admin-token'),
      },
      method: 'post',
      body: formData,
    }).then(response => response.json()).then(article => commit('addArticle', article)).catch();
  },
  async beta({ commit }, formData) {
    fetch(`${API_URL}/api/v1/beta_signups.json`, {
      headers: {
        accept: 'application/json',
      },
      method: 'post',
      body: formData,
    }).then(response => response.json()).then(beta => commit('addBeta', beta)).catch();
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
