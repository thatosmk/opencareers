<template>
    <div>
        <div class="py-2 mx-2">
            <h2>
                Add a new faculty for {{ university.name }}
            </h2>
        </div>
        <div class="mx-5 pb-5">
            <form @submit.prevent="addFaculty" ref="form">
                <faculty-form :bannerRight='threadedRead' />
            </form>
        </div>
    </div>
</template>

<script>
import threadedRead from '@/assets/images/open-reading.png';

export default {
  name: 'NewFaculty',
  data() {
    return {
      threadedRead,
    };
  },
  computed: {
    university() {
      return this.$store.state.universities.university;
    },
  },
  created() {
    const uniId = this.$route.params.varsityId;
    this.$store.dispatch('universities/loadUni', uniId);
  },
  methods: {
    async addFaculty() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('faculties/add', [formData, this.$route.params.varsityId]);
    },
  },
};
</script>
