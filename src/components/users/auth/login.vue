<template>
    <div id="app">
        <h1>
            User Login
        </h1>
        <div class="py-2 mx-4">
            <form @submit.prevent="userLogin" ref="form">
                <b-form-group label="">
                    <b-form-input type="email"
                        class="form-control form-control-lg"
                        name="user[email]"
                        placeholder="Email">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="">
                    <b-form-input type="password"
                        class="form-control form-control-lg"
                        placeholder="e.g. 45 Bree Street"
                        name="user[password]"
                    >
                    </b-form-input>
                </b-form-group>
                <div class="py-4"></div>
                <b-button-toolbar>
                    <b-button
                        type="submit"
                        size="lg"
                        class="mx-2"
                        variant="success"
                     >Log in</b-button>
                </b-button-toolbar>
            </form>
        </div>
    </div>
</template>

<script>

export default {
  name: 'UserLogin',
  methods: {
    async userLogin() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('userSession', formData);
      // this.$router.push('/user/user-dashboard');
    },
  },
};
</script>
