<template>
    <div>
        <div class="py-5 ux_read">
            <div>
                <h1 class="text-center">
                    {{ career.title }}
                </h1>
                <p class="py-4 text-center">
                    <span class="badge badge-primary">
                        {{ career.industry }}
                    </span>
                </p>
                <p class="py-5">
                    {{ career.description }}
                </p>
                <p class="py-5">
                    {{ career.process }}
                </p>
            </div>
            <div class="py-4">
                <h4 class="text-muted">
                    For further information
                </h4>
                <p class="py-2">
                    {{ career.links }}
                </p>
            </div>
            <div class="py-4">
                <router-link
                    :to="{ name: 'home' }"
                    variant="light"
                >
                    Return to careers
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Career',
  computed: {
    career() {
      return this.$store.getters.career;
    },
  },
  created() {
    this.$store.dispatch('loadCareer');
  },
};
</script>
