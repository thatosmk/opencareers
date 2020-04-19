<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  name: 'Signout',
  created() {
    this.$store.dispatch('userSignout');
  },
};
</script>
