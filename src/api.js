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
};
