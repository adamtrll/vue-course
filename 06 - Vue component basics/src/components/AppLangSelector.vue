<script setup>
// https://vuejs.org/guide/components/v-model

// Custom v-model can be defined using the combination of modelValue prop and update:modelValue event
// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

// defineModel() compiler macro for defining the custom v-model
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
    <!--
        Hanlding custom v-model manually by:
        - emitting the update:modelValue event when the select value changes
        - binding the selected attribute on the option based on the modelValue prop

    <select  @change="emit('update:modelValue', $event.target.value)">
        <option v-for="lang in langs" :key="lang.code" :value="lang.code" :selected="lang.code === modelValue">
            {{ lang.name }}
        </option>
    </select>
    -->

    <!-- Bindig select input to the custom model created using the defineModel() -->
    <select v-model="selectedLang">
        <option v-for="lang in langs" :key="lang.code" :value="lang.code">
            {{ lang.name }}
        </option>
    </select>
</template>
