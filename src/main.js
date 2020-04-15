import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';
import App from './App.vue';
import router from './router';
import store from './store/index';

// adding the styling files for bootstrap
import './assets/scss/custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTypedJs);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
