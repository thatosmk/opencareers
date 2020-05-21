<template>
  <div class="main">
    <div class="container">
        <div class="landing">
            <div class="row">
                <div class="col-md-5 col-lg-5">
                </div>
                <div class="col-md-7 col-lg-7">
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
                            >
                            Why should I mentor?
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="landing">
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
                                >
                                See our mentors
                            </b-button>
                        </div>
                        <div class="d-none d-md-block">
                            <b-button
                                class="cta"
                                variant="dark"
                                >
                                See our mentors
                            </b-button>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="landing">
            <div class="text-center py-5">
                <h1>
                    A platform for engaging mentorships
                </h1>
            </div>
            <div class="pt-5">
                <div class="row">
                    <div class="col-md-3 col-lg-3">
                        <div class="card">
                            <h4 class="py-5">
                                Easy Scheduling
                            </h4>
                            <p>
                                We are a community of professionals in industry
                                and academia. We want to support you so you
                                make an informed career choice for your life.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="card">
                            <h4 class="py-5">
                                Easy Scheduling
                            </h4>
                            <p>
                                We are a community of professionals in industry
                                and academia. We want to support you so you
                                make an informed career choice for your life.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="card">
                            <b-icon-chat
                                variant="primary"
                                font-scale="3"
                                >
                            </b-icon-chat>
                            <h4 class="py-5">
                                Private messaging
                            </h4>
                            <p>
                                We are a community of professionals in industry
                                and academia. We want to support you so you
                                make an informed career choice for your life.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="card">
                            <h4 class="py-5">
                                Private messaging
                            </h4>
                            <p>
                                We are a community of professionals in industry
                                and academia. We want to support you so you
                                make an informed career choice for your life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="landing text-center">
            <h1 class="py-5">
                Check up on your mentors &amp; mentees
            </h1>
            <p class="pb-5 pj lead">
                Have you been worrying about what to do with your life,
                what the next the next step in your career would
                be? We can help you navigate safely into the seemingly
                dreadful unknown.
            </p>
            <b-img-lazy
                v-bind="mainProps"
                :src="heroCompany"
                alt="threaded-careers"
                >
            </b-img-lazy>
        </div>
    </div>
    <div class="container">
        <div class="landing">
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <h4 class="text-center py-5">
                        Quick &amp; Easy onboarding
                    </h4>
                    <div class="d-block d-md-none">
                    <b-img-lazy
                        fluid
                        :src="heroCompany"
                        alt="threaded-careers"
                        >
                    </b-img-lazy>
                    </div>
                    <p class="pb-5 lead">
                        Is your organisation or school running a mentorship programme?
                        Move your mentorship programme online to make it easy to access
                        and valuable to mentees and mentors.
                    </p>
                </div>
                <div class="col-xs-12 col-md-4">
                    <h4 class="text-center py-5">
                        Automatic Check-ins &amp; Reports
                    </h4>
                    <div class="d-block d-md-none">
                    <b-img-lazy
                        fluid
                        :src="mOffice"
                        alt="threaded-careers"
                        >
                    </b-img-lazy>
                    </div>
                    <p class="pb-2 lead">
                        Share your programme link with your volunteers
                        and potential mentees, once their profiles have
                        been setup, you will be ready to assign based on
                        our algorithm recommendations.
                    </p>
                </div>
                <div class="col-xs-12 col-md-4">
                    <h4 class="text-center py-5">
                        Evaluate &amp; Improve
                    </h4>
                    <p class="pb-5 lead">
                        Ensure ideal mentor-mentee matches by using our
                        match recommendation algorithm that ensure that both
                        the mentor and mentee will find the most value from their
                        mentorship relationship.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-4">
        <b-jumbotron class="jumb_landing py-5">
            <template
                class="font-weight-bold"
                v-slot:lead>
                    <div class="pb-5 jumb_text">
                        Engage in a <span class="text-primary">
                           volunteering</span> opportunity,
                        <br/>
                        highly valued by<span class="text-primary"> employers
                            </span>
                    </div>
                    <b-button
                        variant="primary"
                        class="cta"
                        size="lg"
                        href="/careers"
                        >
                        Try threaded
                    </b-button>
                    <b-button
                        variant="danger"
                        class="cta mx-4"
                        size="lg"
                        href="/careers"
                        >
                        Got questions?
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
import mOffice from '@/assets/images/hero-company.png';
import heroCompany from '@/assets/images/hero-company-1.png';
import thoughts from '@/assets/images/smiling.jpg';
import growth from '@/assets/images/love.png';

export default {
  name: 'home',
  data() {
    return {
      words: ['a friend', 'an advisor', 'a role-model', 'an icon', 'a miracle', 'a blessing',
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
      readingImage,
      magnolia,
      thoughts,
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
