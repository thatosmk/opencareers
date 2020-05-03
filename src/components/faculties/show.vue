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
                            <router-link
                :to="{ name: 'university', params: { varsityId: faculty.university.slug }}"
                                >
                            {{ faculty.university.name }}
                            </router-link>
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <div class="pt-2">
                        <h2 class="font-weight-bold">
                            <span class="mr-4">
                            {{ faculty.name }} Faculty
                            </span>
                            <b-button
                                size="sm"
                                v-b-modal.modal-edit-varsity
                                variant="light"
                            >Update faculty information</b-button>
                        </h2>
                        <p class="py-2 text-muted">
                            {{ faculty.level }}
                            <a>
                            {{ faculty.url }}
                            </a>
                        </p>
                    </div>
                    <div class="pt-2 pb-2 position-relative">
                        <p id="what" class="py-5">
                        </p>
                    </div>
                    <div class="py-2">
                        <h2>
                            Programmes
                        </h2>
                        <p class="lead">
                            These are the range of degrees or programmes offered by this faculty
                        </p>
                        <programmes-index :programmes="programmes"/>
                    </div>
                        <b-button
                            class="mx-2"
                            size="sm"
                            v-b-modal.modal-add-programme
                            variant="light"
                        >Add Programme</b-button>
                    <b-modal id="modal-add-programme"
                        centered
                        title="Edit university"
                        size="xl"
                        hide-header
                        hide-footer
                    >
                        <div class="py-2 text-center">
                            <h2 class="pb-4">
                                 {{ faculty.name }}
                            </h2>
                        </div>
                        <div class="mx-5 pb-5">
                            <form @submit.prevent="addProgramme" ref="form">
                                <programme-form :bannerRight='threadedRead' />
                            </form>
                        </div>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import threadedRead from '@/assets/images/open-reading.png';

export default {
  name: 'Faculty',
  data() {
    return {
      threadedRead,
    };
  },
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
  methods: {
    async addProgramme() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('programmes/add', [formData, this.$route.params.facultyId]);
    },
  },
};
</script>
