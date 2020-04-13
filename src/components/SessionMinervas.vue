<template>
    <div class="container py-4">
        <h1 class="h1">Login now</h1>
        <b-alert :show="loading" variant="info">Loading...</b-alert>
        <div class="mx-4">
            <form @submit.prevent="loginMinerva">
                <b-form-group label="email">
                    <b-form-input type="email" v-model="model.email"></b-form-input>
                </b-form-group>
                <b-form-group label="password">
                    <b-form-input type="password" v-model="model.password"></b-form-input>
                </b-form-group>
                <div>
                    <b-btn type="submit" variant="success">Login </b-btn>
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
    async loginMinerva() {
      await api.minervaSession(this.model);
      this.model = {}; // reset form
    },
  },
};
</script>
