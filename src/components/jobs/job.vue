<template>
    <div>
        <div class="py-5 ux_read">
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <div class="py-5 toc position-fixed">
                        <p class="text-muted">
                            Contents
                        </p>
                        <b-nav
                            pills
                            vertical
                            nav-wrapper-class="w-50"
                            v-b-scrollspy
                            class="flex-column"
                        >
                            <b-nav-item
                                href="#what"
                                >Job Title
                            </b-nav-item>
                            <b-nav-item
                                href="#how"
                                >How to get started
                            </b-nav-item>
                            <b-nav-item
                                href="#links"
                                >Further reading
                            </b-nav-item>
                        </b-nav>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <div class="pt-2 pb-5 position-relative">
                        <h1 class="text-center">
                            {{ job.title }}
                        </h1>
                        <p class="py-4 text-center">
                            <span class="badge badge-primary">
                                {{ job.location }}
                            </span>
                        </p>
                        <p id="what" class="py-5">
                            {{ job.brief }}
                        </p>
                        <p id="how" class="py-5">
                            {{ job.requirements }}
                        </p>
                    </div>
                    <div class="py-4">
                        <router-link
                            :to="{ name: 'jobs' }"
                            variant="light"
                        >
                            Return to jobs
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
  name: 'Job',
  computed: {
    job() {
      return this.$store.getters.job;
    },
  },
  created() {
    this.$store.dispatch('loadJob');
  },
};
</script>
