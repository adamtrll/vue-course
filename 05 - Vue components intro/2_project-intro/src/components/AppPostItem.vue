<script setup>
// Define parameters for the component
defineProps(['post'])
</script>

<template>
    <!-- Using global ui component -->
    <ui-card>
        <h5>{{ post.title }}</h5>
        <p>{{ post.body }}</p>
    </ui-card>
</template>
