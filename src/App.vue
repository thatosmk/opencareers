<template>
  <div id="app">
    <main class="container">
        <main-navbar/>
        <router-view/>
    </main>
    <footer>
        <div class="container">
            <div class="py-5">
                <p class="text-muted">
                    threaded &copy; All Rights Reserved 2020
                </p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.$store.dispatch('loadCareers');
  },
};
</script>
