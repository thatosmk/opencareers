<template>
    <div class="container">
        <div class="pt-5 text-center" style="padding-top: 120px !important;">
            <h3 class="font-weight-light">
                Welcome back
            </h3>
        </div>
        <div class="py-4">
            <form @submit.prevent="login" ref="form">
                <login-form/>
            </form>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Login',
  methods: {
    async login() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/userSession', formData);
      this.$notify({
        group: 'alerts',
        title: 'You have signed out',
        type: 'success',
        position: 'top center',
        text: 'Hello user! This is a notification!',
      });
      this.$router.push('/login');
    },
  },
  computed: {
    loginErrors() {
      return this.$cookies.get('login-errors');
    },
  },
};
</script>
