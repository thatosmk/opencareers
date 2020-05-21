<template>
    <div>
        <div class="py-2 canvas">
            <div class="py-2" style="position: sticky;">
                <div class="row">
                    <h4
                        v-if="conversation.recipient.id == user.id"
                        >
                            #{{ conversation.user.full_name }}
                    </h4>
                    <h4
                        v-else
                        >
                            #{{ conversation.recipient.full_name }}
                    </h4>
                    <router-link
                        class="btn btn-primary ml-4"
                        :to="{ name: 'user', params: { userId: conversation.user.slug }}"
                        >
                        View user
                    </router-link>
                    <form
                v-if="user.role === 'mentor' && conversation.recipient.mentor_id !== user.id"
                        ref="menteeForm" @submit.prevent="assign" inline>
                        <b-form-input
                            type="text"
                            name="mentee_id"
                            :value="conversation.user.id"
                            hidden
                            >
                            </b-form-input>
                        <b-button
                            class="btn btn-secondary ml-4"
                            type="submit">
                        Confirm as mentee
                        </b-button>
                    </form>
                </div>
                <p class="py-2">
                    {{ conversation.messages.length }} messages
                </p>
            </div>
            <div style="min-height: 30vh;">
                <div v-for="msg in conversation.messages" :key="msg.id">
                    <div v-if="msg.sender_id == user.id" class="send_msg">
                        <p class="my-4">
                            {{ msg.body }}
                        </p>
                    </div>
                    <div v-else class="receive_msg">
                        <p class="my-2">
                            {{ msg.body }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="sticky-bottom">
                <form @submit.prevent="addMessage" ref="form">
                    <b-form-input
                        type="text"
                        name="message[read]"
                        value="false"
                        hidden
                        >
                    </b-form-input>
                    <b-form-input
                        type="text"
                        name="message[recipient_id]"
                        :value="conversation.recipient_id"
                        hidden
                        >
                    </b-form-input>
                    <b-form-input
                        type="text"
                        hidden
                        :value="conversation.user_id"
                        name="message[sender_id]"
                        >
                    </b-form-input>

                    <b-input-group>
                        <b-form-textarea
                            size="lg"
                            rows="2"
                            class="rounded"
                            placeholder="type something"
                            name="message[body]"
                        >
                        </b-form-textarea>

                        <b-input-group-append>
                            <b-button
                                variant="success"
                                type="submit"
                                >
                                send message
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Inbox',
  computed: {
    conversation() {
      return this.$store.state.users.conversation;
    },
    user() {
      return this.$store.state.users.user;
    },
  },
  methods: {
    async assign() {
      const formData = new FormData(this.$refs.menteeForm);
      this.$store.dispatch('users/acceptMentee', formData);
      this.$router.go(0);
    },
    async addMessage() {
      const formData = new FormData(this.$refs.form);
      const id = this.$route.params.conversationId;
      this.$store.dispatch('users/sendMessage', [formData, id]);
    },
  },
  created() {
    const id = this.$route.params.conversationId;
    this.$store.dispatch('users/userConversation', id);
  },
};
</script>
