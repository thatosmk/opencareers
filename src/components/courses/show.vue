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
                    <div class="py-2">
                    <router-link
            :to="{ name: 'faculty_programmes', params: { programmeId: course.programme.slug } }"
                        class="btn btn-danger btn-sm"
                        >
                        back
                    </router-link>
                    </div>
                    <b-jumbotron class="text-center font-weight-bold">
                        <template
                            class="text-center"
                            v-slot:header>
                            {{ course.name }}
                        </template>
                    </b-jumbotron>
                        <h4>
                            Details
                        </h4>
                        <p class="lead text-muted">
                            credits: {{ course.nqf_credits }}
                        </p>
                    <div v-html="describe" class="marked-down pt-2 pb-5 position-relative">
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
import marked from 'marked';

export default {
  name: 'Course',
  computed: {
    course() {
      return this.$store.state.programmes.course;
    },
    describe() {
      return marked(this.$store.state.programmes.course.content, { sanitize: true });
    },
  },
  created() {
    const id = this.$router.currentRoute.params.courseId;
    this.$store.dispatch('programmes/loadCourse', id);
  },
  filters: {
    marked,
  },
};
</script>
