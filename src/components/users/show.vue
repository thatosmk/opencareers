<template>
    <div>
        <div class="py-5">
            <div class="row">
                <aside class="col-xs-12 col-md-3 col-lg-3">
                    <div class="py-2 position-fixed">
                        <b-img
                            class="rounded mx-4"
                            style="height: 120px;"
                            :src="getImageUrl(user.avatar_url)"
                        >
                        </b-img>
                    </div>
                </aside>
                <main class="col-xs-12 col-md-9 col-lg-9">
                    <div class="position-relative">
                        <div class="py-2">
                            <h4>
                                {{ user.full_name }}
                            </h4>
                            <p class="lead py-4">
                                {{ user.bio }}
                            </p>
                        </div>
                    </div>
                </main>
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
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
  created() {
    const id = this.$route.params.userId;
    this.$store.dispatch('users/getUser', id);
  },
};
</script>
