<template>
  <div class="main">
    <header class="py-5 text-center ">
        <b-row>
            <div class="col-xs-12 col-md-7">
                <div class="text-center">
                    <vue-typed-js :strings="words" :loop="true">
                        <h2 class="font-weight-light text-italic pt-5">
                            Become  &nbsp;
                            <span class="text-primary worded font-weight-bold pt-2 typing">
                            </span>
                        </h2>
                    </vue-typed-js>
                </div>
                <div class="py-5">
                    <b-form>
                        <label class="sr-only" for="inline-form-input-search">search career</label>
                        <b-input-group size="lg">
                            <b-input-group-prepend is-text>
                                <b-icon-search
                                    variant="primary"
                                    class="mx-2"
                                ></b-icon-search>
                            </b-input-group-prepend>
                            <b-input id="form-input-search"
                                placeholder="What do you want to be?"
                                size="lg"
                                class="px-4 pb-2 pt-2"
                            >
                            </b-input>
                        </b-input-group>
                    </b-form>
                </div>
            </div>
            <div class="col-xs-12 col-md-5">
            </div>
        </b-row>
    </header>
    <div class="careers">
        <b-card-group columns>
            <b-card
                class="shadow mb-5"
                v-for="career in careers"
                :key="career.id"
                :title="career.title"
            >
                <b-card-text>
                    <p class="font-weight-light">
                        {{ career.description }}
                    </p>
                    <p class="py-2">
                        <span class="badge badge-primary">
                            {{ career.industry }}
                        </span>
                    </p>
                </b-card-text>
                <router-link
                    :to="{ name: 'career', params: { careerId: career.id } }"
                    variant="outline-primary"
                >
                    Explore career
                </router-link>
            </b-card>
        </b-card-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      words: ['an entreprenuer', 'an artist', 'a chef', 'a photographer', 'an accountant', 'an engineer', 'a freelancer', 'scientist'],
    };
  },
  computed: {
    careers() {
      return this.$store.getters.careers;
    },
  },
  components: {
  },
};
</script>
