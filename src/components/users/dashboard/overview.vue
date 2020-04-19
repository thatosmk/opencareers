<template>
    <div>
        <div class="mx-4">
            <h1 class="py-4">
                Hi {{ current_user.email }}
            </h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  computed: {
    current_user() {
      return this.$store.state.user;
    },
  },
};
</script>
