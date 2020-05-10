<template>
    <div class="py-2">
        <user-navbar />
        <div class="container">
            <router-view />
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
      this.$notify({
        group: 'alerts',
        title: 'Post successfully added',
        type: 'success',
        position: 'top center',
        text: 'Hello user! This is a notification!',
      });
    },
  },
};
</script>
