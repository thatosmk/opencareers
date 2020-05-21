import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import Todo from './models/todo';
import universities from './modules/universities';
import faculties from './modules/faculties';
import programmes from './modules/programmes';
import careers from './modules/careers';
import files from './modules/files';
import posts from './modules/posts';
import dashboard from './modules/dashboard';
import todos from './modules/todos';
import users from './modules/users';
import http from '@/store/http';

Vue.use(Vuex);
const db = new VuexORM.Database();
db.register(Todo, todos);

VuexORM.use(VuexORMAxios, {
  axios,
  db,
  http,
});
const ORMPlugin = VuexORM.install(db);

const store = new Vuex.Store({
  plugins: [ORMPlugin],
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
