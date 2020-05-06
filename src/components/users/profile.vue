<template>
    <div class="py-2">
        <div class="py-2 hero-post">
            <div class="card card-profile">
                <h1 class="text-center font-weight-light">
                    Hi, {{ user.full_name }}
                </h1>
                <p class="py-4 lead">
                    {{ user.bio }}
                </p>
                <p class="py-2 lead">
                    Currently, you are a
                    <b-badge
                        class="p-2"
                        variant="primary">{{ user.role }}</b-badge>
                </p>
                <div class="py-2" v-if="user.role == null" >
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
                <div class="py-2" v-else>
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
                        size="xl"
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
                            <div class="row">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-6">
                            <form @submit.prevent="updateUser" ref="form">
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
                            </form>
                                </div>
                                <div class="col-md-3">
                                </div>
                            </div>
                        </div>
                    </b-modal>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Show',
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
  created() {
    this.$store.dispatch('users/userShow');
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
  },
};
</script>
