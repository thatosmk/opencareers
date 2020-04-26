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
                        <div v-if="university.avatar_url == null" class="py-4">
                            <b-img
                                v-bind="mainProps"
                                style="max-width: 100%"
                                alt="Circle image"
                            ></b-img>
                        </div>
                        <div v-else class="py-4">
                            <b-img-lazy
                                :src="getImageUrl(university.avatar_url)"
                                style="max-width: 100%"
                                alt="Circle image"
                                fluid
                            ></b-img-lazy>
                        </div>
                    </div>
                    <div class="pt-2 pb-5 position-relative">
                        <h1 class="text-center">
                            {{ university.name }}
                            <b-button
                                v-b-modal.modal-edit-varsity
                                variant="primary"
                            >Setup your account</b-button>
                        </h1>
                        <p class="py-4 text-center">
                            <span class="badge badge-primary">
                                {{ university.global_rank }}
                            </span>
                        </p>
                        <p id="what" class="py-5">
                            {{ university.bio }}
                        </p>
                    </div>
            <b-modal id="modal-edit-varsity"
                centered
                title="Edit university"
                size="xl"
                hide-header
                hide-footer
            >
                <div class="py-5 text-center">
                    <h2 class="pb-4">
                         {{ university.name }}
                    </h2>
                    <p class="font-weight-light">
                        Edit this university
                    </p>
                </div>
                <div class="mx-5 w-75 pb-5">
                    <form @submit.prevent="update" ref="form">
                        <div class="row">
                            <div class="col-xs-12 col-md-4">
                                <div class="py-2 text-center">
                                <h6 class="pb-4">Profile Picture</h6>
                                <b-img
                                    v-bind="mainProps"
                                    border-variant="primary"
                                    rounded="circle"
                                    alt="Circle image"></b-img>
                                <div class="py-4">
                                <b-form-file
                                    accept=".jpg, .png, .gif"
                                    id="file-small"
                                    size="sm"
                                    name="university[avatar]"
                                    plain
                                ></b-form-file>
                                </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-8">
                                        <b-form-group label="">
                                            <b-form-input type="text"
                                                class="form-control form-control-lg"
                                                v-model="university.name"
                                                name="university[name]"
                                                placeholder="Title">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="">
                                            <b-form-textarea
                                                class="form-control form-control-lg"
                                                v-model="university.bio"
                                                name="university[bio]"
                                                rows="3"
                                                max-rows="6"
                                                placeholder="Tell us about the university">
                                            </b-form-textarea>
                                        </b-form-group>
                                <div class="py-2">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-2">
                                            <div class="text-center align-middle">
                                            <b-icon-trophy
                                                font-scale="2"
                                                variant="muted"
                                            >
                                            </b-icon-trophy>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-4">
                                            <b-input type="text"
                                                class="form-control form-control-lg"
                                                v-model="university.local_rank"
                                                name="university[local_rank]"
                                                >
                                            </b-input>
                                        </div>
                                        <div class="col-xs-12 col-md-2">
                                            <div class="text-center align-middle">
                                            <b-icon-trophy
                                                font-scale="2"
                                                variant="muted"
                                            >
                                            </b-icon-trophy>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-4">
                                            <b-input type="text"
                                                class="form-control form-control-lg"
                                                v-model="university.global_rank"
                                                name="university[global_rank]"
                                                >
                                            </b-input>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-2">
                                            <div class="text-center align-middle">
                                            <b-icon-geo-alt
                                                font-scale="2"
                                                variant="muted"
                                            >
                                            </b-icon-geo-alt>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-10">
                                            <div class="pb-4">
                                                <b-input type="text"
                                                    class="form-control form-control-lg"
                                                    v-model="university.address"
                                                    name="university[address]"
                                                    placeholder="Street address"
                                                    >
                                                </b-input>
                                            </div>
                                            <div class="pb-4">
                                                <b-row>
                                                    <b-col>
                                                    <b-form-input type="text"
                                                        class="form-control form-control-lg"
                                                        v-model="university.city"
                                                        name="university[city]"
                                                        placeholder="City">
                                                    </b-form-input>
                                                    </b-col>
                                                    <b-col>
                                                    <b-form-input type="text"
                                                        class="form-control form-control-lg"
                                                        v-model="university.state"
                                                        name="university[state]"
                                                        placeholder="province">
                                                    </b-form-input>
                                                    </b-col>
                                                </b-row>
                                            </div>
                                            <div class="pb-4">
                                                <b-form-group label="">
                                                    <b-form-input type="text"
                                                        class="form-control form-control-lg"
                                                        placeholder="zip code"
                                                        v-model="university.zipcode"
                                                        name="university[zipcode]"
                                                    >
                                                    </b-form-input>
                                                </b-form-group>
                                                <b-form-group label="">
                                                    <b-form-input type="text"
                                                        class="form-control form-control-lg"
                                                        placeholder="Country"
                                                        v-model="university.country"
                                                        name="university[country]"
                                                    >
                                                    </b-form-input>
                                                </b-form-group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-2"></div>
                        <b-button-toolbar>
                            <b-button
                                type="submit"
                                class="btn-lg ml-auto"
                                variant="success"
                             >Update University</b-button>
                        </b-button-toolbar>
                    </form>
                </div>
            </b-modal>
                    <!-- faculties -->
                    <faculties :faculties="faculties" :uni="university"/>
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

export default {
  name: 'University',
  data() {
    return {
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
      const uId = this.$router.params.varsityId;
      this.$store.dispatch('universities/updateUni', formData, uId);
    },
  },
};
</script>
