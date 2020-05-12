<template>
    <div class="container">
        <div class="pt-5 text-center" style="padding-top: 120px !important;">
            <h3 class="font-weight-light">
                Welcome back
            </h3>
        </div>
        <div class="py-4 login_form">
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
          console.log(value);
          this.$router.push('/users/dashboard');
        })
        .catch((error) => { console.log('not logged in', error); });
      /*
      if (this.$store.state.users.errors !== null) {
        this.$router.push('/login');
      } else if (this.$cookies.isKey('user-token')) {
        this.$router.push('/users/dashboard');
      }
      */
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
