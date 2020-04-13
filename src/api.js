import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);

const apiServer = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  json: true,
});

export default {
  async execute(method, resource, data) {
    return apiServer({
      method,
      url: resource,
      data,
    })
      .then(req => req.data);
  },

  minervaRegister() {
    return this.execute('get', '/minervas/sign_up');
  },
  minervaCreate(data) {
    return this.execute('post', '/minervas', data);
  },
  minervaLogin() {
    return this.execute('get', '/minervas/sign_in');
  },
  minervaSession(data) {
    return this.execute('post', '/minervas/sign_in', data);
  },
  getCustomers() {
    return this.execute('get', '/customers');
  },
  getCustomer(id) {
    return this.execute('get', `/customers/${id}`);
  },
  createCustomer(data) {
    return this.execute('post', '/customers', data);
  },
  updateCustomer(id, data) {
    return this.execute('put', `/customers/${id}`, data);
  },
  deleteCustomer(id) {
    return this.execute('delete', `/customers/${id}`);
  },
  getBookings() {
    return this.execute('get', '/bookings');
  },
  getBooking(id) {
    return this.execute('get', `/bookings/${id}`);
  },
  createBooking(data) {
    return this.execute('post', '/bookings', data);
  },
  updateBooking(id, data) {
    return this.execute('put', `/bookings/${id}`, data);
  },
  deleteBooking(id) {
    return this.execute('delete', `/bookings/${id}`);
  },
  getTodos() {
    return this.execute('get', '/todo_items');
  },
  getTodo(id) {
    return this.execute('get', `/todo_items/${id}`);
  },
  createTodo(data) {
    return this.execute('post', '/todo_items', data);
  },
  updateTodo(id, data) {
    return this.execute('put', `/todo_items/${id}`, data);
  },
  deleteTodo(id) {
    return this.execute('delete', `/todo_items/${id}`);
  },
};
