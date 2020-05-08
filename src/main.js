import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';
import Notifications from 'vue-notification';
import App from './App.vue';
import router from './router';


import '@/components/layouts';
// adding the styling files for bootstrap
import './assets/scss/custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueTypedJs);
Vue.use(Notifications);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
