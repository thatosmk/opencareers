/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// initial state
const state = {
  programmes: [],
  faculty: {},
};

// getters
const getters = {
  programmes(state) {
    return state.programmes;
  },
};
// mutations
const mutations = {
  setProgrammes(state, programmes) {
    state.programmes = programmes;
  },
  setFaculty(state, faculty) {
    state.faculty = faculty;
  },
};
// actions
const actions = {
  async loadFaculty({ commit }, id) {
    fetch(`http://localhost:3000/api/v1/faculties/${id}.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'get',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((faculty) => {
        commit('setFaculty', faculty);
      }).catch();
  },
  async loadProgrammes({ commit }, id) {
    fetch(`http://localhost:3000/api/v1/faculties/${id}/programmes.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'get',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((programmes) => {
        commit('setProgrammes', programmes);
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
