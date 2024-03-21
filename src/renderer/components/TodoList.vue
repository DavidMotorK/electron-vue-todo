<script setup>
import Todo from './Todo.vue';

defineProps({
    todos: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <Todo v-for="(todo, index) in todos" :todo="todo" :key="index" />
</template>