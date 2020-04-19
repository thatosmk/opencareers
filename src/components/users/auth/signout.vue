<template>
  <div id="app" class="login">
  </div>
</template>
<script>
export default {
  name: 'UserSignout',
  created() {
    this.$store.dispatch('userSignout');
  },
};
</script>
