<script setup lang="ts">
import TextSection from '@/components/TextSection.vue'
import BorderButton from '@/components/BorderButton.vue';
import MetricCard from '@/components/MetricCard.vue';
import { RouterLink } from 'vue-router'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomWPM = getRandomInt(10, 30);
const randomErrors = getRandomInt(0, 10);

</script>

<template>
    <TextSection 
        title="You did well 🥳"
    />

    <div class="flex justify-around w-1/3 space-x-8">
        <MetricCard 
            text="WPM"
            :value="randomWPM"
        />
        <MetricCard 
            text="Errors"
            :value="randomErrors"
        />
    </div>

    <RouterLink to="/"><BorderButton class="mt-8" cta="Restart"/></RouterLink>
</template>
