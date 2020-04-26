<template>
    <div class="container">
        <div class="py-5">
            <h1>
                Careers
            </h1>
            <p class="text-muted py-2">
                Become anything you can imagine
            </p>
        </div>
        <div class="py-4">
            <careers-index :careers="careers"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Careers',
  created() {
    this.$store.dispatch('careers/loadCareers');
  },
  computed: {
    careers() {
      return this.$store.state.careers.all;
    },
  },
};
</script>
