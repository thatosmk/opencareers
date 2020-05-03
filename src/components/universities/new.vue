<template>
    <div>
        <div class="py-4">
            <h1>
                Add new institution
            </h1>
        </div>
        <div class="py-5">
        <form @submit.prevent="addVarsity" ref="form">
            <varsity-form :varsity="university" />
        </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NewUniversity',
  data() {
    return {
      university: {},
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
      this.$store.dispatch('universities/createUniversity', formData);
      this.$router.push('/varsities');
    },
  },
};
</script>
