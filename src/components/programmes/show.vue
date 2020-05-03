<template>
    <div>
        <div class="py-4 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <div class="py-2 toc position-fixed d-none d-md-block">
                        <h6>
                            Other programmes by
                        </h6>
                        <p class="text-muted text-wrap">
                            <router-link
                :to="{ name: 'university_faculties', params: { facultyId: programme.faculty.slug }}"
                                >
                            {{ programme.faculty.name }}
                            </router-link>
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
                        <div class="row">
                            <div class="col-xs-12 col-md-4">
                                <p class="lead text-muted">
                                    {{ programme.qualification }}
                                </p>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <p class="lead text-muted">
                                    {{ programme.duration }}
                                </p>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <p class="lead text-muted">
                                    {{ programme.faculty.name }} faculty
                                </p>
                            </div>
                        </div>
                        <h2>
                            Course to be taken
                        </h2>
                    <b-modal id="modal-add-course"
                        centered
                        title="Add Course"
                        size="xl"
                        hide-header
                        hide-footer
                    >
                        <div class="py-2 text-center">
                            <h2 class="pb-4">
                                 add courses for {{ programme.title }}
                            </h2>
                        </div>
                        <div class="mx-5 pb-5">
                            <form @submit.prevent="addCourse" ref="form">
                                <course-form />
                            </form>
                        </div>
                    </b-modal>
                        <p class="pb-4 lead text-muted">
                            These are the course to be taken for each
                            year until completion of the programme
                        </p>
                        <courses-index :courses="courses"/>
                        <p class="py-4">
                        <b-button
                            v-b-modal.modal-add-course
                            variant="primary"
                        >Add Course</b-button>
                        </p>
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
  methods: {
    async addCourse() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('programmes/createCourse', [formData, this.$route.params.programmeId]);
      this.$router.push({ path: '/programmes', params: { programmeId: this.route.params.programmeId } });
    },
  },
};
</script>
