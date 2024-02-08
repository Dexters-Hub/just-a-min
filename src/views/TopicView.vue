<script setup>
import BorderButton from '@/components/BorderButton.vue';
import TextSection from '@/components/TextSection.vue'
import { RouterLink } from 'vue-router'
import { useTopic } from '@/composables/useTopic';



const { topicSubtitle,
        updateRandomTopic
      } = useTopic();

</script>

<template>
    <TextSection 
        title="Your Topic"
        :subtitle="topicSubtitle"
        />
      <RouterLink to="/session"><BorderButton cta="Begin"/></RouterLink>
      <BorderButton @click="updateRandomTopic" class="mt-8" cta="Random"/>
      
</template>
