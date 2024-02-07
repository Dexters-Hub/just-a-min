<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TextSection from './components/TextSection.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen p-4 mx-8">

      <TextSection 
        title="Select your Topic" 
        subtitle="To play Just a Minute you must speak for a minute on a given subject. If you hesitate, repeat yourself, or deviate"
      />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </main>
</template>

<style scoped>
</style>
