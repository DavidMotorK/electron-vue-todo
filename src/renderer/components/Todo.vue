<script setup>
defineProps({
    todo: {
        type: Object,
        default: {
            title: ''
        }
    }
})
</script>

<template>
    <article>
        <p>
            {{ todo.title }}
        </p>
    </article>
</template>