<template>
    <div class="app-card">
        <div class="app-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.app-card {
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 0.25rem;
}

.app-card-body {
    padding: 1rem;
}
</style>
