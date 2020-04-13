<template>
    <div class="container py-4">
        <h1 class="h1">Manage your Clients</h1>
        <b-alert :show="loading" variant="info">Loading...</b-alert>
        <b-row>
            <b-col>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Last Updated</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr v-for="todo in todos.data" :key="todo.id">
                            <td>{{ todo.id }}</td>
                            <td>{{ todo.attributes.title }}</td>
                            <td>{{ todo.attributes.description }}</td>
                            <td>{{ todo.attributes.position }}</td>
                            <td>{{ todo.attributes.updated_at }}</td>
                            <td class="text-right">
                            <a href="#" @click.prevent="populateTodoToEdit(todo)">Edit</a>
                                -
                            <a href="#" @click.prevent="deleteTodo(todo.id)">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
        <div>
            <b-card :title="(model.id ? 'Edit todo ID#' + model.id : 'New todo')">
                <form @submit.prevent="saveTodo">
                    <b-form-group label="Title">
                        <b-form-input type="text" v-model="model.title"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Description">
                        <b-form-input type="text" v-model="model.description"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Position">
                        <b-form-input type="number" v-model="model.position"></b-form-input>
                    </b-form-group>
                    <div>
                        <b-btn type="submit" variant="success">Save Todo</b-btn>
                    </div>
                </form>
            </b-card>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      loading: false,
      todos: [],
      model: {},
    };
  },
  async created() {
    this.refreshTodos();
  },
  methods: {
    async refreshTodos() {
      this.loading = true;
      this.todos = await api.getTodos();
      this.loading = false;
    },
    async populateTodoToEdit(todo) {
      this.model = Object.assign({}, todo);
    },
    async saveTodo() {
      if (this.model.id) {
        await api.updateTodo(this.model.id, this.model);
      } else {
        await api.createTodo(this.model);
      }
      this.model = {}; // reset form
      await this.refreshTodos();
    },
    async deleteTodo(id) {
      // if (confirm('Are you sure you want to delete this Todo?')) {
      // if we are editing a Todo  we deleted,  remove it  from the form
      if (this.model.id === id) {
        this.model = {};
      }
      await api.deleteTodo(id);
      await this.refreshTodos();
    },
  },
};
</script>
