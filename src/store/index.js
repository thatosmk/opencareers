import Vue from 'vue';
import Vuex from 'vuex';
import universities from './modules/universities';
import faculties from './modules/faculties';
import programmes from './modules/programmes';
import careers from './modules/careers';
import jobs from './modules/jobs';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    universities,
    faculties,
    programmes,
    careers,
    jobs,
  },
});

export default store;
