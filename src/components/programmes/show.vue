<template>
    <div>
        <div class="py-5 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <div class="py-2 toc position-fixed d-none d-md-block">
                        <h6>
                            Other programmes by
                        </h6>
                        <p class="text-muted text-wrap">
                            {{ programme.faculty.name }}
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <b-jumbotron class="text-center font-weight-bold">
                        <template
                            class="text-center"
                            v-slot:header>
                            {{ programme.title }}
                        </template>
                    </b-jumbotron>
                    <div class="position-relative">
                        <h2>
                            Course to be taken
                        </h2>
                        <p class="pb-4 lead text-muted">
                            These are the course to be taken for each
                            year until completion of the programme
                        </p>
                        <courses-index :courses="courses"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Programme',
  computed: {
    courses() {
      return this.$store.state.programmes.courses;
    },
    programme() {
      return this.$store.state.programmes.programme;
    },
  },
  created() {
    const id = this.$router.currentRoute.params.programmeId;
    this.$store.dispatch('programmes/loadProgramme', id);
    this.$store.dispatch('programmes/loadCourses', id);
  },
};
</script>
