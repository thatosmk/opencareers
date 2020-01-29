<template>
  <div id="app">
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="light">
           <div class="container">
            <b-navbar-brand href="#">Book.me</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Looking for?" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item :to="{path: 'home' }">
                        Home
                    </b-nav-item>
                    <b-nav-item :to="{path: 'about' }">
                        About
                    </b-nav-item>
                    <b-nav-item :to="{path: 'about' }">
                        Log in
                    </b-nav-item>
                    <b-nav-item :to="{path: 'about' }" class="active">
                        Sign up for free
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </div>
        </b-navbar>
    </div>
    <!-- routes will be rendered here -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
