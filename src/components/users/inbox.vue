<template>
    <div>
        <div class="py-2">
            <h4 class="text-center font-weight-light">
                inbox
            </h4>
        </div>
        <div class="canvas">
            <div v-if="conversationsCount > 0">
                <div class="row">
                    <aside class="col-md-4 col-lg-4">
                        <b-card
                        v-for="chat in conversations" :key="chat.id"
                            no-body
                            class="overflow-hidden"
                            style="border:none;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <user-avatar :user="chat.recipient"/>
                                </b-col>
                                <b-col md="8">
                                <b-card-body
                                title="">
                                <router-link
                                :to="{ name: 'conversation', params: { conversationId: chat.id }}"
                                    >
                                    <b-card-text>
                                        {{ chat.recipient.full_name }}
                                    </b-card-text>
                                </router-link>
                                <p class="py-2 text-muted">
                                    {{ chat.messages.length }} messages
                                </p>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                        </b-card>
                    </aside>
                    <main class="col-md-8 col-md-8">
                        <router-view />
                    </main>
                </div>
            </div>
            <div v-else>
                <h4 class="text-center font-weight-light">
                    Nothing here yet
                </h4>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Inbox',
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    conversations() {
      return this.$store.state.users.conversations;
    },
    conversationsCount() {
      return this.$store.state.users.conversations.length;
    },
  },
  created() {
    this.$store.dispatch('users/userConversations');
  },
};
</script>
