<template>
    <div>
        <div class="py-2">
            <h4 class="text-center font-weight-light">
                We have come up with tools to help you get started
            </h4>
        </div>
        <div class="py-2 canvas">
            <div class="row">
                <section class="col-xs-12 col-md-4">
                    <div
                        v-if="user.role === 'mentor'">
                        <h2>
                            Your mentees
                        </h2>
                    </div>
                </section>
                <section class="col-xs-12 col-md-8">
                    <div class="py-2">
                        <user-mentees :mentees="mentees" />
                    </div>
                </section>
            </div>
            <div class="row">
                <section class="col-xs-12 col-md-4">
                    <div
                        v-if="user.role === 'mentor'">
                        <h2>
                            Your posts
                        </h2>
                    </div>
                </section>
                <section class="col-xs-12 col-md-4">
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Settings',
  data() {
    return {
      roles: ['mentor', 'content curator'],
    };
  },
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
  },
  methods: {
    async updateUser() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/userUpdate', formData);
      this.$notify({
        group: 'alerts',
        title: 'Post successfully added',
        type: 'success',
        position: 'top center',
        text: 'Hello user! This is a notification!',
      });
    },
  },
};
</script>
