<template>
  <div id="app">
        <div v-if="rootPage" class="content-wrap">
            <header class="landing-header">
                <div class="jumbo-skew"></div>
                <main-navbar :userSignedIn="loggedIn" />
                <div class="section-header">
                    <b-row class="pt-2">
                        <div class="d-block d-md-none">
                            <b-img
                                :src="threadedRead"
                                alt="threaded-careers"
                                fluid
                                >
                            </b-img>
                        </div>
                        <div class="col-xs-12 col-md-2">
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <h1>
                                Start mentoring today
                            </h1>
                            <p>
                                At any stage in your career
                                the right relationship can steer you into
                                a fruitful journey.
                            </p>
                            <vue-typed-js :strings="words" :loop="true">
                                <h2 class="font-weight-light text-italic pt-4">
                                    Become  &nbsp;
                                    <span
                                        class="text-primary worded font-weight-bold pt-2 typing"
                                    >
                                    </span>
                                </h2>
                            </vue-typed-js>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <div class="d-none d-md-block">
                                <b-img
                                    :src="threadedRead"
                                    alt="threaded-careers"
                                    fluid-grow
                                    >
                                </b-img>
                            </div>
                        </div>
                    </b-row>
                </div>
            </header>
            <main>
                <router-view/>
            </main>
        </div>
        <div v-else>
            <main class="container">
                <main-navbar :userSignedIn="loggedIn" />
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
import threadedRead from '@/assets/images/hero-header.png';

export default {
  name: 'Home',
  data() {
    return {
      words: ['a friend', 'an inspiration', 'a role-model', 'an icon', 'a miracle', 'a blessing',
      ],
      threadedRead,
    };
  },
  computed: {
    rootPage() {
      return this.$route.name === 'home';
    },
    loggedIn() {
      return this.$cookies.isKey('user-token');
    },
  },
};
</script>
