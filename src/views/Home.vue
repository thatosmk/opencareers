<template>
  <div class="main">
    <header class="py-5 header-home">
        <b-row>
            <div class="col-xs-12 col-md-7">
                <div>
                    <h1 class="py-5">
                        Career development & learning
                    </h1>
                    <vue-typed-js :strings="words" :loop="true">
                        <h2 class="font-weight-light text-italic pt-4">
                            Become  &nbsp;
                            <span class="text-primary worded font-weight-bold pt-2 typing">
                            </span>
                        </h2>
                    </vue-typed-js>
                    <p class="d-none">
                        Move carefully or skilfully in and out of hurdles
                        that pull you down, we provide the tools and knowledge
                        to become threaded.
                    </p>
                </div>
                <div class="py-2 w-75">
                    <b-form>
                        <label class="sr-only" for="inline-form-input-search">search career</label>
                        <b-input-group size="lg">
                            <b-input-group-prepend is-text>
                                <b-icon-search
                                    variant="muted"
                                ></b-icon-search>
                            </b-input-group-prepend>
                            <b-input id="form-input-search"
                                placeholder="What do you want to be?"
                                size="lg"
                                class="px-2 pb-2 pt-2"
                            >
                            </b-input>
                        </b-input-group>
                    </b-form>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
            </div>
        </b-row>
    </header>
    <div class="careers">
        <h1 class="text-center py-5 font-weight-bold">
            Discover the best careers in the world
        </h1>
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
import readingImage from '@/assets/images/happy_students2.jpg';

export default {
  name: 'home',
  data() {
    return {
      words: ['an entreprenuer', 'an artist', 'a chef', 'a photographer', 'an accountant', 'an engineer', 'a freelancer', 'scientist'],
      readingImage,
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
