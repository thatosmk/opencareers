import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import Todo from './models/todo';
import Article from './models/article';
import universities from './modules/universities';
import faculties from './modules/faculties';
import programmes from './modules/programmes';
import careers from './modules/careers';
import files from './modules/files';
import posts from './modules/posts';
import dashboard from './modules/dashboard';
import todos from './modules/todos';
import articles from './modules/articles';
import users from './modules/users';

Vue.use(Vuex);

const db = new VuexORM.Database();
db.register(Todo, todos);
db.register(Article, articles);

VuexORM.use(VuexORMAxios, {
  axios,
  db,
});

const ORMPlugin = VuexORM.install(db);

const store = new Vuex.Store({
  plugins: [ORMPlugin],
  modules: {
    universities,
    faculties,
    articles,
    programmes,
    dashboard,
    careers,
    files,
    posts,
    users,
  },
});

export default store;
