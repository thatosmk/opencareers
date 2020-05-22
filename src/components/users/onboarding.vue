<template>
    <div class="pt-5">
        <div class="container">
            <div class="text-center text-dark">
                <h2 class="pb-2 font-weight-light">
                    Welcome to Threaded
                </h2>
                <p>
                    Let's get you set up quick.
                    Enter the following details about yourself.
                </p>
            </div>
            <div class="oc">
                <form @submit.prevent="update" ref="accountForm">
                    <!-- Control buttons-->
                    <div class="form-first" v-if="currentStep == 1">
                        <div class="mx-2">
                            <b-form-group label="How will you use Threaded?">
                                <b-form-radio-group
                                    id="checkbox-1"
                                    v-model="selectedRole"
                                    size="lg"
                                    class="py-2"
                                    :options="roles"
                                    name="account[role]"
                                >
                                </b-form-radio-group>
                            </b-form-group>
                            <b-form-group label="Date of birth">
                                <b-form-input
                                    type="date"
                                    v-model="dob"
                                    size="lg"
                                    name="account[dob]"
                                    placeholder="e.g. 11/12/2009"
                                    required
                                    >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Enter your cellphone">
                                <b-form-input
                                    size="lg"
                                    v-model="cell"
                                    name="account[cell]"
                                    placeholder="cellphone number"
                                    required
                                    >
                                </b-form-input>
                            </b-form-group>
                            <b-button
                                v-if="cell != null && dob != null"
                                size="lg"
                                class="mt-5"
                                variant="primary"
                                type="submit"
                                >
                                Continue as {{ selectedRole }}
                            </b-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  computed: {
    user() {
      return this.$store.state.users.user;
    },
  },
  data() {
    return {
      currentStep: 1,
      selected: 'radio-yes',
      selectedRole: 'mentor',
      dob: null,
      cell: null,
      roles: [
        { text: 'I want to mentor', value: 'mentor' },
        { text: 'Looking for a mentor', value: 'mentee' },
      ],
      options: [
        { text: 'Yes', value: 'radio-yes' },
        { text: 'No', value: 'radio-no' },
      ],
      tabIndex: 0,
      step2: true,
      step3: true,
      step4: true,
    };
  },
  methods: {
    async update() {
      const formData = new FormData(this.$refs.accountForm);
      this.$store.dispatch('users/createAccount', formData);
      this.$router.push('/users/dashboard');
    },
  },
};
</script>
