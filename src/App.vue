<template>
  <div id="app">
        <div v-if="rootPage">
            <header v-if="rootPage" class="landing-header">
                <main-navbar/>
                <div class="container py-5">
                    <b-row>
                        <div class="col-xs-12 col-md-6">
                            <div>
                                <h1 class="py-2 d-block d-md-none">
                                    Career development and learning
                                </h1>
                                <h1 class="py-5 d-none d-md-block">
                                    Career development & learning
                                </h1>
                                <vue-typed-js :strings="words" :loop="true">
                                    <h2 class="font-weight-light text-italic pt-4">
                                        Become  &nbsp;
                                        <span
                                            class="text-primary worded font-weight-bold pt-2 typing"
                                        >
                                        </span>
                                    </h2>
                                </vue-typed-js>
                                <p class="d-none">
                                    Move carefully or skilfully in and out of hurdles
                                    that pull you down, we provide the tools and knowledge
                                    to become threaded.
                                </p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="py-4">
                                <b-img
                                    :src="read"
                                    alt="threaded-careers"
                                    fluid
                                    >
                                </b-img>
                            </div>
                        </div>
                    </b-row>
                </div>
            </header>
            <main class="container">
                <router-view/>
            </main>
        </div>
        <div v-else>
            <main class="container">
                <main-navbar/>
                <router-view/>
            </main>
        </div>
    <footer>
        <div class="container">
            <div class="py-5">
                <p class="text-muted">
                    threaded &copy; All Rights Reserved 2020
                </p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import read from '@/assets/images/open-read.png';

export default {
  name: 'Home',
  data() {
    return {
      words: ['an entreprenuer', 'an artist', 'a chef', 'a photographer', 'an accountant', 'an engineer', 'a freelancer', 'scientist'],
      read,
    };
  },
  computed: {
    rootPage() {
      return this.$router.currentRoute.name === 'home';
    },
  },
};
</script>
