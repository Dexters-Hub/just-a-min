<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
})
</script>

<template>
  <h1 class="text-4xl font-medium">{{ title }}</h1>
  <p class="w-1/3 m-12 text-sm font-light text-center text-gray-500">
    {{ subtitle }}
  </p>
</template>
