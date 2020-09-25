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
                <main-navbar />
                <div class="section-header">
                    <div class="d-flex flex-column bd-highlight">
                        <div class="bd-highlight w-100">
                            <div class="container left-aside">
                                <h1>
                                    The world is changing, and so are careers
                                </h1>
                                <p>
                                    Search &amp; read more about career and
                                    how to get into careers you love.
                                </p>
                            </div>
                        </div>
                        <div class="bd-highlight w-100">
                            <div class="container pt-5">
                                <b-form inline>
                                    <b-input
                                        id="search"
                                        class="mb-2 mr-sm-2 mb-sm-0 form-control-lg w-75"
                                        placeholder="Search for a career..."
                                        >
                                    </b-input>
                                    <b-button variant="primary" size="lg">Save</b-button>

                                </b-form>
                            </div>
                        </div>
                    </div>
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
