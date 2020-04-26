<template>
    <div>
        <div class="py-5 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3 d-none d-md-block">
                    <div class="py-5 toc position-fixed">
                        <h6>
                            Other faculties by
                        </h6>
                        <p class="text-muted text-wrap">
                            {{ faculty.university.name }}
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <div class="pt-2">
                    </div>
                    <div class="pt-2 pb-5 position-relative">
                        <b-jumbotron class="text-center font-weight-bold">
                            <template
                                class="text-center"
                                v-slot:header>
                                {{ faculty.name }}
                            </template>
                        </b-jumbotron>
                        <h1 class="text-center">
                            <b-button
                                v-b-modal.modal-edit-varsity
                                variant="primary"
                            >Update faculty information</b-button>
                        </h1>
                        <p class="py-4 text-center">
                            <span class="badge badge-primary">
                                {{ faculty.level }}
                            </span>
                        </p>
                        <p id="what" class="py-5">
                            {{ faculty.url }}
                        </p>
                    </div>
                    <div class="py-2">
                        <h2>
                            Programmes offered
                        </h2>
                        <programmes-index :programmes="programmes"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Faculty',
  computed: {
    faculty() {
      return this.$store.state.faculties.faculty;
    },
    programmes() {
      return this.$store.state.faculties.programmes;
    },
  },
  created() {
    const id = this.$router.currentRoute.params.facultyId;
    this.$store.dispatch('faculties/loadFaculty', id);
    this.$store.dispatch('faculties/loadProgrammes', id);
  },
};
</script>
