<template>
  <div class="main">
    <div class="careers pt-5">
        <h1 class="pt-5 pb-4 font-weight-bold">
            Your future is bright

        </h1>
        <p class="font-weight-light pb-5 lead">
            Have you been worrying about what to do with your life,
            what the next the next step in your career would
            be? We can help you navigate safely into the seemingly
            dreadful unknown.
        </p>
        <b-card-group columns>
            <b-card
                class="shadow mb-5"
                v-for="career in careers"
                :key="career.id"
                :title="career.title"
            >
                <b-card-text>
                    <p class="font-weight-light">
                        {{ career.description }}
                    </p>
                    <p class="py-2">
                        <span class="badge badge-primary">
                            {{ career.industry }}
                        </span>
                    </p>
                </b-card-text>
                <router-link
                    :to="{ name: 'career', params: { careerId: career.slug } }"
                    variant="outline-primary"
                >
                    Explore career
                </router-link>
            </b-card>
        </b-card-group>
    </div>
    <div>
        <h1 class="pt-5 pb-4 font-weight-bold">
            Discover the best careers in the world
        </h1>
        <p class="font-weight-light pb-5 lead">
            Find out more information about careers
        </p>
    </div>
    <div>
        <h1 class="pt-5 pb-4 font-weight-bold">
            Ask questions freely
        </h1>
        <p class="font-weight-light pb-5 lead">
            We host AMA (ask me anything) sessions frequently to
            enable you to have meaningful chats with people
            who inspire you.
        </p>
    </div>
    <div class="pb-5">
        <h1 class="pt-5 pb-4 font-weight-bold">
            Give back to your community
        </h1>
        <p class="font-weight-light pb-5 lead">
            We are looking for volunteers to write
            about careers and to host AMA sessions on
            our platforms or on social media.
        </p>
        <b-button href='/get-started'
            variant="primary">
            Sign up to contribute
        </b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import readingImage from '@/assets/images/happy_students2.jpg';

export default {
  name: 'home',
  data() {
    return {
      words: ['an entreprenuer', 'an artist', 'a chef', 'a photographer', 'an accountant', 'an engineer', 'a freelancer', 'scientist'],
      readingImage,
    };
  },
  computed: {
    careers() {
      return this.$store.state.careers.all;
    },
  },
  created() {
    this.$store.dispatch('careers/loadCareers');
  },
  components: {
  },
};
</script>
