<template>
    <div class="container">
        <div class="py-4 ap">
            <div class="py-2 text-center">
                <h1 class="font-weight-light">
                    Our blog
                </h1>
                <p class="text-muted py-4 lead">
                    We write about things that matter to us. On this blog we also
                    present things that we are working on and any recent news.
                </p>
            </div>
        </div>
        <div class="py-4">
            <div class="articles_index">
                <div class="my-4"
                    v-for="article in articles" :key="article.id">
                    <router-link
                        :to="{ name: 'article', params: { articleId: article.slug }}"
                        >
                        <h4 class="py-2">{{ article.title }}</h4>
                    </router-link>
                    <p class="article-date pb-5">
                        <span>
                            a {{ article.reading_time }} read
                        </span>
                        <span>
                            {{ article.created }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  computed: {
    articles() {
      return this.$store.state.articles.all;
    },
  },
  created() {
    this.$store.dispatch('articles/loadArticles');
  },
};
</script>
