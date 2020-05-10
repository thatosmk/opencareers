<template>
    <div class="container">
        <div class="py-4">
            <router-view />
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
  watch: {
    $route(newVal) {
      this.showModal = newVal.meta && newVal.meta.showModal;
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
