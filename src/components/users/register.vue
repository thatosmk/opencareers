<template>
    <div class="container">
        <div class="pt-5 text-center">
            <h3 class="font-weight-light">
                Create an account
            </h3>
        </div>
        <div class="py-4">
            <form @submit.prevent="register" ref="form">
                <register-form/>
            </form>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Register',
  methods: {
    async register() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/userRegister', formData);
      this.$notify({
        group: 'alerts',
        title: 'You have signed out',
        type: 'success',
        position: 'top center',
        text: 'Hello user! This is a notification!',
      });
      this.$router.push('/');
    },
  },
  computed: {
    loginErrors() {
      return this.$cookies.get('login-errors');
    },
  },
};
</script>
