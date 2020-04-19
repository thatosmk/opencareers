<template>
  <div>
    <div id="app" v-if="user">
        <div class="row">
            <section class="col-md-3 col-lg-2 col-xl-2 sidebar">
                <div class="py-5 mx-2">
                    <div class="ml-auto">
                    <b-sidebar
                        class="bg-dark"
                        id="sidebar-no-header"
                        aria-labelledby="sidebar-no-header-title"
                        no-header shadow visible
                    >
                        <template v-slot:default="{ hide }">
                            <div class="p-4 text-center">
                                <h4 id="sidebar-no-header-title py-5">User Dashboard sidebar</h4>
                                <nav class="mb-3 py-5">
                                    <b-nav vertical>
                                        <b-nav-item active href="/user/user-bookings">Bookings
                                        </b-nav-item>
                                        <b-nav-item href="#">Payments
                                        </b-nav-item>
                                        <b-nav-item href="#">Settings
                                        </b-nav-item>
                                    </b-nav>
                                </nav>
                            </div>
                        </template>
                    </b-sidebar>
                    </div>
                </div>
            </section>
            <section class="col-md-9 col-lg-10 col-xl-10 main-wrapper">
                <div class="py-2">
                    <!-- navbar -->
                    <nav id="nav">
                        <b-navbar toggleable="lg" type="light" variant="light">
                            <div class="container-fluid">
                                <b-navbar-toggle target="nav-collapse">
                                </b-navbar-toggle>
                                <b-collapse id="nav-collapse" is-nav>
                                    <!-- Left aligned nav items -->
                                    <b-navbar-nav class="mr-auto">
                                        <b-button
                                            href="/user/user-dashboard"
                                            class="d-md-none d-block"
                                        >Toggle Sidebar</b-button>
                                        <b-nav-item
                                            :to="{path: 'get-started' }"
                                            class="active"
                                        >bach to dashboard
                                        </b-nav-item>
                                    </b-navbar-nav>
                                    <b-navbar-nav class="ml-auto pr-5">
                                        <b-nav-item
                                            :to="{path: 'get-started' }"
                                            class="active"
                                        >Log out
                                        </b-nav-item>
                                    </b-navbar-nav>
                                </b-collapse>
                            </div>
                        </b-navbar>
                    </nav>
                    <main>
                        <router-view/>
                    </main>
                </div>
            </section>
        </div>
    </div>
    <div id="app" v-else-if="plabster">
        <main>
            <router-view/>
        </main>
    </div>
    <div id="app" v-else>
        <nav id="nav">
            <b-navbar toggleable="lg" type="light" variant="light">
               <div class="container">
                <b-navbar-brand href="/" class="font-weight-bold">plab</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Center aligned nav items -->
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item :to="{path: 'home' }">
                           Blog
                        </b-nav-item>
                        <b-nav-item :to="{path: 'about' }">
                            About
                        </b-nav-item>
                        <b-nav-item :to="{path: 'about' }">
                            Help
                        </b-nav-item>
                        <b-nav-item-dropdown text="Resources" right>
                        <b-dropdown-item
                            href="/user/user-dashboard">User Dashboard</b-dropdown-item>
                        <b-dropdown-item
                            href="/plabster/plabster-dashboard">Plabster Dashboard</b-dropdown-item>
                        <b-dropdown-item
                            href="/plabster/plabster-profile">Plabster Profile</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-form>
                            <label class="sr-only" for="inline-form-input-search">Username</label>
                            <b-input-group prepend="search" class="mb-2 mr-sm-2 mb-sm-0">
                                <b-input id="inline-form-input-search"
                                    placeholder="Find a plabster...">
                                </b-input>
                            </b-input-group>
                        </b-form>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item :to="{path: 'login' }">
                            Log in
                        </b-nav-item>
                        <b-nav-item :to="{path: 'get-started' }" class="active">
                            Get Started
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
                </div>
            </b-navbar>
        </nav>
        <!-- routes will be rendered here -->
        <main class="container">
            <router-view/>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="py-4">
                            <h2 class="font-weight-bold">
                                plab
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="py-4">
                                    <h6 class="">
                                        Products
                                    </h6>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="py-4">
                                    <h6 class="">
                                        Company
                                    </h6>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="py-4">
                                    <h6 class="">
                                        Resources
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5">
                    <p class="text-muted">
                        plab &copy; All Rights Reserved 2020
                    </p>
                </div>
            </div>
        </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    user() {
      return false;
      // return this.$store.state.user;
    },
    plabster() {
      return false;
      // return this.$router.currentRoute.matched[0].path === '/plabster';
    },
  },
};
</script>
