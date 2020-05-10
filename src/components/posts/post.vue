<template>
    <div class="py-4 canvas">
        <div class="py-2 hero-post">
            <h3 class="font-weight-bold">
                {{ post.title }}
            </h3>
        </div>
        <div v-html="describe" class="marked-down py-2 position-relative post-wrapper">
            <p id="what" class="py-5">
                {{ describe }}
            </p>
        </div>
        <div class="post-wrapper">
            <div class="py-4">
                <add-comment :user="user" />
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
    user() {
      return this.$store.state.users.user;
    },
    comments() {
      return this.$store.state.posts.comments;
    },
    commentsCount() {
      return this.$store.state.posts.comments.length;
    },
    describe() {
      return marked(this.$store.state.posts.post.content);
    },
  },
  created() {
    const id = this.$router.currentRoute.params.postId;
    this.$store.dispatch('posts/loadPost', id);
    this.$store.dispatch('posts/loadComments', id);
  },
};
</script>
