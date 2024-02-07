<script setup>
import BorderButton from '../components/BorderButton.vue';
import TextSection from '../components/TextSection.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <TextSection 
        title="Your Topic"
        subtitle="Tell me about yourself."
        />
      <RouterLink to="/session"><BorderButton cta="Begin"/></RouterLink>
      
</template>
