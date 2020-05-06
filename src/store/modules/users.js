/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// es2015 module
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'https://api.threaded.co.za/';

// initial state
const state = {
  user: {},
  errors: {},
  user_signed_in: false,
};

// getters
const getters = {
  currentUser(state) {
    return state.user;
  },
  userSignedIn(state) {
    return state.user_signed_in;
  },
};
// mutations
const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },
  userLogout(state, user) {
    state.user = user;
    state.user_signed_in = false;
  },
  setUser(state, user) {
    state.user = user;
    state.user_signed_in = true;
  },
};
// actions
const actions = {
  async userSignout({ commit }) {
    fetch(`${API_URL}/users/sign_out.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'DELETE',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'delete',
    }).then((response) => {
      Vue.$cookies.remove('user-token');
      response.json();
    })
      .then((user) => {
        commit('userLogout', user);
      }).catch();
  },
  async userShow({ commit }) {
    fetch(`${API_URL}/api/v1/users.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'DELETE',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'get',
    }).then(response => response.json())
      .then(user => commit('setUser', user)).catch();
  },
  async userUpdate({ commit }, formData) {
    fetch(`${API_URL}/users.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'PUT',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'put',
      body: formData,
    }).then(response => response.json())
      .then(user => commit('setUser', user)).catch();
  },
  async userRegister({ commit }, formData) {
    fetch(`${API_URL}/users.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'post',
      body: formData,
    }).then((response) => {
      if (response.headers.get('Authorization')) {
        Vue.$cookies.set('user-token', response.headers.get('Authorization'));
      } else {
        Vue.$cookies.set('login-errors', response.body);
      }
      return response.json();
    })
      .then(user => commit('setUser', user)).catch();
  },
  async userSession({ commit }, formData) {
    fetch(`${API_URL}/users/sign_in.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'post',
      body: formData,
    }).then((response) => {
      if (response.headers.get('Authorization')) {
        Vue.$cookies.set('user-token', response.headers.get('Authorization'));
      } else {
        Vue.$cookies.set('login-errors', response.body);
      }
      return response.json();
    })
      .then(user => commit('setUser', user)).catch();
  },
  async getUser({ commit }) {
    fetch('http://localhost:3000/api/v1/users/profile.json', {
      headers: {
        accept: 'application/json',
        Authorization: localStorage.getItem('token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then(user => commit('setUser', user)).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
