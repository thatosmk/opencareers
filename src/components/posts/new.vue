<template>
    <div>
        <div class="py-5">
            <form @submit.prevent="addPost" ref="form">
                <div class="py-2">
                    <b-form-group>
                        <b-form-input
                            size="lg"
                            placeholder="title"
                            name="post[title]"
                        >
                        </b-form-input>
                    </b-form-group>
                </div>
                <div>
                    <b-input-group size="lg">
                        <b-form-input
                            size="lg"
                            placeholder="add tags"
                            name="post[tags]"
                        >
                        </b-form-input>
                        <b-input-group-append class="image-upload">
                            <label for="file-input">
                                <b-icon-image
                                    font-scale="2.5"
                                    >
                                </b-icon-image>
                            </label>
                            <input
                                size="lg"
                                id="file-input"
                                name="post[avatar]"
                                class="py-2"
                                type="file"
                            />
                        </b-input-group-append>
                    </b-input-group>
                </div>
                <div class="py-2">
                    <b-form-group>
                        <b-form-textarea
                            placeholder="(Enter markdown content)"
                            debounce="300"
                            size="lg"
                            rows="14"
                            name="post[content]"
                            class="py-2"
                        >
                        </b-form-textarea>
                    </b-form-group>
                </div>
                <b-button
                    block
                    variant="success"
                    type="submit"
                >
                    Submit
                </b-button>
            </form>
        </div>
    </div>
</template>
<script>
import marked from 'marked';

export default {
  name: 'NewPost',
  data() {
    return {
      post: {},
      options: {
        indentUnit: 2,
      },
    };
  },
  computed: {
  },
  methods: {
    async addPost() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('posts/createPost', formData);
      this.$router.push('/blog');
      this.$notify({
        group: 'alerts',
        title: 'Post successfully added',
        type: 'success',
        position: 'top center',
        text: 'Hello user! This is a notification!',
      });
    },
  },
  filters: {
    marked,
  },
};
</script>
