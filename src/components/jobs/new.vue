<template>
    <div>
        <div class="py-5">
            <form @submit.prevent="addJob" ref="form">
                <b-form-group label="Title">
                    <b-form-input
                        class="form-control form-control-lg"
                        name="job[title]"
                        v-model="job.title"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Brief Description">
                    <b-form-textarea
                        class="form-control form-control-lg"
                        name="job[brief]"
                        v-model="job.brief"
                    >
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Details the requirements">
                    <b-form-textarea
                        class="form-control form-control-lg"
                        name="job[requirements]"
                        v-model="job.requirements"
                    >
                    </b-form-textarea>
                </b-form-group>
                <b-button-toolbar>
                    <b-button
                        type="submit"
                        size="lg"
                        variant="success"
                     >Create job
                    </b-button>
                </b-button-toolbar>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Newjob',
  data() {
    return {
      job: {},
    };
  },
  computed: {
  },
  methods: {
    async addJob() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('createJob', formData);
      this.$router.push('/jobs');
    },
  },
};
</script>
