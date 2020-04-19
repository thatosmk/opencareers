<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'User',
  created() {
    // this.$store.dispatch('getUser');
  },
};
</script>
