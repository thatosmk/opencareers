<template>
    <div class="plabster_profile">
        <header>
        </header>
        <main class="container">
            <b-row>
                <div class="col-xs-12 col-md-8 col-lg-8">
                    <div class="main_content">
                        <div class="py-2 info_chunk">
                            <div class="row">
                                <div class="col-xs-12 col-md-8 col-lg-8">
                                    <div class="py-2">
                                        <h4>Mokgethwa Manaswe</h4>
                                        <p class="lead">
                                            Nail Stylist @ Joburg South # 4.9 (588) reviews
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-4 col-lg-4">
                                    <div class="py-2">
                                        <h6>Picture</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>About</h4>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>Promocodes/ Promotions</h4>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>Services</h4>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>Portfolio</h4>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>Accessibility</h4>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>Things to know</h4>
                            <div class="row">
                                <div class="col-xs-12 col-md-8 col-lg-8">
                                    <div class="py-2">
                                        <h6>House Rules</h6>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-4 col-lg-4">
                                    <div class="py-2">
                                        <h6>Cancellation Policy</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-top"></div>
                        <div class="py-2 info_chunk">
                            <h4>Reviews</h4>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4 col-lg-4">
                    <div class="booking_form">
                        <div class="py-4">
                            <h4>R 104
                                <span class="subtitle font-weight-light">
                                    / night
                                </span>
                            </h4>
                        </div>
                        <div class="py-2">
                        <form @submit.prevent="saveBooking" ref="form">
                            <b-form-group label="">
                                <b-form-datepicker
                                    size="lg"
                                    id="example-datepicker"
                                    name="booking[start_date]"
                                    hide-header="true"
                                    v-model="value"
                                    class="mb-2"
                                >
                                </b-form-datepicker>
                            </b-form-group>
                            <b-form-group label="">
                                    <b-form-timepicker
                                        size="lg"
                                        placeholder="What time"
                                        name="booking[start_time]"
                                        :minutes-step="30"
                                        locale="en"
                                    >
                                    </b-form-timepicker>
                            </b-form-group>
                            <b-form-group label="">
                                    <b-form-timepicker
                                        size="lg"
                                        placeholder="Until what time"
                                        name="booking[end_time]"
                                        :minutes-step="30"
                                        locale="en"
                                    >
                                    </b-form-timepicker>
                            </b-form-group>
                            <b-button-toolbar class="pt-4">
                                <b-button
                                    type="submit"
                                    class="mx-2 btn-block"
                                    variant="primary"
                                 >Reserve</b-button>
                            </b-button-toolbar>
                            <p class="lead text-center py-4">
                                You won't be charged yet
                            </p>
                        </form>
                        </div>
                    </div>
                </div>
            </b-row>
        </main>
    </div>
</template>
<script>
export default {
  name: 'PlabsterProfile',
  data() {
    return {
      value: '',
    };
  },
};
</script>
