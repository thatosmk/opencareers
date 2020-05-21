<template>
    <div class="container pt-5">
        <div class="pt-5 login_form shadow">
            <div class="pt-5 text-center">
                <h3 class="font-weight-bold text-center">
                    Welcome back
                </h3>
            </div>
            <b-alert show v-if="notAuthenticated" variant="danger">
                {{ errors }}
            </b-alert>
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
      this.$store.dispatch('users/userSession', formData)
        .then((value) => {
          this.$cookies.set('loginSuccess', value);
          this.$router.push('/users/dashboard');
        })
        .catch((error) => { this.$cookies.set('loginErrors', error); });
    },
  },
  computed: {
    errors() {
      return this.$store.state.users.errors.error;
    },
    notAuthenticated() {
      return this.$store.state.users.errors !== null;
    },
  },
};
</script>
