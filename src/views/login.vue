<template>
    <div class="container pt-5">
        <div class="pt-5 login_form shadow">
            <div class="pt-5 text-center">
                <h3 class="font-weight-bold text-center">
                    Welcome back admin
                </h3>
            </div>
            <b-alert show v-if="notAuthenticated" variant="danger">
                {{ errors }}
            </b-alert>
            <form @submit.prevent="login" ref="form">
                <div class="py-2 mx-2 mx-login">
                    <div>
                        <b-form-group>
                           <b-form-input
                                required
                                type="email"
                                placeholder="email address"
                                auto-complete="email"
                                size="lg"
                                name="admin[email]"
                                class="py-4"
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-form-group class="py-2">
                            <b-form-input
                                type="password"
                                required
                                auto-complete="current-password"
                                placeholder="password"
                                size="lg"
                                name="admin[password]"
                                class="py-4"
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-button
                            block
                            type="submit"
                            variant="primary"
                            class="py-2"
                        >
                            Sign in
                        </b-button>
                    </div>
                </div>
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
      this.$store.dispatch('admins/adminSession', formData)
        .then((value) => {
          this.$cookies.set('loginSuccess', value);
          this.$router.push('/blog');
        })
        .catch((error) => { this.$cookies.set('loginErrors', error); });
    },
  },
  computed: {
    errors() {
      return this.$store.state.admins.errors.error;
    },
    notAuthenticated() {
      return this.$store.state.admins.errors !== null;
    },
  },
};
</script>
