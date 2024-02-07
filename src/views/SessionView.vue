<script setup>
import TextSection from '@/components/TextSection.vue'
import BorderButton from '@/components/BorderButton.vue';
import { RouterLink } from 'vue-router'

</script>

<template>
    <TextSection 
        title="Time left"
        />
    
        <RouterLink to="/feedback"><BorderButton cta="End"/></RouterLink>
</template>
