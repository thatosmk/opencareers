import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
// import router from '../router/router.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    minerva: false,
    bookings: [],
    booking: '',
    busyDays: [],
  },

  mutations: {
    loadBookings(state, bookings) {
      state.bookings = bookings;
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
  },
});

// javascript console tracing statements
window.store = store;
export default store;
