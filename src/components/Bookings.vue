<template>
    <div class="container">
        <div class="py-5">
            <h1>
                Your Bookings
            </h1>
            <b-alert :show="loading" variant="info">Loading...</b-alert>
        </div>
        <vc-calendar
            :attributes='attributes' title-position="left" is-expanded/>
        <div class="py-4">
            <b-card v-for="booking in bookings.data" :key="booking.id"
                    :title="booking.attributes.title">
                <b-card-text>
                    {{ booking.attributes.description }}
                </b-card-text>
                <b-card-body>
                    <b-button
                        variant="primary" href="#" @click.prevent="populateBookingToEdit(booking)">
                        Confirm Booking
                    </b-button>
                    <a class="card-link" href="#" @click.prevent="deleteBooking(booking.id)">
                        Reject Booking
                    </a>
                </b-card-body>
            </b-card>
        </div>
        <div class="py-2">
            <h2>Make a new booking</h2>
            <hr />
            <div class="py-4">
                <b-card
                    :title="(model.id ? 'Edit Booking ' + model.title : 'New Booking')">
                    <form @submit.prevent="saveBooking">
                        <b-form-group label="title">
                            <b-form-input type="text" v-model="model.title"></b-form-input>
                        </b-form-group>
                        <b-form-group label="description">
                            <b-form-input type="text" v-model="model.description"></b-form-input>
                        </b-form-group>
                        <b-form-group label="When are you booking for?">
                            <b-form-input type="text" v-model="model.when">
                            <v-date-picker
                                v-model="date"
                                  :popover="{ placement: 'bottom', visibility: 'click' }">
                                <button class="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded
                                    focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        class="w-4 h-4 fill-current">
                                        <path
                                        d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2
                                           2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2
                                           2v12h14V6H3zm2-6h2v2H5V0zm8
                                           0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0
                                           4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />
                                   </svg>
                                </button>
                            </v-date-picker>
                            </b-form-input>
                        </b-form-group>
                    <b-card-body>
                        <b-btn type="submit" variant="success">Submit Booking</b-btn>
                    </b-card-body>
                    </form>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VCalendar from 'v-calendar';
import api from '@/api';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
  datePicker: {},
});

export default {
  data() {
    return {
      loading: false,
      bookings: [],
      model: {},
    };
  },
  async created() {
    this.refreshBookings();
  },
  methods: {
    async refreshBookings() {
      this.loading = true;
      this.bookings = await api.getBookings();
      this.loading = false;
    },
    async populateBookingToEdit(booking) {
      this.model = Object.assign({}, booking);
    },
    async saveBooking() {
      if (this.model.id) {
        await api.updateBooking(this.model.id, this.model);
      } else {
        await api.createBooking(this.model);
      }
    },
    async deleteBooking(id) {
      if (this.model.id === id) {
        this.model = {};
      }
      await api.deleteBooking(id);
      await this.refreshBookings();
    },
  },
};
</script>
