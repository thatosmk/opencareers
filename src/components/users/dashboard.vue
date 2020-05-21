<template>
    <div>
        <div class="py-2">
            <h4 class="text-center font-weight-light">
                Hi, {{ user.full_name }}
            </h4>
        </div>
        <div class="py-5">
            <div class="row">
                <section class="col-xs-12 col-md-6">
                    <div class="mx-2 canvas">
                        <h6>
                            <span class="mr-auto">
                                To-dos
                            </span>
                            <b-button
                                class="ml-auto"
                                v-b-modal.modal-add-todo
                                variant="light"
                            >
                            <b-icon-plus>
                            </b-icon-plus>
                            new</b-button>
                            <hr/>
                        </h6>
                        <todos-index :todos="todos" @updatedTodo="editTodo" />
                        <add-todo :ids="mentees" />
                    </div>
                </section>
                <section class="col-xs-12 col-md-6">
                    <div class="mx-2 canvas">
                        <h6>
                            Automatic check-ins
                            <hr/>
                        </h6>
                        <checks-index :checks="checkIns" />
                    </div>
                </section>
            </div>
        </div>
        <div class="py-2">
            <div class="mx-2 canvas">
                <h6>
                    <b-button
                        class="ml-auto"
                        v-b-modal.modal-add-post
                        variant="light"
                    >
                    <b-icon-plus>
                    </b-icon-plus>
                    new post
                    </b-button>
                    <hr/>
                </h6>
                <posts-index :posts="posts" />
                <add-post />
            </div>
        </div>
        <div class="py-4">
            <div class="mx-2 canvas">
                <h6>
                    Schedule, Group Chats
                </h6>
                <p class="lead">
                    Coming soon!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import '@/components/todos/index';
import Todo from '@/store/models/todo';

export default {
  name: 'Show',
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    mentees() {
      return this.$store.state.users.user.mentees;
    },
    todos() {
      return Todo.query().orderBy('id').get();
    },
    checkIns() {
      return this.$store.state.dashboard.checkIns;
    },
    posts() {
      return this.$store.state.posts.all;
    },
  },
  created() {
    this.$store.dispatch('dashboard/loadCheckIns');
    this.$store.dispatch('posts/loadPosts');
    Todo.api().fetch();
  },
  methods: {
    editTodo(msg) {
      console.log(msg);
    },
  },
};
</script>
