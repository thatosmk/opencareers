<template>
    <div>
        <h1 class="pb-5">
            Edit new article
        </h1>
        <div class="mx-5">
            <form @submit.prevent="articleCreate" ref="form">
                <b-form-input
                    type="text"
                    name="article[title]"
                    :value="article.title"
                    placeholder="add a title"
                    >
                </b-form-input>
                <div class="pt-4">
                <b-tabs content-class="mt-3">
                    <b-tab title="Write content">
                        <b-form-textarea
                            v-model="article.body"
                            :value="article.body"
                            class="my-4"
                            rows="10"
                            name="article[body]"
                            placeholder="add markdown text"
                            >
                        </b-form-textarea>
                    </b-tab>
                    <b-tab title="Preview">
                        <div v-html="previewBody" class="mx-5">
                            {{ previewBody }}
                        </div>
                    </b-tab>
                </b-tabs>
                </div>
                <b-button
                    type="submit"
                    block
                    variant="primary"
                    >
                    Create article
                </b-button>
            </form>
        </div>
    </div>
</template>
<script>
import marked from 'marked';
import hljs from 'highlight.js';

export default {
  computed: {
    previewBody() {
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
      return marked(this.article.body);
    },
    article() {
      return this.$store.state.articles.article;
    },
  },
  methods: {
    articleCreate() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('articles/updateArticle', [formData, this.$route.params.articleId]);
    },
  },
  created() {
    this.$store.dispatch('articles/loadArticle', this.$route.params.articleId);
  },
};
</script>
