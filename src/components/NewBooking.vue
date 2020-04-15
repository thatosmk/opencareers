<template>
    <div>
        <b-row class="py-5">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="py-5">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="booking-form">
                    <div class="py-4">
                        <h2 class="font-weight-bold">
                            Book today
                        </h2>
                    </div>
                    <div class="py-2">
                        <form @submit.prevent="saveBooking" ref="form">
                            <b-form-group label="">
                                <b-form-input
                                    class="form-control form-control-lg"
                                    name="booking[title]"
                                    placeholder="e.g. I need a photoshoot">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="">
                                <b-form-input type="text"
                                    class="form-control form-control-lg"
                                    placeholder="e.g. 45 Bree Street"
                                    name="booking[address]"
                                >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="">
                                <b-form-textarea
                                    id="textarea"
                                    name="booking[description]"
                                    placeholder="provide details"
                                    rows="4"
                                    class="form-control form-control-lg"
                                >
                                </b-form-textarea>
                            </b-form-group>
                            <b-form-group label="">
                                <b-form-datepicker
                                    id="example-datepicker"
                                    name="booking[start_date]"
                                    class="mb-2"
                                >
                                </b-form-datepicker>
                            </b-form-group>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <b-form-group label="">
                                            <b-form-timepicker
                                                placeholder="from what times"
                                                name="booking[start_time]"
                                                :minutes-step="30"
                                                locale="en"
                                            >
                                            </b-form-timepicker>
                                    </b-form-group>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <b-form-group label="">
                                            <b-form-timepicker
                                                placeholder="Until what times"
                                                name="booking[end_time]"
                                                :minutes-step="30"
                                                locale="en"
                                            >
                                            </b-form-timepicker>
                                    </b-form-group>
                                </div>
                            </div>
                            <div class="py-4"></div>
                            <b-button-toolbar>
                                <b-button
                                    type="submit"
                                    size="lg"
                                    class="mx-2"
                                    variant="success"
                                 >Submit Booking</b-button>
                                <b-button
                                    type="button"
                                    class="mx-2"
                                    variant="danger"
                                >Cancel</b-button>
                            </b-button-toolbar>
                        </form>
                    </div>
                </div>
            </div>
        </b-row>
    </div>
</template>

<script>
import store from '../store/index';

export default {
  name: 'NewBooking',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    async saveBooking() {
      const formData = new FormData(this.$refs.form);
      store.dispatch('createBooking', formData);
      this.$router.push('/');
      // navigate to new route
      // query the new booking and navigate to it.
      // this.$router.push({ name: 'home'});
    },
  },
};
</script>
