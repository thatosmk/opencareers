<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <div class="py-5">
                    <form @submit.prevent="updateCareer" ref="form">
                        <career-form :career="career" />
                    </form>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'EditCareer',
  data() {
    return {
      options: {
        indentUnit: 2,
      },
    };
  },
  computed: {
    career() {
      return this.$store.state.careers.career;
    },
  },
  created() {
    this.$store.dispatch('careers/loadCareer');
  },
  methods: {
    async updateCareer() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('updateCareer', formData);
      this.$router.push(`/careers/${this.$router.currentRoute.params.careerId}`);
    },
  },
};
</script>
