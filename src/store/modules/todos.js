/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const API_URL = 'http://localhost:3000';
// initial state
const state = {
  all: [],
  todo: {},
};

// getters
const getters = {
  todos(state) {
    return state.all;
  },
};
// mutatioons
const mutations = {
  setTodos(state, todos) {
    state.all = todos;
  },
  addTodo(state, todo) {
    state.todo = todo;
  },
};

// actions
const actions = {
  async loadTodos({ commit }) {
    fetch(`${API_URL}/api/v1/todos.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'get',
    }).then(response => response.json()).then(todos => commit('setTodos', todos)).catch();
  },
  async loadTodo({ commit }, id) {
    fetch(`${API_URL}/api/v1/todos/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'get',
    }).then(response => response.json()).then(todo => commit('addTodo', todo)).catch();
  },
  async updateTodo({ commit }, formData, id) {
    fetch(`${API_URL}/api/v1/todos/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'put',
      body: formData,
    }).then(response => response.json()).then(todo => commit('addTodo', todo)).catch();
  },
  async add({ commit }, formData) {
    fetch(`${API_URL}/api/v1/todos.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
      },
      method: 'post',
      body: formData,
    }).then(response => response.json()).then(todo => commit('addTodo', todo)).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
