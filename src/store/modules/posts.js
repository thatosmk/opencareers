/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);
const API_URL = 'http://localhost:3000';
// initial state
const state = {
  all: [],
  comments: [],
  post: {},
  articles: {},
};

// getters
const getters = {
  posts(state) {
    return state.all;
  },
};
// mutations
const mutations = {
  setPosts(state, posts) {
    state.all = posts;
  },
  setArticles(state, articles) {
    state.articles = articles;
  },
  setPost(state, post) {
    state.post = post;
  },
  addPost(state, post) {
    state.all.push(post);
  },
  setComments(state, comments) {
    state.comments = comments;
  },
  addComment(state, comment) {
    state.comments.push(comment);
  },
};
// actions
const actions = {
  async loadPosts({ commit }) {
    fetch(`${API_URL}/api/v1/posts.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((posts) => {
        commit('setPosts', posts);
      }).catch();
  },
  async loadArticles({ commit }) {
    fetch(`${API_URL}/api/v1/articles.json`, {
      headers: {
        accept: 'application/json',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((articles) => {
        commit('setArticles', articles);
      }).catch();
  },
  async loadPost({ commit }, id) {
    fetch(`${API_URL}/api/v1/posts/${id}.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((post) => {
        commit('setPost', post);
      }).catch();
  },
  async createPost({ commit }, formData) {
    fetch(`${API_URL}/api/v1/posts.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'post',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'post',
      body: formData,
    }).then(response => response.json())
      .then((post) => {
        commit('addPost', post);
      }).catch();
  },
  async createComment({ commit }, [formData, id]) {
    fetch(`${API_URL}/api/v1/posts/${id}/comments.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'post',
      body: formData,
    }).then(response => response.json())
      .then((comment) => {
        commit('addComment', comment);
      }).catch();
  },
  async loadComments({ commit }, id) {
    fetch(`${API_URL}/api/v1/posts/${id}/comments.json`, {
      headers: {
        accept: 'application/json',
        Authorization: Vue.$cookies.get('user-token'),
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'get',
    }).then(response => response.json())
      .then((comments) => {
        commit('setComments', comments);
      }).catch();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
