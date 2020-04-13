<template>
  <div id="app">
    <nav id="nav">
        <b-navbar toggleable="lg" type="light" variant="light">
           <div class="container">
            <b-navbar-brand href="#" class="font-weight-bold">plab</b-navbar-brand>

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
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
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

                    <b-nav-item :to="{path: 'about' }">
                        Log in
                    </b-nav-item>
                    <b-nav-item :to="{path: 'about' }" class="active">
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
    <footer class="container">
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
    </footer>
  </div>
</template>
