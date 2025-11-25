<script setup>
import { ref } from 'vue'
import AppNumber from '@/components/AppNumber.vue'
import AppSum from '@/components/AppSum.vue'
import AppCounter from '@/components/AppCounter.vue'
import AppLangSelector from '@/components/AppLangSelector.vue'

const myNumber = ref({ value: 6 })

const numbersForCounter = ref([1, 2, 3, 4, 5])
const updateNumbers = (newNumbers) => {
    numbersForCounter.value = newNumbers
}

const selectedLang = ref('hu')
</script>

<template>
    <AppNumber number="{ value: 10 }" />
    <AppNumber number="myNumber" />
    <AppNumber v-bind:number="{ value: 8 }" />
    <AppNumber :number="myNumber" />

    <hr />

    <!--<AppSum :numbers="5" />-->
    <AppSum :numbers="[1, 2, 3, 4, 5]" />
    <AppSum />
    <AppSum :numbers="[1, {}, 'asd']" />

    <hr />

    <AppCounter :numbers="numbersForCounter" @updated="updateNumbers" />

    <hr />

    <AppLangSelector v-model="selectedLang" />
    {{ selectedLang }}
</template>
