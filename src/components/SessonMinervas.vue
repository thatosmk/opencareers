<template>
    <div class="container py-4">
        <h1 class="h1">Register now</h1>
        <b-alert :show="loading" variant="info">Loading...</b-alert>
        <div class="mx-4">
            <form @submit.prevent="saveMinerva">
                <b-form-group label="First Name">
                    <b-form-input type="text" v-model="model.first_name"></b-form-input>
                </b-form-group>
                <b-form-group label="Last Name">
                    <b-form-input type="text" v-model="model.last_name"></b-form-input>
                </b-form-group>
                <b-form-group label="Email">
                    <b-form-input type="email" v-model="model.email"></b-form-input>
                </b-form-group>
                <b-form-group label="dob">
                    <b-form-input type="date" v-model="model.dob"></b-form-input>
                </b-form-group>
                <b-form-group label="Password">
                    <b-form-input type="password" v-model="model.password"></b-form-input>
                </b-form-group>
                <b-form-group label="Password Confirmation">
                    <b-form-input type="password"
                        v-model="model.password_confirmation"></b-form-input>
                </b-form-group>
                <div>
                    <b-btn type="submit" variant="success">Save Minerva</b-btn>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      loading: false,
      model: {},
      minerva: {},
    };
  },
  methods: {
    async populateMinervaToEdit(minerva) {
      this.model = Object.assign({}, minerva);
    },
    async saveMinerva() {
      if (this.model.id) {
        await api.minervaUpdate(this.model.id, this.model);
      } else {
        await api.minervaCreate(this.model);
      }
      this.model = {}; // reset form
    },
  },
};
</script>
