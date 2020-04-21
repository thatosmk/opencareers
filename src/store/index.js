import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    careers: [],
    career: '',
  },

  getters: {
    careers(state) {
      return state.careers;
    },
    career(state) {
      return state.career;
    },
  },

  mutations: {
    loadCareers(state, careers) {
      state.careers = careers;
    },
    setCareer(state, career) {
      state.career = career;
    },
  },

  actions: {
    async loadCareers({ commit }) {
      fetch('http://localhost:3000/api/v1/careers', {
        headers: {
          accept: 'application/json',
        },
        method: 'get',
      }).then(response => response.json()).then(careers => commit('loadCareers', careers)).catch();
    },
    async loadCareer({ commit }) {
      fetch(`http://localhost:3000/api/v1/careers/${router.currentRoute.params.careerId}`, {
        headers: {
          accept: 'application/json',
        },
        method: 'get',
      }).then(response => response.json()).then(career => commit('setCareer', career)).catch();
    },
  },
});

export default store;
