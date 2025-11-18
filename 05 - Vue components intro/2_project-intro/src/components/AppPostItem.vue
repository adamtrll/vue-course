<script setup>
defineProps(['post'])
</script>

<template>
    <ui-card>
        <h5>{{ post.title }}</h5>
        <p>{{ post.body }}</p>
    </ui-card>
</template>
