<template>
    <div>
        <div class="py-5 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <div class="py-5 toc position-fixed">
                        <varsity-sidebar :uni="university"/>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <div class="pt-2">
                        <h2 class="text-center">
                            {{ university.name }}
                        </h2>
                        <div v-if="university.avatar_url == null" class="py-4 text-center">
                            <b-img
                                v-bind="mainProps"
                                style="max-width: 100%"
                                alt="Circle image"
                            ></b-img>
                        </div>
                        <div v-else class="py-4 text-center">
                            <b-img-lazy
                                :src="getImageUrl(university.avatar_url)"
                                style="max-width: 100%"
                                alt="Circle image"
                                fluid
                            ></b-img-lazy>
                        </div>
                    </div>
                    <div class="pt-2 pb-5 position-relative">
                        <p class="py-4 text-center">
                            Global Rankings:
                            <span class="mx-2 badge badge-primary">
                                {{ university.global_rank }}
                            </span>
                            Local Rankings:
                            <span class="mx-2 badge badge-primary">
                                {{ university.local_rank }}
                            </span>
                        </p>
                        <p id="what" class="py-5">
                            {{ university.bio }}
                        </p>
                        <b-button
                            v-b-modal.modal-edit-varsity
                            variant="light"
                        >Edit University Info</b-button>
                        <b-button
                            class="mx-2"
                            v-b-modal.modal-add-faculty
                            variant="light"
                        >Add Faculty</b-button>
                    </div>
                    <b-modal id="modal-edit-varsity"
                        centered
                        title="Edit university"
                        size="xl"
                        hide-header
                        hide-footer
                    >
                        <div class="py-2 text-center">
                            <h2 class="pb-4">
                                 {{ university.name }}
                            </h2>
                            <p class="font-weight-light">
                                Edit this university
                            </p>
                        </div>
                        <div class="mx-5 pb-5">
                            <form @submit.prevent="update" ref="form">
                                <varsity-form :varsity='university' />
                            </form>
                        </div>
                    </b-modal>
                    <b-modal id="modal-add-faculty"
                        centered
                        title="Edit university"
                        size="xl"
                        hide-header
                        hide-footer
                    >
                        <div class="py-2 text-center">
                            <h2 class="pb-4">
                                 {{ university.name }}
                            </h2>
                            <p class="font-weight-light">
                                Edit this university
                            </p>
                        </div>
                        <div class="mx-5 pb-5">
                            <form @submit.prevent="addFaculty" ref="form">
                                <faculty-form :bannerRight='threadedRead' />
                            </form>
                        </div>
                    </b-modal>
                    <!-- faculties -->
                    <div class="py-4">
                        <h4>
                            Faculties
                        </h4>
                        <faculties :faculties="faculties" :uni="university"/>
                    </div>
                    <div class="py-4">
                        <router-link
                            :to="{ name: 'home' }"
                            variant="light"
                        >
                            Return to universitys
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import threadedRead from '@/assets/images/open-reading.png';

export default {
  name: 'University',
  data() {
    return {
      threadedRead,
      mainProps: {
        blank: true, blankColor: '#f2f4f8', width: 125, height: 125, class: 'm1',
      },
    };
  },
  computed: {
    university() {
      return this.$store.state.universities.university;
    },
    faculties() {
      return this.$store.state.universities.faculties;
    },
  },
  created() {
    const uniId = this.$router.currentRoute.params.varsityId;
    this.$store.dispatch('universities/loadUni', uniId);
    this.$store.dispatch('universities/loadFaculties', uniId);
  },
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
    async update() {
      const formData = new FormData(this.$refs.form);
      const uId = this.$router.currentRoute.params.varsityId;
      this.$store.dispatch('universities/updateUni', formData, uId);
    },
    async addFaculty() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('faculties/add', [formData, this.$route.params.varsityId]);
      this.$router.push({ name: 'university', params: { varsityId: this.$route.params.varsityId } });
    },
  },
};
</script>
