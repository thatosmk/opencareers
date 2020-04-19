<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'user',
  created() {
    // this.$store.dispatch('getUser');
  },
};
</script>
