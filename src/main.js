import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueObserveVisibility from 'vue-observe-visibility';
import VueTypedJs from 'vue-typed-js';
import Notifications from 'vue-notification';
import App from './App.vue';
import router from './router';
import store from './store';


import '@/components/layouts';
// adding the styling files for bootstrap
import './assets/scss/custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTypedJs);
Vue.use(VueObserveVisibility);
Vue.use(Notifications);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
