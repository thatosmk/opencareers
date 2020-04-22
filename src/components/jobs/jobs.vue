<template>
  <div>
    <b-jumbotron class="py-4 shadow jumbanner">
        <template
            v-slot:header>
            Looking for a job?
        </template>
        <template
            v-slot:lead>
        </template>
        <div class="py-2 w-50">
            <b-form>
                <label class="sr-only" for="inline-form-input-search">search career</label>
                <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                        <b-icon-search
                            variant="muted"
                        ></b-icon-search>
                    </b-input-group-prepend>
                    <b-input id="form-input-search"
                        placeholder="Search job title"
                        size="lg"
                        class="px-2 pb-2 pt-2"
                    >
                    </b-input>
                    <b-button
                        class="mx-2"
                        size="lg"
                        variant="primary">
                        Search
                    </b-button>
                </b-input-group>
            </b-form>
        </div>
    </b-jumbotron>
    <section class="row">
      <aside class="col-xs-12 col-md-3">
        <div class="py-4">
            <p class="text-muted">
                Find by keywords
            </p>
        </div>
      </aside>
      <main class="col-xs-12 col-md-9">
        <div class="py-4">
            <p class="text-muted">
                Available jobs
            </p>
        </div>
        <div class="py-4">
            <b-card-group columns>
                <b-card
                    class="shadow mb-5"
                    v-for="job in jobs"
                    :key="job.id"
                    :title="job.title"
                >
                    <b-card-text>
                        <p class="py-2">
                            <span class="badge badge-primary">
                                {{ job.location }}
                            </span>
                        </p>
                    </b-card-text>
                    <router-link
                        :to="{ name: 'job', params: { jobId: job.slug } }"
                        variant="outline-primary"
                    >
                        Read more
                    </router-link>
                </b-card>
            </b-card-group>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    jobs() {
      return this.$store.getters.jobs;
    },
  },
  created() {
    this.$store.dispatch('loadJobs');
  },
};
</script>
