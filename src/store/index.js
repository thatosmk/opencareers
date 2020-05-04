import Vue from 'vue';
import Vuex from 'vuex';
import universities from './modules/universities';
import faculties from './modules/faculties';
import programmes from './modules/programmes';
import careers from './modules/careers';
import posts from './modules/posts';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    universities,
    faculties,
    programmes,
    careers,
    posts,
  },
});

export default store;
