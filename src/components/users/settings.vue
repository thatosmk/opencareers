<template>
    <div>
        <div class="py-2">
            <h4 class="text-center font-weight-light"
                v-if="user.full_name != null ">
                Hi, {{ user.full_name }}
            </h4>
            <h4 class="text-center font-weight-light"
                v-else>
                Hi, {{ user.email }}
            </h4>
        </div>
        <div class="canvas">
            <div class="row">
                <aside class="col-md-6">
                    <form @submit.prevent="updateUser" ref="form">
                        <div class="py-2">
                            <h4>Welcome to your settings page</h4>
                            <h6 class="pt-4">Profile Picture</h6>
                            <div class="row">
                                <div class="col-md-4">
                                    <user-avatar :user="user" />
                                </div>
                                <div class="col-md-8">
                                    <b-form-file
                                        name="user[avatar]"
                                        plain
                                        >
                                    </b-form-file>
                                </div>
                            </div>
                            <div class="w-50">
                                <h6 class="pt-4">Full Name</h6>
                                <b-form-input
                                    type="text"
                                    :value="user.full_name"
                                    name="user[full_name]"
                                    >
                                </b-form-input>
                                <h6 class="pt-4">Bio/Summary</h6>
                                <b-form-textarea
                                    rows="4"
                                    :value="user.bio"
                                    name="user[bio]"
                                    >
                                </b-form-textarea>
                                <h6 class="pt-4">Current Role</h6>
                            </div>
                            <b-button
                               type="submit"
                               variant="outline-dark"
                                >
                                Save
                            </b-button>
                        </div>
                    </form>
                    <div class="mt-4 jumbotron">
                    <h4> Mentorship preferences </h4>
                    <p class="font-weight-light lead">
                        Set the ground rules
                    </p>
                    <b-button
                        class="mt-4"
                        variant="primary"
                        >
                        Let us know what you are looking for
                    </b-button>
                    <form @submit.prevent="updateUser" ref="form">
                    </form>
                    </div>
                </aside>
                <aside class="col-md-6">
                    <div class="ml-2" v-if="user.account != null">
                        <form @submit.prevent="updateAccount" ref="formAccount">
                            <div class="w-50">
                                <h6 class="pt-4">Currently you are a <b-badge variant="primary">
                                        {{ user.account.role }}
                                        </b-badge>
                                </h6>
                                <b-form-select
                                    :options="roles"
                                    name="account[role]"
                                    >
                                </b-form-select>
                                <h6 class="pt-4">Date of birth</h6>
                                <b-form-input
                                    type="date"
                                    :value="user.account.dob"
                                    name="account[dob]"
                                    >
                                </b-form-input>
                                <h6 class="pt-4">Cellphone</h6>
                                <b-form-input
                                    type="text"
                                    :value="user.account.cell"
                                    name="account[cell]"
                                    >
                                </b-form-input>
                                <h6 class="pt-4">address</h6>
                                <b-form-input
                                    type="text"
                                    :value="user.account.address"
                                    name="account[address]"
                                    >
                                </b-form-input>
                                <h6 class="pt-4">What describes me best</h6>
                                <b-form-input
                                    type="text"
                                    :value="user.account.occupation"
                                    name="account[occupation]"
                                    >
                                </b-form-input>
                                <h6 class="pt-4">Industry</h6>
                                <b-form-input
                                    type="text"
                                    :value="user.account.industry"
                                    name="account[industry]"
                                    >
                                </b-form-input>
                                <h6 class="pt-4">Education</h6>
                                <b-form-input
                                    type="text"
                                    :value="user.account.institution"
                                    placeholder="Institution"
                                    name="account[institution]"
                                    >
                                </b-form-input>
                                <b-form-input
                                    type="text"
                                    class="my-4"
                                    :value="user.account.qualification"
                                    placeholder="Qualification"
                                    name="account[qualification]"
                                    >
                                </b-form-input>
                                <b-button
                                   type="submit"
                                   variant="outline-dark"
                                    >
                                    Save Account
                                </b-button>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                        <div class="mt-4 jumbotron">
                        <h4> Set up your account to get started </h4>
                        <router-link
                            class="btn btn-primary mt-4"
                            :to="{ path: 'onboarding' }"
                            >
                            Continue
                        </router-link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Settings',
  data() {
    return {
      roles: ['mentor', 'mentee'],
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
      this.$router.go(0);
    },
    async updateAccount() {
      const formData = new FormData(this.$refs.formAccount);
      this.$store.dispatch('users/updateAccount', [formData, this.user.account.id]);
      this.$router.go(0);
    },
  },
};
</script>
