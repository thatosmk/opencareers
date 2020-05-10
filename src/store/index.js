import Vue from 'vue';
import Vuex from 'vuex';
import universities from './modules/universities';
import faculties from './modules/faculties';
import programmes from './modules/programmes';
import careers from './modules/careers';
import files from './modules/files';
import posts from './modules/posts';
import dashboard from './modules/dashboard';
import todos from './modules/todos';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    universities,
    faculties,
    programmes,
    dashboard,
    careers,
    files,
    posts,
    todos,
    users,
  },
});

export default store;
