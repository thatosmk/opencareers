<template>
    <div class="container">
        <div class="py-2 text-center hero">
            <h1 class="font-weight-light">
                Institutions
            </h1>
            <p class="text-muted py-2 lead">
                Looking for a good institution to enrol in?
            </p>
        </div>
        <div class="py-4">
            <varsities :unis="universities"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Universities',
  created() {
    this.$store.dispatch('universities/load');
  },
  computed: {
    universities() {
      return this.$store.state.universities.all;
    },
  },
};
</script>
