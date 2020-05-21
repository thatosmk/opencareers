<template>
    <div>
        <div class="py-5 canvas">
            <div class="row">
                <aside class="col-xs-12 col-md-3 col-lg-3">
                    <div class="py-2 position-fixed">
                        <b-img
                            class="rounded mx-4"
                            style="height: 120px;"
                            :src="getImageUrl(mentor.avatar_url)"
                        >
                        </b-img>
                    </div>
                </aside>
                <main class="col-xs-12 col-md-9 col-lg-9">
                    <div class="position-relative">
                        <div class="py-2">
                            <h4>
                                {{ mentor.full_name }}
                            </h4>
                            <p class="lead py-4">
                                {{ mentor.bio }}
                            </p>
                            <b-button
                                variant="primary"
                                class="mx-2"
                                >
                                Choose me as your mentor
                            </b-button>
                            <b-button
                                v-b-modal.modal-send-message
                                variant="danger"
                                class="mx-2"
                                >
                                Ask me something
                            </b-button>
                        </div>
                        <div class="py-3" v-if="mentor.account != null">
                            <h3>Education</h3>
                            <hr/>
                            <p>
                                {{ mentor.account.education }}
                            </p>
                        </div>
                        <div class="py-3" v-if="mentor.account != null">
                            <h3>Who I'd like to mentor</h3>
                            <hr/>
                            <p>
                                {{ mentor.account.education }}
                            </p>
                        </div>
                    </div>
                </main>
                    <b-modal id="modal-send-message"
                        centered
                        title="Send A message"
                        size="lg"
                        hide-header
                        hide-footer
                    >
                        <div class="py-2 text-center">
                            <h2 class="pb-4">
                                Send a message to {{ mentor.full_name }}
                            </h2>
                        </div>
                        <div class="mx-5 pb-5">
                            <form @submit.prevent="send" ref="form">
                                <b-form-textarea
                                    name="message[body]"
                                    placeholder="type message..."
                                    >
                                </b-form-textarea>
                                <b-form-input
                                    type="text"
                                    name="message[recipient_id]"
                                    :value="mentor.id"
                                    hidden
                                    >
                                </b-form-input>
                                <b-form-input
                                    type="text"
                                    name="conversation[recipient_id]"
                                    :value="mentor.id"
                                    hidden
                                    >
                                </b-form-input>
                                <b-button
                                    class="mt-4"
                                    type="submit"
                                    variant="primary"
                                    @click="$bvModal.hide('modal-send-message')"
                                    block
                                    >
                                    Send message
                                </b-button>
                            </form>
                        </div>
                    </b-modal>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    mentor() {
      return this.$store.state.users.mentor;
    },
    conversation() {
      return this.$store.state.users.mentor;
    },
  },
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
    async send() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/createConversation', formData)
        .then((data) => {
          this.$store.dispatch('users/sendMessage', [formData, data.id]);
          this.$router.push(0);
        })
        .catch();
    },
  },
  created() {
    const id = this.$route.params.userId;
    this.$store.dispatch('users/getUser', id);
  },
};
</script>
