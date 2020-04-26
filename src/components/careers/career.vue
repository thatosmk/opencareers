<template>
    <div>
        <div class="py-5 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <div class="py-2 toc position-fixed">
                        <career-sidebar :career="career"/>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <b-jumbotron class="text-center font-weight-bold">
                        <template
                            class="text-center"
                            v-slot:header>
                            {{ career.title }}
                            <span class="badge badge-primary text-small">
                                {{ career.industry }}
                            </span>
                        </template>
                    </b-jumbotron>
                    <div class="pt-2 pb-5 position-relative">
                        <p id="what" class="py-5">
                            {{ career.description }}
                        </p>
                        <div id="how">
                            <h2>
                                How to get started
                            </h2>
                            <p class="pt-4">
                                {{ career.process }}
                            </p>
                        </div>
                        <div id="day">
                            <h2>
                                What do my days look like?
                            </h2>
                            <p class="pt-4">
                                {{ career.process }}
                            </p>
                        </div>
                        <div id="salary">
                            <h2>
                                Estimated market related salary
                            </h2>
                            <p class="pt-4">
                                {{ career.process }}
                            </p>
                        </div>
                        <div id="links">
                            <h2>
                                Read more about it
                            </h2>
                            <p class="pt-4">
                                {{ career.links }}
                            </p>
                        </div>
                    </div>
                    <!-- programmes -->
                    <div class="pt-5" id="programmes">
                        <h2>
                            Programmes you can study
                        </h2>
                        <p class="lead text-muted">
                            Here are some of the programmes you can study
                            to enter into this career.
                        </p>
                    </div>
                    <programmes-index :programmes="programmes"/>
                    <div class="py-4">
                        <router-link
                            :to="{ name: 'home' }"
                            variant="light"
                        >
                            Return to careers
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
  name: 'Career',
  computed: {
    career() {
      return this.$store.state.careers.career;
    },
    programmes() {
      return this.$store.state.careers.programmes;
    },
  },
  created() {
    const id = this.$router.currentRoute.params.careerId;
    this.$store.dispatch('careers/loadCareer', id);
    this.$store.dispatch('careers/loadProgrammes', id);
  },
};
</script>
