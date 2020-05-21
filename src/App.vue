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
                        <div class="col-xs-12 col-md-6">
                            <div class="container ld">
                            <h1>
                                Mentorship made easy
                            </h1>
                            <p>
                                At any stage in your career
                                the right relationship can steer you into
                                a fruitful journey.
                            </p>
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
        <div v-else-if="loginPage || registerPage"
            class="app__background content-wrap">
            <router-view />
        </div>
        <div v-else>
            <main class="container">
                <main-navbar :userSignedIn="loggedIn" />
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
import threadedRead from '@/assets/images/hero-header.png';
import CookieLaw from 'vue-cookie-law';

export default {
  name: 'Home',
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
    loginPage() {
      return this.$route.name === 'login';
    },
    registerPage() {
      return this.$route.name === 'register';
    },
    loggedIn() {
      return this.$store.state.users.user_signed_in;
    },
  },
};
</script>
