<template>
    <div>
        <div>
        <h4 class="text-center font-weight-light">
            Find a mentor
        </h4>
        </div>
        <div class="canvas">
            <b-card-group columns class="py-4">
                <router-link
                    v-for="mentee in mentees"
                    :key="mentee.id"
                    :to="{ name: 'user', params: { userId: mentee.slug }}"
                    >
                    <b-card
                        v-if="mentee.id !== user.id"
                        :title="mentee.full_name"
                        :img-src="getImageUrl(mentee.avatar_url)"
                        class="mx-4 mentee__card">
                        <b-card-text>
                            {{ mentee.bio }}
                        </b-card-text>
                    </b-card>
                </router-link>
            </b-card-group>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Mentees',
  created() {
    this.$store.dispatch('dashboard/loadMentees');
  },
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    mentees() {
      return this.$store.state.dashboard.mentees;
    },
    menteesCount() {
      return this.$store.state.dashboard.mentees.length;
    },
  },
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
};
</script>
