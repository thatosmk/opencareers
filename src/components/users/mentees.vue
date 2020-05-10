<template>
    <div>
        <div>
        <h1 class="text-center font-weight-light">
            Your mentees
        </h1>
        </div>
        <b-card-group columns class="py-4">
            <router-link
                v-for="mentee in mentees"
                :key="mentee.id"
                :to="{ name: 'user', params: { userId: mentee.slug }}"
                >
                <b-card
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
</template>
<script>
export default {
  name: 'Mentees',
  created() {
    this.$store.dispatch('dashboard/loadMentees');
  },
  computed: {
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
