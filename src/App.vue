<template>
  <div id="app">
      <div v-if="loggedIn" class="app__background">
        <router-view />
        <div class="main-wrapper text-center">
          <cookie-law theme="blood-orange--rounded"></cookie-law>
        </div>
      </div>
      <div v-else>
        <div v-if="rootPage" class="content-wrap">
            <header class="landing-header">
                <div class="jumbo-skew"></div>
                <main-navbar />
                <div class="section-header">
                    <b-row class="pt-2">
                        <div class="d-block d-md-none">
                            <div class="mx-4">
                            <b-img
                                :src="threadedRead"
                                alt="threaded-careers"
                                fluid
                                >
                            </b-img>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="container left-aside">
                                <h1>
                                    Connect with people who can help
                                </h1>
                                <p>
                                    At any stage in your career
                                    the right relationship can steer you into
                                    a fruitful journey.
                                </p>
                                <div class="pt-5 d-md-none d-block">
                                    <b-button
                                        class="cta"
                                        variant="dark"
                                        block
                                        href="/register"
                                        >
                                        Become a mentor
                                    </b-button>
                                </div>
                                <div class="text-center d-none d-md-block pt-5">
                                    <b-button
                                        class="cta"
                                        variant="dark"
                                        href="/register"
                                        >
                                        Become a mentor
                                    </b-button>
                                </div>
                            </div>
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
            <main-navbar />
            <main class="container">
                <router-view/>
            </main>
        </div>
        <div class="main-wrapper text-center">
          <cookie-law theme="blood-orange--rounded"></cookie-law>
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
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law';
import threadedRead from '@/assets/images/hero-main.png';

export default {
  components: { CookieLaw },
  data() {
    return {
      threadedRead,
    };
  },
  computed: {
    rootPage() {
      return this.$route.name === 'home';
    },
    loggedIn() {
      return this.$store.state.users.user_signed_in;
    },
  },
  created() {
    this.$store.dispatch('users/userShow');
  },
};
</script>
