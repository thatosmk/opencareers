<template>
    <div class="py-4 canvas">
        <div class="hero-post">
            <span class="subtitle text-sm">
                <p>
                {{ comments.length }} responses
                </p>
            </span>
            <h4 class="font-weight-bold">
                {{ checkIn.title }}
            </h4>
            <p>
                {{ checkIn.description }}
            </p>
        </div>
        <div class="post-wrapper">
            <div class="py-4">
                <form @submit.prevent="addComment" ref="form">
                        <b-input-group size="lg">
                            <b-input-group-prepend>
                                <b-img
                                    class="rounded mx-4"
                                    style="height: 80px;"
                                    :src="getImageUrl(user.avatar_url)"
                                >
                                </b-img>
                            </b-input-group-prepend>
                            <b-form-textarea
                                size="lg"
                                rows="1"
                                class="form-control"
                                placeholder="Add your answer..."
                                name="comment[body]"
                            >
                            </b-form-textarea>
                            <b-input-group-append>
                                <b-button
                                    type="submit"
                                    variant="success"
                                    >
                                    reply
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                </form>
            </div>
            <div class="py-2">
                <div
                    v-for="comment in comments"
                    :key="comment.id"
                    class="py-2 w-75">
                    <div class="row">
                        <div class="col-xs-4 col-md-2">
                            <div class="py-2">
                                <b-img
                                    class="rounded-circle"
                                    style="height: 60px;"
                                    :src="getImageUrl(comment.user.avatar_url)"
                                >
                                </b-img>
                            </div>
                        </div>
                        <div class="col-xs-8 col-md-10">
                            <h6>
                                {{ comment.user.full_name }}
                            </h6>
                            <p class="py-2">
                                {{ new Date(comment.created_at) | moment   }}
                            </p>
                            <p class="py-2">
                                {{ comment.body }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Post',
  computed: {
    checkIn() {
      return this.$store.state.dashboard.checkIn;
    },
    comments() {
      return this.$store.state.dashboard.checkIn.comments;
    },
    user() {
      return this.$store.state.users.user;
    },
  },
  created() {
    const id = this.$router.currentRoute.params.checkInId;
    this.$store.dispatch('dashboard/loadCheckIn', id);
  },
  methods: {
    async addComment() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('dashboard/createComment', [formData, this.checkIn.id]);
      this.$router.go(0);
    },
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
  filters: {
    moment(date) {
      return moment(date).format('MMMM Do YYYY, h:mm a');
    },
  },
};
</script>
