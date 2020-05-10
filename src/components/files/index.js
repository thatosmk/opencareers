import Vue from 'vue';

Vue.component('add-doc', {
  template: `
    <div>
        <b-modal id="modal-add-doc"
            centered
            title="Add a few docs"
            size="lg"
            hide-header
            hide-footer
        >
            <div class="py-2 text-center">
                <h2 class="pb-4">
                    Add a few docs
                </h2>
            </div>
            <div class="mx-5 pb-5">
                <form @submit.prevent="addDoc" ref="form">
                    <b-form-group>
                        <b-form-file
                        size="lg"
                        placeholder=" drop them here..."
                        id="file-input"
                        multiple
                        required
                        accept=".jpg, .png, .jpeg, .gif, .pdf, .doc, .docx"
                        name="doc[files]"
                        class="py-2"
                        >
                        </b-form-file>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                            required
                            type="text"
                            placeholder="e.g. essay writting guidelines"
                            size="lg"
                            name="doc[title]"
                            class="py-4"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea
                            placeholder="description"
                            debounce="300"
                            size="lg"
                            rows="6"
                            name="doc[description]"
                            class="py-2"
                        >
                        </b-form-textarea>
                    </b-form-group>
                    <b-button
                        variant="success"
                        @click="$bvModal.hide('modal-add-doc')"
                        type="submit"
                        size="lg"
                    >
                        Submit
                    </b-button>
                </form>
            </div>
        </b-modal>
    </div>
  `,
  methods: {
    async addDoc() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('files/add', formData);
      this.$router.push('/users/dashboard');
    },
  },
});

Vue.component('docs-index', {
  props: ['docs'],
  template: `
    <div class="py-4">
    <b-card-group columns>
        <b-card
            v-for="doc in docs" 
            :key="doc.id"
            :title="doc.title"
            class="shadow"
        >
            <b-card-text>
                {{ doc.description }}
            </b-card-text>
        </b-card>
    </b-card-group>
    </div>
  `,
  methods: {
    getImageUrl(imageId) {
      return `https://api.threaded.co.za/${imageId}`;
    },
  },
});
