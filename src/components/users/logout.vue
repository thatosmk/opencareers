<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  name: 'Logout',
  created() {
    this.$store.dispatch('users/userSignout');
    this.$router.go(0);
  },
};
</script>
