<template>
    <div>
        <h1 class="pt-5 pb-2 ml-4">
            Add new career
        </h1>
        <div class="py-5">
            <form @submit.prevent="addVarsity" ref="form">
                <career-form :career="career" />
            </form>
        </div>
    </div>
</template>
<script>
import marked from 'marked';

export default {
  name: 'NewCareer',
  data() {
    return {
      career: {},
      options: {
        indentUnit: 2,
      },
    };
  },
  computed: {
  },
  methods: {
    async addVarsity() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('careers/createCareer', formData);
      this.$router.push('/careers');
    },
  },
  filters: {
    marked,
  },
};
</script>
