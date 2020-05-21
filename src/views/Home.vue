<template>
  <div class="main">
    <div class="container">
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
    <div class="give-back text-center pt-5">
        <h1>
            The best way to give back
        </h1>
        <p class="lead">
            Mentoring is one of the best ways in
            which one can give back to their community,
            share your journey with people you inspire.
        </p>
        <div class="d-md-none d-block">
            <b-img-lazy
                v-bind="mainProps"
                :src="social"
                alt="threaded-careers"
                >
            </b-img-lazy>
        </div>
        <div class="d-md-block d-none">
            <b-img-lazy
                fluid
                :src="thoughts"
                alt="threaded-careers"
                >
            </b-img-lazy>
        </div>
        <p>
            <router-link
               :to="{ path: '/' }"
               class="nav-link text-primary">
                    Read about careers
            </router-link>
        </p>
    </div>
    <div class="for-individuals pt-5">
        <div class="row">
            <div class="col-xs-12 col-md-2">
            </div>
            <div class="col-xs-12 col-md-4">
                <h1 class="py-5">
                    A sense of fulfilment &amp; personal growth
                </h1>
                <p class="pb-5 lead">
                    This is one of the highly valued benefits of
                    engaging mentorship, by opening yourself to helping
                    &amp; learning about others, you inherently learn
                    a lot more about yourself.
                </p>
                <h4>
                    Improve communication &amp; personal skills.
                </h4>
                <h4>
                    Improve communication &amp; personal skills.
                </h4>
                <router-link
                   :to="{ path: '/' }"
                   class="btn btn-primary btn-lg">
                        Find professionals in your area
                </router-link>
            </div>
            <div class="col-xs-12 col-md-5">
                <b-img-lazy
                    v-bind="mainProps"
                    :src="growth"
                    alt="threaded-careers"
                    >
                </b-img-lazy>
            </div>
        </div>
    </div>
    <div class="social">
        <div class="text-center">
            <h1 class="py-4">
                Careers are important to all of us
            </h1>
            <p class="lead py-2">
                We understand the value of a good career,
                we want to help you find the best one for you.
            </p>
        </div>
        <b-card-group class="container py-5" columns>
            <b-card class="no-border">
                <b-card-text class="py-2">
                    <b-icon-chat
                        animation="cylon"
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-chat>
                    <h4 class="py-4">
                        Organised conversations
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
                    <b-icon-folder
                        animation="cylon"
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-folder>
                    <h4 class="py-4">
                        Share resources easily
                    </h4>
                    <p>
                        Threaded is about inspiring
                        people to realise how important
                        development is, in their life and
                        in their career.
                    </p>
                </b-card-text>
            </b-card>
            <b-card class="no-border">
                <b-card-text class="py-2">
                    <b-icon-people
                        animation="cylon"
                        variant="primary"
                        font-scale="3"
                        >
                    </b-icon-people>
                    <h4 class="py-4">
                        Interactive &amp; valuable feedback
                    </h4>
                    <p>
                        We are a community of professionals in industry
                        and academia. We want to support you so you
                        make an informed career choice for your life.
                    </p>
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
    <div class="for-companies pt-5 container">
        <div class="text-center">
            <h1 class="py-5">
                Mentoring software for your organisation
            </h1>
            <p class="pb-5 lead">
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
    <div class="for-companies-2 pt-5 container">
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <h4 class="text-center py-5">
                    Create an impactful mentorship program
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
                    Sign-up mentees &amp; mentors instantly
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
                    The right connection can change a life
                </h4>
                <p class="pb-5 lead">
                    Ensure ideal mentor-mentee matches by using our
                    match recommendation algorithm that ensure that both
                    the mentor and mentee will find the most value from their
                    mentorship relationship.
                </p>
                <div class="d-block d-md-none">
                <b-img-lazy
                    fluid
                    rounded
                    :src="thoughts"
                    alt="threaded-careers"
                    >
                </b-img-lazy>
                </div>
                <router-link
                   :to="{ path: '/' }"
                   class="btn btn-primary btn-lg my-4">
                        Create your mentorship programme
                </router-link>
                <div class="d-none d-md-block">
                <b-img-lazy
                    v-bind="mainProps"
                    :src="heroCompany"
                    alt="threaded-careers"
                    >
                </b-img-lazy>
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
                        size="lg"
                        href="/careers"
                        >
                        Try threaded
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
      words: ['a friend', 'an inspiration', 'a role-model', 'an icon', 'a miracle', 'a blessing',
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
