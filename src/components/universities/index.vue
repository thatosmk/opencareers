<template>
    <div class="container">
        <div class="py-5">
            <h1>
                Institutions
            </h1>
            <p class="text-muted py-2">
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
