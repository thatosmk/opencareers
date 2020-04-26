<template>
    <div>
        <div class="py-5 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <div class="py-2 toc position-fixed">
                        <h6>
                            Other courses by
                        </h6>
                        <p class="text-muted text-wrap">
                            {{ course.programme.title }}
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <b-jumbotron class="text-center font-weight-bold">
                        <template
                            class="text-center"
                            v-slot:header>
                            {{ course.name }}
                        </template>
                    </b-jumbotron>
                    <div class="position-relative">
                        <h2>
                            Outline
                        </h2>
                        <h2>
                            Entry requirements
                        </h2>
                        <h2>
                            Assessments
                        </h2>
                        <h2>
                            Course to be taken
                        </h2>
                        <p class="pb-4 lead text-muted">
                            These are the course to be taken for each
                            year until completion of the programme
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Course',
  computed: {
    course() {
      return this.$store.state.programmes.course;
    },
  },
  created() {
    const id = this.$router.currentRoute.params.courseId;
    this.$store.dispatch('programmes/loadCourse', id);
  },
};
</script>
