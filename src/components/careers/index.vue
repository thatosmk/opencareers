<template>
    <div class="container">
        <div class="py-5 text-center">
            <h1 class="font-weight-bold">
                Careers
            </h1>
            <p class="text-muted py-2 lead">
                Become anything you can imagine
            </p>
        </div>
        <div class="py-2 w-search-bar">
            <form @submit.prevent="search" ref="form" inline>
                    <b-input-group
                        class="py-2"
                    >
                        <b-input
                            placeholder="Search a career"
                            size="lg"
                            name="search"
                            >
                        </b-input>
                        <b-input-group-append>
                            <b-button
                                type="submit"
                                variant="primary"
                                >
                                Search
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
            </form>
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
  methods: {
    async search() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('careers/search', formData);
    },
  },
};
</script>
