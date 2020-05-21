/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// es2015 module
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'http://localhost:3000';

// initial state
const state = {
  user: null,
  mentor: null,
  account: null,
  errors: null,
  conversation: null,
  conversations: {},
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
  setConversations(state, conversations) {
    state.conversations = conversations;
  },
  addMessage(state, message) {
    state.conversation.messages.push(message);
  },
  addAccount(state, account) {
    state.user.account = account;
  },
  setConversation(state, conversation) {
    state.conversation = conversation;
  },
  userLogout(state, user) {
    state.user = user;
    state.user_signed_in = false;
  },
  setUser(state, user) {
    state.user = user;
    state.errors = null;
    state.user_signed_in = true;
  },
  setMentor(state, mentor) {
    state.mentor = mentor;
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
      Vue.$cookies.remove('login-errors');
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
    return new Promise((resolve, reject) => {
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
        }
        return response.json();
      })
        .then((data) => {
          if (data.errors != null) {
            commit('setErrors', data);
            reject(new Error(data));
          } else {
            commit('setUser', data);
            resolve(data);
          }
        }).catch();
    });
  },
  async userSession({ commit }, formData) {
    return new Promise((resolve, reject) => {
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
        }
        return response.json();
      })
        .then((data) => {
          if (data.error != null) {
            commit('setErrors', data);
            reject(new Error('Incorrect credentials'));
          } else {
            commit('setUser', data);
            resolve(data);
          }
        }).catch();
    });
  },
  async getUser({ commit }, id) {
    fetch(`${API_URL}/api/v1/users/${id}.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then(user => commit('setMentor', user)).catch();
  },
  async userConversation({ commit }, id) {
    fetch(`${API_URL}/api/v1/conversations/${id}.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'get',
    }).then(response => response.json())
      .then(conversation => commit('setConversation', conversation)).catch();
  },
  async userConversations({ commit }) {
    fetch(`${API_URL}/api/v1/conversations.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'get',
    }).then(response => response.json())
      .then(conversations => commit('setConversations', conversations)).catch();
  },
  async createConversation({ commit }, formData) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/api/v1/conversations.json`, {
        headers: {
          accept: 'application/json',
          Authorization: Vue.$cookies.get('user-token'),
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
        },
        method: 'post',
        body: formData,
      }).then(response => response.json())
        .then((data) => {
          if (data.id === null) {
            commit('setErrors', data);
            reject(new Error('Something went wrong'));
          } else {
            resolve(data);
          }
        }).catch();
    });
  },
  async sendMessage({ commit }, [data, id]) {
    fetch(`${API_URL}/api/v1/conversations/${id}/messages.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'post',
      body: data,
    }).then(response => response.json())
      .then(message => commit('addMessage', message)).catch();
  },
  async createAccount({ commit }, data) {
    fetch(`${API_URL}/api/v1/accounts.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'post',
      body: data,
    }).then(response => response.json())
      .then(account => commit('addAccount', account)).catch();
  },
  async updateAccount({ commit }, [data, id]) {
    fetch(`${API_URL}/api/v1/accounts/${id}.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'PUT',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'put',
      body: data,
    }).then(response => response.json())
      .then(account => commit('addAccount', account)).catch();
  },
  async acceptMentee({ commit }, data) {
    fetch(`${API_URL}/api/v1/accept_mentee.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      method: 'post',
      body: data,
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
