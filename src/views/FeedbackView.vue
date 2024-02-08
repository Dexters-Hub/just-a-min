<script setup>
import TextSection from '@/components/TextSection.vue'
import BorderButton from '@/components/BorderButton.vue';
import MetricCard from '@/components/MetricCard.vue';
import { RouterLink } from 'vue-router'

</script>

<template>
    <TextSection 
        title="You did well 🥳"
        />

    <div class="flex justify-around w-1/3 space-x-8">
        <MetricCard 
        text="WPM"
        value=65
        />
        <MetricCard 
            text="Errors"
            value=3
            />
    </div>

    <RouterLink to="/"><BorderButton class="mt-8" cta="Restart"/></RouterLink>
</template>
