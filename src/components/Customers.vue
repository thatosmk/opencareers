<template>
    <div class="container py-4">
        <h1 class="h1">Manage your Clients</h1>
        <b-alert :show="loading" variant="info">Loading...</b-alert>
        <b-row>
            <b-col>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Last Updated</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr v-for="customer in customers.data" :key="customer.id">
                            <td>{{ customer.id }}</td>
                            <td>{{ customer.attributes.fname }}</td>
                            <td>{{ customer.attributes.lname }}</td>
                            <td>{{ customer.attributes.email }}</td>
                            <td>{{ customer.attributes.updated_at }}</td>
                            <td class="text-right">
                            <a href="#" @click.prevent="populateCustomerToEdit(customer)">Edit</a>
                                -
                            <a href="#" @click.prevent="deleteCustomer(customer.id)">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
        <div>
            <b-card :title="(model.id ? 'Edit Customer ID#' + model.id : 'New Customer')">
                <form @submit.prevent="saveCustomer">
                    <b-form-group label="First Name">
                        <b-form-input type="text" v-model="model.fname"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Last Name">
                        <b-form-input type="text" v-model="model.lname"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Email">
                        <b-form-input type="email" v-model="model.email"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Cell">
                        <b-form-input type="text" v-model="model.cell"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Status">
                        <b-form-input type="number" v-model="model.status_id"></b-form-input>
                    </b-form-group>
                    <div>
                        <b-btn type="submit" variant="success">Save Customer</b-btn>
                    </div>
                </form>
            </b-card>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      loading: false,
      customers: [],
      model: {},
    };
  },
  async created() {
    this.refreshCustomers();
  },
  methods: {
    async refreshCustomers() {
      this.loading = true;
      this.customers = await api.getCustomers();
      this.loading = false;
    },
    async populateCustomerToEdit(customer) {
      this.model = Object.assign({}, customer);
    },
    async saveCustomer() {
      if (this.model.id) {
        await api.updateCustomer(this.model.id, this.model);
      } else {
        await api.createCustomer(this.model);
      }
      this.model = {}; // reset form
      await this.refreshCustomers();
    },
    async deleteCustomer(id) {
      // if (confirm('Are you sure you want to delete this Customer?')) {
      // if we are editing a Customer  we deleted,  remove it  from the form
      if (this.model.id === id) {
        this.model = {};
      }
      await api.deleteCustomer(id);
      await this.refreshCustomers();
    },
  },
};
</script>
