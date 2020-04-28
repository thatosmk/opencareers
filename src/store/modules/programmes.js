/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const API_URL = 'https://api.threaded.co.za';
// initial state
const state = {
  all: [],
  programme: {},
  courses: [],
  course: {},
};

// getters
const getters = {
  programmes(state) {
    return state.all;
  },
};
// mutations
const mutations = {
  setCourses(state, courses) {
    state.courses = courses;
  },
  setCourse(state, course) {
    state.course = course;
  },
  setProgramme(state, programme) {
    state.programme = programme;
  },
};
// actions
const actions = {
  async loadCourse({ commit }, id) {
    fetch(`${API_URL}/api/v1/courses/${id}.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((course) => {
        commit('setCourse', course);
      }).catch();
  },
  async loadCourses({ commit }, id) {
    fetch(`${API_URL}/api/v1/programmes/${id}/courses.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((courses) => {
        commit('setCourses', courses);
      }).catch();
  },
  async loadProgramme({ commit }, id) {
    fetch(`${API_URL}/api/v1/programmes/${id}.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((programme) => {
        commit('setProgramme', programme);
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
