<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  name: 'Logout',
  created() {
    this.$store.dispatch('users/userSignout');
    this.$notify({
      group: 'alerts',
      title: 'You have signed out',
      type: 'danger',
      position: 'top left',
      text: 'Hello user! This is a notification!',
    });
    this.$router.push('/');
  },
};
</script>
