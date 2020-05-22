<template>
    <div class="container">
        <div class="py-2 text-center hero">
            <h1 class="font-weight-light">
                We are launching in July 2020! -
                be one of the early users
            </h1>
            <p class="lead text-muted py-4 mx-5">
                If you are in interesting in sharing your experiences
                or if you need a mentor, we'd love to you to try threaded.
            </p>
        </div>
        <div class="py-4 mx-5">
            <form @submit.prevent="betaSignup">
                <h3>Sign up as
                    <b-badge variant="warning">required</b-badge>
                </h3>
                <b-form-group>
                    <b-form-radio-group
                        id="checkbox-1"
                        v-model="selected"
                        size="lg"
                        class="py-2"
                        :options="roles"
                        name="beta_signup[role]"
                        required
                    >
                    </b-form-radio-group>
                </b-form-group>
                <h3 class="py-4">What's your email address
                    <b-badge variant="warning">required</b-badge>
                </h3>
                <b-form-input
                    type="email"
                    placeholder="email address"
                    name="beta_signup[email]"
                    size="lg"
                    >
                </b-form-input>
                <h3 class="py-4">Anything you want to add?
                    <b-badge variant="info">optional</b-badge>
                </h3>
                <b-form-textarea
                    placeholder="What do you think about threaded?"
                    name="beta_signup[content]"
                    rows="8"
                    size="lg"
                    >
                </b-form-textarea>
                <b-button
                    variant="primary"
                    size="lg"
                    class="py-4 px-5 my-5"
                    >
                    Send me link when this app is ready
                </b-button>
            </form>
        </div>
        <div class="py-4 text-center">
            <p style="margin: 0.25px 30%;">
                We’ll only use your email address to send an
                invite to Threaded, not for future marketing, sales, or anything
                like that. We’ll never sell or trade your name
                or email. In fact, the list will be destroyed once
                everyone on the list has been invited.
                <br/>
                <br/>
                *We’ll send you an email back asking your
                permission before using your information for anything
                other than what has been advertised above. Promise.
            </p>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      selected: 'mentee',
      roles: [
        { text: 'mentor', value: 'mentor' },
        { text: 'mentee', value: 'mentee' },
      ],
    };
  },
  name: 'GetStarted',
};
</script>
