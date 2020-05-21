import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment-timezone';
import App from './App.vue';
import router from './router';
import store from './store';


import '@/components/layouts';
// adding the styling files for bootstrap
import './assets/scss/custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueTypedJs);
Vue.use(VueAxios, axios);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment; } });

new Vue({
  el: '#app',
  moment,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
