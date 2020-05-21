<template>
    <div class="container pt-5">
        <div class="pt-5 login_form shadow">
            <div class="pt-5 text-center">
                <h3 class="font-weight-bold">
                    Create an account
                </h3>
                <p>
                    Start using Threaded for free
                </p>
            </div>
            <b-alert show v-if="notAuthenticated" variant="danger">
                {{ errors }}
            </b-alert>
            <form @submit.prevent="register" ref="form">
                <div class="py-2 mx-2 mx-login">
                    <div>
                        <b-form-group class="py-2">
                           <b-form-input
                                required
                                type="text"
                                placeholder="Full Name"
                                size="lg"
                                name="user[full_name]"
                                class="py-4"
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-form-group class="py-2">
                           <b-form-input
                                required
                                type="email"
                                placeholder="email address"
                                size="lg"
                                name="user[email]"
                                class="py-4"
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-form-group class="py-2">
                            <b-form-input
                                type="password"
                                v-model="password"
                                required
                                placeholder="Create Password"
                                size="lg"
                                name="user[password]"
                                class="py-4"
                            >
                            </b-form-input>
                            <password
                                :secureLength="6"
                                :strength-meter-only="true"
                                v-model="password" />
                        </b-form-group>
                        <b-button
                            block
                            type="submit"
                            variant="primary"
                            class="py-2"
                        >
                            Register
                        </b-button>
                    </div>
                    <div class="py-4">
                        <p
                            class="text-muted"
                        >
                            Already have an account?
                            <router-link
                                :to="{ path: '/login' }"
                            >
                            Sign in
                            </router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Password from 'vue-password-strength-meter';

export default {
  name: 'Register',
  components: { Password },
  data() {
    return {
      password: null,
    };
  },
  methods: {
    async register() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/userRegister', formData)
        .then((value) => {
          this.$cookies.set('success', value);
          this.$router.push('/users/onboarding');
        })
        .catch((error) => {
          this.$cookies.set('registrationErrors', error);
          this.$router.go(-1);
        });
    },
  },
  computed: {
    errors() {
      return this.$store.state.users.errors.errors[0].detail;
    },
    notAuthenticated() {
      return this.$store.state.users.errors !== null;
    },
  },
};
</script>
