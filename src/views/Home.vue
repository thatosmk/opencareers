<template>
  <div class="main">
    <div class="landing-left">
        <div class="landing-container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="aside-left">
                        <b-img
                            :src="book"
                            fluid
                            class="rounded-img"
                            >
                        </b-img>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="py-4">
                        <vue-typed-js :strings="words" :loop="true">
                            <h1 class="font-weight-light text-italic pt-4">
                                Become  &nbsp;
                                <span
                                    class="text-dark worded font-weight-bold pt-2 typing"
                                >
                                </span>
                            </h1>
                        </vue-typed-js>
                        <p class="lead py-5">
                            Mentoring is one of the best ways in
                            which one can give back to their community,
                            share your journey with people you inspire.
                        </p>
                        <b-button
                            class="cta"
                            variant="dark"
                            href="/register"
                            >
                            I want to mentor
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="landing-right">
        <div class="landing-container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="py-4">
                            <h1 class="font-weight-bold pt-4">
                                Choose a mentor
                            </h1>
                        <p class="lead pj py-5">
                            Mentoring is one of the best ways in
                            which one can give back to their community,
                            share your journey with people you inspire.
                        </p>
                        <div class="d-md-none d-block">
                            <b-button
                                class="cta mx-2"
                                variant="dark"
                                href="/register"
                                >
                                I need a mentor
                            </b-button>
                        </div>
                        <div class="d-none d-md-block">
                            <b-button
                                class="cta"
                                variant="dark"
                                href="/register"
                                >
                                I need a mentor
                            </b-button>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="aside-right">
                        <b-img
                            :src="smiling"
                            fluid
                            class="rounded-img"
                            >
                        </b-img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="landing">
            <div class="text-center">
                <h1 class="py-5">
                    A platform for engaging mentorships
                </h1>
            </div>
            <div class="pt-5">
                <div class="row">
                    <div class="col-md-3 col-lg-3">
                        <div class="text-center pt-4">
                            <b-icon-calendar
                                variant="primary"
                                font-scale="3"
                                >
                            </b-icon-calendar>
                            <h4 class="pb-3 pt-5">
                                Schedule Meetings
                            </h4>
                            <p>
                                Set meetings and important dates
                                for the mentorship.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="text-center pt-4">
                            <b-icon-chat
                                variant="primary"
                                font-scale="3"
                                >
                            </b-icon-chat>
                            <h4 class="pb-3 pt-5">
                                Instant Messaging
                            </h4>
                            <p>
                                Chat privately with each other and
                                and share stuff with honesty and trust.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="text-center pt-4">
                            <b-icon-files
                                variant="primary"
                                font-scale="3"
                                >
                            </b-icon-files>
                            <h4 class="pb-3 pt-5">
                                Shared Resources
                            </h4>
                            <p>
                                Share documents and useful files
                                between each other.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="text-center pt-4">
                            <b-icon-clipboard-data
                                variant="primary"
                                font-scale="3"
                                >
                            </b-icon-clipboard-data>
                            <h4 class="pb-3 pt-5">
                                Goal Setting &amp; To-dos
                            </h4>
                            <p>
                                Make a list of goals and to dos
                                and assign them with due dates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="landing-colored">
        <div class="container text-center">
            <h1 class="py-5">
                For Organisations
            </h1>
            <p class="pb-5 pj lead">
                Take your mentorship programme online and manage with ease.
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <h4 class="py-5">
                        Quick &amp; Easy onboarding
                    </h4>
                    <p class="mr-2 pb-5 lead">
                        Easily sign up mentors and mentees and get
                        them onboard with all they need to know about
                        your mentorship programme.
                    </p>
                </div>
                <div class="col-xs-12 col-md-4">
                    <h4 class="py-5">
                        Automatic Check-ins
                    </h4>
                    <p class="pb-2 mr-2 lead">
                        Find out how your mentors and mentees
                        are getting along with scheduled
                        regular check-ins.
                    </p>
                </div>
                <div class="col-xs-12 col-md-4">
                    <h4 class="py-5">
                        Evaluate &amp; Improve
                    </h4>
                    <p class="mr-2 pb-5 lead">
                        View interaction metrics and feedback
                        by sending our quick surveys. Browse
                        the dashboard for useful reporting.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="landing">
        <div class="container">
            <div class="pb-5 jumb_text">
                <h1 class="font-weight-light">
                Engage in a <span class="text-primary">
                   volunteering</span> opportunity,
                <br/>
                highly valued by<span class="text-primary"> employers
                    </span>
                </h1>
            </div>
            <b-button
                variant="primary"
                class="cta m-2"
                size="lg"
                href="/register"
                >
                Try threaded
            </b-button>
            <b-button
                variant="danger"
                class="cta m-2"
                size="lg"
                href="/about"
                >
                Got questions?
            </b-button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import backGraphic from '@/assets/images/background-main.png';
import magnolia from '@/assets/images/marginalia-success.png';
import social from '@/assets/images/social-girl.png';
import mOffice from '@/assets/images/hero-company.png';
import heroCompany from '@/assets/images/hero-company-1.png';
import smiling from '@/assets/images/smiling.jpg';
import growth from '@/assets/images/love.png';
import book from '@/assets/images/book.jpg';

export default {
  name: 'home',
  data() {
    return {
      words: ['a friend', 'an advisor', 'an icon', 'a miracle', 'a blessing',
      ],
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5',
      },
      backGraphic,
      magnolia,
      book,
      smiling,
      social,
      growth,
      mOffice,
      heroCompany,
    };
  },
  computed: {
  },
  created() {
  },
  components: {
  },
  methods: {
  },
};
</script>
