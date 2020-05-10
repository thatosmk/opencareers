<template>
    <div>
        <div>
            <h1 class="text-center font-weight-light">
                Docs &amp; Files
            </h1>
        </div>
        <div class="py-4">
            <h4>
                <span class="mr-auto">
                    Recently added
                </span>
                <b-button
                    class="ml-auto"
                    v-b-modal.modal-add-doc
                    variant="light"
                >add new</b-button>
            </h4>
            <docs-index :docs="docs" />
            <add-doc />
        </div>
    </div>
</template>
<script>
import '@/components/files/index';

export default {
  name: 'Files',
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    docs() {
      return this.$store.state.files.all;
    },
  },
  created() {
    this.$store.dispatch('files/loadDocs');
  },
};
</script>
