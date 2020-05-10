import Vue from 'vue';

Vue.component('add-todo', {
  template: `
    <div>
        <b-modal id="modal-add-todo"
            centered
            title="Add a todo item"
            size="xl"
            hide-header
            hide-footer
        >
            <div class="py-2 text-center">
                <h2 class="pb-4">
                    Add a task to do
                </h2>
            </div>
            <div class="mx-5 pb-5">
                <form @submit.prevent="addTodo" ref="form">
                    <b-form-group>
                        <b-form-input
                            required
                            type="text"
                            placeholder="e.g. make a phone call"
                            size="lg"
                            name="todo[title]"
                            class="py-4"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea
                            placeholder="(## Description, ## how to get started, ## salary, ## links)"
                            debounce="300"
                            size="lg"
                            rows="8"
                            name="todo[description]"
                            class="py-2"
                        >
                        </b-form-textarea>
                    </b-form-group>
                    <b-button
                        variant="success"
                        @click="$bvModal.hide('modal-add-todo')"
                        type="submit"
                        size="lg"
                    >
                        Submit
                    </b-button>
                </form>
            </div>
        </b-modal>
    </div>
  `,
  methods: {
    async addTodo() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch('todos/add', formData);
      this.$router.push('/users/dashboard');
    },
  },
});

Vue.component('todos-index', {
  props: ['todos'],
  template: `
    <div class="py-4">
    <b-list-group>
        <b-list-group-item
            v-for="todo in todos" 
            :key="todo.id"
            class="mb-2 pl-4"
        >
                <form @submit.prevent="updateTodo" ref="form">
                    <b-form-checkbox
                          id="checkbox-1"
                          v-model="status"
                          name="checkbox-1"
                          value="accepted"
                          unchecked-value="not_accepted"
                        >
                        {{ todo.title }}
                    </b-form-checkbox>
                </form>
        </b-list-group-item>
    </b-list-group>
    </div>
  `,
  methods: {
    getImageUrl(imageId) {
      return `https://api.threaded.co.za/${imageId}`;
    },
  },
});
