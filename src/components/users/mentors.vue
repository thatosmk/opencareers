<template>
    <div>
        <div>
            <h4 class="text-center font-weight-light">
                Find a mentor
            </h4>
        </div>
        <div class="canvas">

            <b-card-group columns class="py-4">
                <b-card no-body class="overflow-hidden"
                    v-for="mentor in mentors"
                    :key="mentor.id"
                    >
                    <b-row no-gutters
                        v-if="mentor.account !== null"
                        >
                        <b-col md="6">
                            <b-card-img
                                v-if="mentor.avatar_url !== null"
                                :src="getImageUrl(mentor.avatar_url)" alt="Image"
                                class="rounded-0"
                            ></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body
                                :title="mentor.full_name">
                                <b-card-text>
                                    <p>
                                    <b-badge class="p-2" variant="dark">
                                    {{ mentor.account.industry }}
                                    </b-badge>
                                    <b-badge class="p-2" variant="primary">
                                    {{ mentor.account.occupation }}
                                    </b-badge>
                                    </p>
                                    Went to {{ mentor.account.institution }}
                                    <router-link
                                        class="btn btn-primary"
                                        :to="{ name: 'user', params: { userId: mentor.id }}"
                                        >
                                        Read more
                                    </router-link>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Mentors',
  created() {
    this.$store.dispatch('dashboard/loadMentors');
  },
  computed: {
    mentors() {
      return this.$store.state.dashboard.mentors;
    },
    mentorsCount() {
      return this.$store.state.dashboard.mentors.length;
    },
  },
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
};
</script>
