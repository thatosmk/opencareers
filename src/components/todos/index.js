import Vue from 'vue';

Vue.component('add-todo', {
  props: ['ids'],
  computed: {
    names() {
      const users = [];
      /*
      for (const user of this.ids) {
        const option = {};
      }
       */
      Object.values(this.ids).forEach((value) => {
        const option = {};
        option.value = value.id;
        option.text = value.full_name;
        users.push(option);
      });
      return users;
    },
  },
  template: `
    <div>
        <b-modal id="modal-add-todo"
            centered
            title="Add a todo item"
            size="lg"
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
                    <b-form-group label="add a deadline (optional)">
                        <b-form-input
                            type="date"
                            size="lg"
                            name="todo[deadline]"
                            class="py-4"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea
                            placeholder="add notes"
                            debounce="300"
                            size="lg"
                            rows="8"
                            name="todo[description]"
                            class="py-2"
                        >
                        </b-form-textarea>
                    </b-form-group>
                    <b-form-group label="assign to... (optional)"
                        v-if="ids !== null"
                        >
                        <b-form-select
                            :options="names"
                            size="lg"
                            name="todo[assignee_id]"
                            class="py-4"
                        >
                        </b-form-select>
                    </b-form-group>
                    <b-button
                        variant="success"
                        @click="$bvModal.hide('modal-add-todo')"
                        type="submit"
                        size="lg"
                        block
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
      this.$router.go(0);
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
            <form @submit.prevent="updateTodo" ref="editTodo">
                <div class="row">
                    <b-form-checkbox
                          @change="updateTodoEvent"
                          id="checkbox-1"
                          name="checkbox-1"
                          :aria-label="todo.title"
                          value="false"
                          :class="{ active: todo.completed }"
                          size="lg"
                          unchecked-value="true"
                        >
                        {{ todo.title }}
                    </b-form-checkbox>
                </div>
            </form>
        </b-list-group-item>
    </b-list-group>
    </div>
  `,
  methods: {
    getImageUrl(imageId) {
      return `https://api.threaded.co.za/${imageId}`;
    },
    updateTodoEvent(e) {
      this.$emit('updatedTodo', e);
    },
  },
});
