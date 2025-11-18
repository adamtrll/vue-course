<script setup>
// Define component logic here
// <script setup> - Compile-time syntactic sugar - https://vuejs.org/api/sfc-script-setup.html

// Importing local child component
import AppPostList from '@/components/AppPostList.vue'
</script>

<template>
    <p>Hello from main component</p>
    <!-- Using local child component -->
    <app-post-list />
</template>

<style>
/* https://vuejs.org/api/sfc-spec.html#style */
/* global styles */
/*
h5 {
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    padding: 0;
}
*/
</style>

<style scoped></style>
