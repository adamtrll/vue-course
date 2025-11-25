<script setup>
// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

const selectedLang = defineModel()

const langs = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh', name: 'Chinese' },
    { code: 'hu', name: 'Hungarian' },
]
</script>

<template>
    <!--<select  @change="emit('update:modelValue', $event.target.value)">-->
    <select v-model="selectedLang">
        <!-- :selected="lang.code === modelValue" -->
        <option v-for="lang in langs" :key="lang.code" :value="lang.code">
            {{ lang.name }}
        </option>
    </select>
</template>
