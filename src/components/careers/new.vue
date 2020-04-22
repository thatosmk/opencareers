<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <div class="py-5">
                    <form @submit.prevent="addCareer" ref="form">
                        <b-form-group label="Title">
                            <b-form-input
                                class="form-control form-control-lg"
                                name="career[title]"
                                v-model="career.title"
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-form-group label="Steps for getting there">
                            <b-form-textarea
                                class="form-control form-control-lg"
                                name="career[process]"
                                v-model="career.process"
                            >
                            </b-form-textarea>
                        </b-form-group>
                        <b-form-group label="Description">
                            <markdown-editor
                                :options="options"
                                v-model="career.description"
                                name="career[description]"
                            ></markdown-editor>
                        </b-form-group>
                        <b-button-toolbar>
                            <b-button
                                type="submit"
                                size="lg"
                                variant="success"
                             >Create Career
                            </b-button>
                            <b-button
                                type="submit"
                                size="lg"
                                class="mx-2"
                                variant="danger"
                             >Cancel
                            </b-button>
                        </b-button-toolbar>
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
    async addCareer() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('createCareer', formData);
      this.$router.push('/');
    },
  },
};
</script>
