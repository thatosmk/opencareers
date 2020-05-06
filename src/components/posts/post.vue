<template>
    <div class="py-2">
        <div class="py-2 text-center hero-post">
            <h1 class="font-weight-light">
                {{ post.title }}
            </h1>
        </div>
        <div v-html="describe" class="marked-down py-5 position-relative post-wrapper">
            <p id="what" class="py-5">
                {{ describe }}
            </p>
        </div>
        <div class="post-wrapper">
            <div class="py-4">
                <h4 class="font-weight-light">
                    add a comment
                </h4>
                <form @submit.prevent="addComment" ref="form">
                        <b-input-group size="lg">
                            <b-form-textarea
                                size="lg"
                                placeholder="type something"
                                name="comment[body]"
                            >
                            </b-form-textarea>
                            <b-input-group-append>
                                <b-button
                                    size="lg"
                                    variant="success"
                                    type="submit"
                                >
                                    Submit
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                </form>
            </div>
            <div class="py-2">
                <h4 class="font-weight-light">
                    {{ commentsCount }} Comments
                </h4>
                <div
                    v-for="comment in comments"
                    :key="comment.id"
                    class="py-2 w-75">
                    <div class="row">
                        <div class="col-xs-4 col-md-2">
                        </div>
                        <div class="col-xs-8 col-md-10">
                            <p class="py-2">
                                {{ comment.body }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                <router-link
                    class="btn btn-primary"
                    :to="{ name: 'blog' }"
                    >
                    Return to blog
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import marked from 'marked';

export default {
  name: 'Post',
  computed: {
    post() {
      return this.$store.state.posts.post;
    },
    describe() {
      return marked(this.$store.state.posts.post.content);
    },
    comments() {
      return this.$store.state.posts.comments;
    },
    commentsCount() {
      return this.$store.state.posts.comments.length;
    },
  },
  created() {
    const id = this.$router.currentRoute.params.postId;
    this.$store.dispatch('posts/loadPost', id);
    this.$store.dispatch('posts/loadComments', id);
  },
  filters: {
    marked,
  },
  methods: {
    async addComment() {
      const formData = new FormData(this.$refs.form);
      const id = this.$route.params.postId;
      this.$store.dispatch('posts/createComment', [formData, id]);
    },
  },
};
</script>
