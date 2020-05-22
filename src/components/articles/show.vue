<template>
    <div class="ap">
        <div class="pt-5">
            <h1 class="text-center">{{ article.title }}</h1>
            <p class="text-muted">
                {{ article.reading_time }} read -
                {{ article.created }}
            </p>
        </div>
        <div v-html="content" class="mx-5 pt-5">
            <p>
                {{ content }}
            </p>
        </div>

        <div
            v-if="admin"
            >
            <router-link
                :to="{ name: 'edit_article', params: { articleId: article.slug }}"
                class="btn btn-primary"
                >
                Edit this article
            </router-link>
            <b-button
                @click="deleteArticle"
                variant="danger"
                class="mx-4"
                >
                Delete this article
            </b-button>
        </div>
    </div>
</template>
<script>
import marked from 'marked';
import hljs from 'highlight.js';

export default {
  computed: {
    admin() {
      return this.$cookies.isKey('admin-token');
    },
    content() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight(code, language) {
          const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
          return hljs.highlight(validLanguage, code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      return marked(this.$store.state.articles.article.body);
    },
    article() {
      return this.$store.state.articles.article;
    },
  },
  created() {
    this.$store.dispatch('articles/loadArticle', this.$route.params.articleId);
  },
  methods: {
    async deleteArticle() {
      this.$store.dispatch('articles/deleteArticle', this.$route.params.articleId);
      this.$router.go(-1);
    },
  },
};
</script>
