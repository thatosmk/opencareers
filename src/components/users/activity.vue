<template>
    <div>
        <div class="py-2">
            <h4 class="text-center font-weight-light">
                Feed
            </h4>
        </div>
        <div class="py-2 canvas">
            <div class="feed__index">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Feed',
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('posts/loadPosts');
  },
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    posts() {
      return this.$store.state.posts.all;
    },
  },
  methods: {
  },
};
</script>
