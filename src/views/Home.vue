<template>
  <div class="main">
    <div class="careers pt-5">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="d-none d-md-block">
                    <b-img-lazy
                        v-bind="mainProps"
                        :src="thoughts"
                        alt="threaded-careers"
                        >
                    </b-img-lazy>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="text-center d-md-none d-block">
                    <h1 class="py-5 font-weight-bold">
                        Find your career
                    </h1>
                    <p class="font-weight-light pb-5 lead">
                        Have you been worrying about what to do with your life,
                        what the next the next step in your career would
                        be? We can help you navigate safely into the seemingly
                        dreadful unknown.
                    </p>
                    <b-img-lazy
                        v-bind="mainProps"
                        :src="thoughts"
                        alt="threaded-careers"
                        >
                    </b-img-lazy>
                    <router-link
                       :to="{ path: '/' }"
                       class="btn btn-primary btn-lg">
                            Read about careers
                    </router-link>
                </div>
                <div class="d-md-block d-none">
                    <h1 class="pt-5 pb-4 font-weight-bold">
                        Find your career
                    </h1>
                    <p class="font-weight-light pb-5 lead">
                        Have you been worrying about what to do with your life,
                        what the next the next step in your career would
                        be? We can help you navigate safely into the seemingly
                        dreadful unknown.
                    </p>
                    <router-link
                       :to="{ path: '/' }"
                       class="btn btn-primary btn-lg">
                            Read about careers
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="careers pt-5">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="text-center d-md-none d-block">
                    <h1 class="py-5 font-weight-bold">
                        Be inspired
                    </h1>
                    <p class="font-weight-light pb-5 lead">
                        Have you been worrying about what to do with your life,
                        what the next the next step in your career would
                        be? We can help you navigate safely into the seemingly
                        dreadful unknown.
                    </p>
                    <b-img-lazy
                        v-bind="mainProps"
                        :src="mOffice"
                        alt="threaded-careers"
                        >
                    </b-img-lazy>
                    <router-link
                       :to="{ path: '/' }"
                       class="btn btn-primary btn-lg">
                            Find professionals in your area
                    </router-link>
                </div>
                <div class="d-md-block d-none mr-4">
                    <h1 class="pt-5 pb-4 font-weight-bold">
                        Be inspired
                    </h1>
                    <p class="font-weight-light pb-5 lead">
                        Have you been worrying about what to do with your life,
                        what the next the next step in your career would
                        be? We can help you navigate safely into the seemingly
                        dreadful unknown.
                    </p>
                    <router-link
                       :to="{ path: '/' }"
                       class="btn btn-primary btn-lg">
                            Find professionals in your area
                    </router-link>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="d-none d-md-block">
                    <b-img-lazy
                        v-bind="mainProps"
                        :src="mOffice"
                        alt="threaded-careers"
                        >
                    </b-img-lazy>
                </div>
            </div>
        </div>
    </div>
    <div class="discover">
        <div class="text-center d-md-none d-block">
            <h2 class="pt-5 pb-4 font-weight-bold">
                Discover the best careers in the world
            </h2>
            <p class="font-weight-light pb-5 lead">
                Find out more information about careers
            </p>
        </div>
        <div class="d-md-block d-none">
            <h1 class="pt-5 pb-4 font-weight-bold">
                Discover the best careers in the world
            </h1>
            <p class="font-weight-light pb-5 lead">
                Find out more information about careers
            </p>
        </div>
        <careers-index :careers="careers" />
        <b-link
            class="ml-4"
            href="/careers">
            See more careers
        </b-link>
    </div>
    <div class="social">
        <div class="text-center">
            <h2 class="py-4">
                Careers are important to all of us
            </h2>
            <p class="lead py-2">
                We understand the value of a good career,
                we want to help you find the best one for you.
            </p>
        </div>
        <b-card-group class="d-md-block d-none py-5 ml-5" columns>
            <b-card class="no-border">
                <b-card-text class="py-2">
                    <b-icon-people
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-people>
                    <h4 class="py-4">
                        Built by a community
                    </h4>
                    <p>
                        We are a community of professionals in industry
                        and academia. We want to support you so you
                        make an informed career choice for your life.
                    </p>
                </b-card-text>
            </b-card>
            <b-card class="no-border">
                <b-card-text class="py-2">
                    <b-icon-people
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-people>
                    <h4 class="py-4">
                        Break  boundaries
                    </h4>
                    <p>
                        Threaded is about inspiring
                        people to realise how important
                        development is, in their life and
                        in their career.
                    </p>
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-card-group class="d-md-none d-block py-5" columns>
            <b-card class="no-border text-center">
                <b-card-text class="py-2">
                    <b-icon-people
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-people>
                    <h4 class="py-4">
                        Built by a community
                    </h4>
                    <p>
                        We are a community of professionals in industry
                        and academia. We want to support you so you
                        make an informed career choice for your life.
                    </p>
                </b-card-text>
            </b-card>
            <b-card class="no-border text-center">
                <b-card-text class="py-2">
                    <b-icon-people
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-people>
                    <h4 class="py-4">
                        Break  boundaries
                    </h4>
                    <p>
                        Threaded is about inspiring
                        people to realise how important
                        development is, in their life and
                        in their career.
                    </p>
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
    <div class="py-4">
        <b-jumbotron class="jumb_landing py-5">
            <template
                class="font-weight-light"
                v-slot:lead>
                    <div class="jumb_text">
                        It's <span class="text-primary">
                            your</span> future.
                        <br/>
                        We're just here to help.
                    </div>
                    <b-button
                        variant="primary"
                        size="lg"
                        href="/careers"
                        >
                        Read about Careers
                    </b-button>
            </template>
        </b-jumbotron>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import readingImage from '@/assets/images/happy_students2.jpg';
import magnolia from '@/assets/images/marginalia-success.png';
import social from '@/assets/images/social-girl.png';
import mOffice from '@/assets/images/millennial-office.png';
import thoughts from '@/assets/images/humaan-thoughts.png';

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
      thoughts,
      social,
      mOffice,
      showAnimationFor: {
        a: false,
        b: false,
        c: false,
      },
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
  methods: {
    isViewableNow(isVisible, entry, section) {
      this.showAnimationFor[section] = isVisible;
    },
  },
};
</script>
