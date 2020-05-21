<template>
    <div class="py-2">
        <div v-if="onboardingPage">
            <div class="container">
                <router-view />
            </div>
        </div>
        <div v-else>
            <user-navbar :user="user"/>
            <div class="container">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Show',
  data() {
    return {
      roles: ['mentor', 'content curator'],
    };
  },
  computed: {
    onboardingPage() {
      return this.$route.path === '/users/onboarding';
    },
    user() {
      return this.$store.state.users.user;
    },
  },
  created() {
    this.$store.dispatch('users/userShow');
  },
  methods: {
    async updateUser() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/userUpdate', formData);
    },
  },
};
</script>
