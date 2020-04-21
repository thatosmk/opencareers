import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';
import App from './App.vue';
import router from './router';
import store from './store';

// adding the styling files for bootstrap
import './assets/scss/custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTypedJs);

Vue.component('main-navbar', {
  template: `
    <!-- navbar -->
    <b-navbar toggleable="lg" type="light" variant="light">
       <div class="container">
        <b-navbar-brand href="/" class="font-weight-bold">threaded</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Center aligned nav items -->
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item :to="{path: 'get-started' }">
                    blog
                </b-nav-item>
                <b-nav-item :to="{path: 'get-started' }" class="active">
                    Get Started
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        </div>
    </b-navbar>
  `,
});
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
