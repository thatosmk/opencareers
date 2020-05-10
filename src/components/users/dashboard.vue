<template>
    <div>
        <div class="py-2">
            <h1 class="text-center font-weight-light">
                Hi, {{ user.email }}
            </h1>
        </div>
        <div class="py-5">
            <div class="row">
                <section class="col-xs-12 col-md-6">
                    <div class="mx-2 canvas">
                        <h4>
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
                        </h4>
                        <todos-index :todos="todos" />
                        <add-todo />
                    </div>
                </section>
                <section class="col-xs-12 col-md-6">
                    <div class="mx-2 canvas">
                        <h4>
                            Scheduled check-ins
                            <hr/>
                        </h4>
                        <checks-index :checks="checkIns" />
                    </div>
                </section>
            </div>
        </div>
        <div class="py-2">
            <div class="mx-2 canvas">
                <h4>
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
                </h4>
                <posts-index :posts="posts" />
                <add-post />
            </div>
        </div>
        <div class="py-4">
            <h4>
                Schedule
            </h4>
        </div>
        <div class="py-4">
            <h4>
                Check-ins
            </h4>
        </div>
        <div class="py-4">
            <h4>
                Group Chat
            </h4>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import '@/components/todos/index';

export default {
  name: 'Show',
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    todos() {
      return this.$store.state.todos.all;
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
    this.$store.dispatch('todos/loadTodos');
    this.$store.dispatch('posts/loadPosts');
  },
};
</script>
