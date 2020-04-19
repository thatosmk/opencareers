import Vue from 'vue';
import Vuex from 'vuex';
// import router from '../router/router.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: false,
    minerva: false,
    bookings: [],
    booking: '',
    busyDays: [],
  },

  mutations: {
    loadBookings(state, bookings) {
      state.bookings = bookings;
    },

    userLogin(state, user) {
      state.user = user;
    },

    setUser(state, user) {
      console.log(user);
      console.log('User set');
      state.user = user;
    },

    addBusyDay(state, busyDay) {
      state.busyDay = busyDay;
      state.busyDays.push(busyDay);
    },
    setBusyDays(state, busyDays) {
      state.busyDays = busyDays;
    },
    addBooking(state, booking) {
      state.booking = booking;
      state.bookings.push(booking);
    },
    setMinerva(state, minerva) {
      state.minerva = minerva;
    },
    mLogin(state, minerva) {
      state.minerva = minerva;
    },
  },
  actions: {
    async loadBookings({ commit }) {
      fetch('http://localhost:3000/api/v1/bookings', {
        headers: { accept: 'application/json' },
        method: 'get',
      }).then(response => response.json()).then(bookings => commit('loadBookings', bookings)).catch();
    },
    async createBooking({ commit }, formData) {
      fetch('http://localhost:3000/api/v1/bookings', {
        headers: { accept: 'application/json' },
        method: 'post',
        body: formData,
      }).then(response => response.json()).then(booking => commit('addBooking', booking)).catch();
    },
    async userSignout({ commit }) {
      fetch('http://localhost:3000/users/sign_out.json', {
        headers: {
          accept: 'application/json',
          'Access-Control-Request-Method': 'DELETE',
          'Access-Control-Request-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'delete',
      }).then((response) => {
        localStorage.removeItem('token');
        response.json();
      })
        .then((user) => {
          localStorage.removeItem('currentUser');
          commit('userLogin', user);
        }).catch();
    },
    async userSession({ commit }, formData) {
      fetch('http://localhost:3000/users/sign_in.json', {
        headers: {
          accept: 'application/json',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'post',
        body: formData,
      }).then((response) => {
        if (response.headers.get('Authorization')) {
          localStorage.setItem('token', response.headers.get('Authorization'));
          commit('userLogin', true);
        }
        response.json();
      })
        .then((user) => {
          localStorage.setItem('currentUser', user);
          commit('userLogin', user);
        }).catch();
    },
    async getUser({ commit }) {
      fetch('http://localhost:3000/api/v1/users/profile.json', {
        headers: {
          accept: 'application/json',
          'Access-Control-Request-Method': 'GET',
          'Access-Control-Request-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'get',
      }).then(response => response.json())
        .then(user => commit('setUser', user)).catch();
    },
  },
});

// javascript console tracing statements
window.store = store;
export default store;
