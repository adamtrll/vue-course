<template>
    <div class="app-card">
        <div class="app-card-body">
            <!-- Slot is a placeholder for the content of the component filled by the parent -->
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
/* Scoped styles will only apply to this component */
.app-card {
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 0.25rem;
}

.app-card-body {
    padding: 1rem;
}
</style>
