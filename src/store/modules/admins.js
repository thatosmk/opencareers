/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// es2015 module
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'http://localhost:3000';

// initial state
const state = {
  admin: null,
  errors: null,
  admin_signed_in: false,
};

// mutations
const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },
  adminLogout(state, admin) {
    if (admin) {
      state.admin = admin;
    }
    state.admin_signed_in = false;
  },
  setAdmin(state, payload) {
    if (payload.id) {
      state.admin = payload;
      state.errors = null;
      state.admin_signed_in = true;
    }
  },
};
// actions
const actions = {
  async adminSignout({ commit }) {
    fetch(`${API_URL}/admins/sign_out.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('admin-token'),
        'Access-Control-Request-Method': 'DELETE',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'delete',
    }).then((response) => {
      Vue.$cookies.remove('admin-token');
      Vue.$cookies.remove('login-errors');
      response.json();
    })
      .then((admin) => {
        commit('adminLogout', admin);
      }).catch();
  },
  async adminSession({ commit }, formData) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/admins/sign_in.json`, {
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
          Vue.$cookies.set('admin-token', response.headers.get('Authorization'));
        }
        return response.json();
      })
        .then((data) => {
          if (data.error != null) {
            commit('setErrors', data);
            reject(new Error('Incorrect credentials'));
          } else {
            commit('setAdmin', data);
            resolve(data);
          }
        }).catch();
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
