<template>
  <div class="main">
    <div class="careers pt-5">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <b-img-lazy
                    v-bind="mainProps"
                    :src="magnolia"
                    alt="threaded-careers"
                    >
                </b-img-lazy>
            </div>
            <div class="col-xs-12 col-md-6">
                <h1 class="pt-5 pb-4 font-weight-bold">
                    Your future is bright
                </h1>
                <p class="font-weight-light pb-5 lead">
                    Have you been worrying about what to do with your life,
                    what the next the next step in your career would
                    be? We can help you navigate safely into the seemingly
                    dreadful unknown.
                </p>
            </div>
        </div>
    </div>
    <div class="discover">
        <h1 class="pt-5 pb-4 font-weight-bold">
            Discover the best careers in the world
        </h1>
        <p class="font-weight-light pb-5 lead">
            Find out more information about careers
        </p>
        <careers-index :careers="careers" />
        <b-link
            class="ml-4"
            href="/careers">
            See more careers
        </b-link>
    </div>
    <div class="pb-5">
        <h1 class="pt-5 pb-4 font-weight-bold">
            Give back to your community
        </h1>
        <p class="font-weight-light pb-5 lead w-50">
            We are looking for volunteers to write
            about careers and to host AMA sessions on
            our platforms or on social media.
        </p>
        <b-button href='/get-started'
            variant="primary">
            Sign up to contribute
        </b-button>
    </div>
    <div class="social">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <h1 class="s-h1 pt-5 pb-4 font-weight-bold">
                    Follow the conversations
                </h1>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="text-center">
                    <b-img-lazy
                        :src="social"
                        alt="threaded-careers"
                        height="380px"
                        fluid
                        >
                    </b-img-lazy>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import readingImage from '@/assets/images/happy_students2.jpg';
import magnolia from '@/assets/images/marginalia-success.png';
import social from '@/assets/images/social-girl.png';

export default {
  name: 'home',
  data() {
    return {
      words: ['an entreprenuer', 'an artist', 'a chef', 'a photographer', 'an accountant', 'an engineer', 'a freelancer', 'scientist'],
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5',
      },
      readingImage,
      magnolia,
      social,
    };
  },
  computed: {
    careers() {
      return this.$store.state.careers.all.slice(0, 3);
    },
  },
  created() {
    this.$store.dispatch('careers/loadCareers');
  },
  components: {
  },
};
</script>
