import Vue from 'vue';
import VueCookies from 'vue-cookies';
import { Model } from '@vuex-orm/core';

Vue.use(VueCookies);

export default class Todo extends Model {
  static entity = 'todos';

  static fields() {
    return {
      id: this.number(0),
      title: this.string(''),
      slug: this.string(''),
      description: this.string(''),
      created_at: this.string(''),
      deadline: this.string(''),
      completed: this.boolean(false),
      user_id: this.number(0),
      assignee_id: this.number(0),
      // assignee: this.belongsTo(User, 'assignee_id'),
    };
  }

  static apiConfig = {
    actions: {
      fetch: {
        method: 'get',
        url: '/todos',
      },
    },
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      accept: 'application/json',
      Authorization: Vue.$cookies.get('user-token'),
    },
    baseURL: 'http://localhost:3000/api/v1',
  }
}
