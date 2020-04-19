<template>
    <div>
        <div class="mx-4">
            <h1 class="py-4">
                dashboard#bookings
            </h1>
        </div>
        <b-card
            title="Your Bookings"
            class="mx-4">
            <b-card-text>
                {{ bookingsCount }} bookings
            </b-card-text>
            <b-table-simple :items="bookings">
            </b-table-simple>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  created() {
    this.$store.dispatch('loadBookings');
  },
  computed: {
    bookings() {
      return this.$store.state.bookings;
    },
    bookingsCount() {
      return this.$store.state.bookings.length;
    },
  },
};
</script>
