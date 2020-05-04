<template>
    <div class="container">
        <div class="py-2 text-center hero">
            <h1 class="font-weight-light">
                Blog
            </h1>
            <p class="text-muted py-2 lead">
                Become anything you can imagine
            </p>
        </div>
        <div class="py-4">
            <posts-index :posts="posts"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  created() {
    this.$store.dispatch('posts/loadPosts');
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    },
  },
  methods: {
  },
};
</script>
