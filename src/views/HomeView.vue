<script setup>
import BorderButton from '../components/BorderButton.vue';
import TextSection from '../components/TextSection.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <TextSection 
        title="Select your Topic" 
        subtitle="To play Just a Minute you must speak for a minute on a given subject. If you hesitate, repeat yourself, or deviate"
      />
      <RouterLink to="/topic"><BorderButton cta="Start"/></RouterLink>
      
</template>
