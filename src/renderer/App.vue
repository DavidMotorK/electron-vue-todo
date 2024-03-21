<script setup>
import TodoList from "./components/TodoList.vue";
import { onBeforeMount, ref } from "vue";
import { useTodosStore } from "../stores/todos";
import { storeToRefs } from "pinia";

const todosStore = useTodosStore();

const { todos } = storeToRefs(todosStore);
const { getTodos, addTodo } = todosStore;

const newTodo = ref('');

const sendNotification = (title, body) => {
  new Notification(title, { body });
}

const handleAddTodo = async (evt) => {
  evt.preventDefault();

  const data = await addTodo({
    title: newTodo.value
  });

  todos.value.unshift(data);

  sendNotification('New TODO Added', `'${newTodo.value}' has been added`);

  newTodo.value = '';
}

onBeforeMount(async () => {
  await getTodos();
})
</script>

<template>
  <div>
    <h1>Hello world</h1>
    <TodoList :todos="todos" />
    <form @submit="handleAddTodo">
      <input type="text" placeholder="New todo" v-model="newTodo" />
      <button>Add Todo</button>
    </form>
  </div>
</template>