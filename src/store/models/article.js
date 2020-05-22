import { Model } from '@vuex-orm/core';


export default class Article extends Model {
  static entity = 'articles';

  static fields() {
    return {
      id: this.number(0),
      title: this.string(''),
      slug: this.string(''),
      body: this.string(''),
      created_at: this.string(''),
    };
  }

  static apiConfig = {
    actions: {
      fetch: {
        method: 'get',
        url: '/articles',
      },
    },
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      accept: 'application/json',
    },
    baseURL: 'http://localhost:3000/api/v1',
  }
}
