<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  name: 'Logout',
  created() {
    this.$store.dispatch('admins/adminSignout');
    this.$router.push('/blog');
  },
};
</script>
