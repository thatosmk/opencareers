<template>
    <div>
        <div class="py-2">
            <h1 class="text-center font-weight-light"
                v-if="user.full_name != null ">
                Hi, {{ user.full_name }}
            </h1>
            <h1 class="text-center font-weight-light"
                v-else>
                Hi, {{ user.email }}
            </h1>
        </div>
        <div class="py-2">
            <div class="row">
                <section class="col-xs-12 col-md-4">
                    <div v-if="user.avatar_url != null">
                        <b-img
                            style="height: 240px;"
                            :src="getImageUrl(user.avatar_url)"
                            >
                    </b-img>
                    </div>
                    <p class="py-4 lead">
                        {{ user.bio }}
                    </p>
                    <p class="py-2 lead">
                        Currently, you are a
                        <b-badge
                            class="p-2"
                            variant="primary">{{ user.role }}</b-badge>
                    </p>
                </section>
                <section class="col-xs-12 col-md-4">
                    <div class="py-2">
                        <h6 class="text-muted py-4">
                            Setup your account
                        </h6>
                        <b-button
                            class="px-5 py-2"
                            size="lg"
                            v-b-modal.modal-update-account
                            variant="primary"
                        >Get Started</b-button>
                    </div>
                </section>
            </div>
        </div>
        <div class="py-2">
            <h6 class="text-muted py-4">
                Update your account
                <hr/>
            </h6>
            <b-button
                class="px-5 py-2"
                size="sm"
                v-b-modal.modal-update-account
                variant="primary"
            >Make changes</b-button>
            <h6 class="text-muted pt-5">
                Change password
                <hr/>
            </h6>
            <p>
                coming soon
            </p>
        </div>
        <b-modal id="modal-update-account"
            centered
            title="Welcome to threaded"
            size="lg"
            hide-header
            hide-footer
        >
            <div class="py-2 text-center">
                <h2 class="pb-4">
                    Hi, {{ user.full_name }}
                </h2>
                <p>
                    Welcome to the threaded community
                </p>
            </div>
            <div class="mx-5 pb-5">
                <form @submit.prevent="updateUser" ref="form">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="py-2">
                                <b-form-group label="Full Name">
                                    <b-form-input
                                        type="text"
                                        placeholder="e.g. Erich Bachman"
                                        name="user[full_name]"
                                        class="py-2"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group label="Profile picture">
                                    <b-form-file
                                        name="user[avatar]"
                                        class="py-2"
                                    >
                                    </b-form-file>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="py-2">
                                <b-form-group label="choose what describes you best">
                                    <b-form-select
                                        :options="roles"
                                        name="user[role]"
                                        >
                                    </b-form-select>
                                </b-form-group>
                                <b-form-group label="Tell us a little about yourself">
                                    <b-form-textarea
                                        placeholder="(Enter brief bio)"
                                        debounce="300"
                                        size="lg"
                                        rows="8"
                                        name="user[bio]"
                                        >
                                    </b-form-textarea>
                                </b-form-group>
                                <b-button
                                    block
                                    @click="$bvModal.hide('modal-update-account')"
                                    type="submit"
                                    variant="success"
                                    >
                                    Update account
                                </b-button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>
<script>
export default {
  name: 'Settings',
  data() {
    return {
      roles: ['mentor', 'content curator'],
    };
  },
  computed: {
    user() {
      return this.$store.state.users.user;
    },
  },
  methods: {
    async updateUser() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('users/userUpdate', formData);
      this.$notify({
        group: 'alerts',
        title: 'Post successfully added',
        type: 'success',
        position: 'top center',
        text: 'Hello user! This is a notification!',
      });
    },
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
};
</script>
