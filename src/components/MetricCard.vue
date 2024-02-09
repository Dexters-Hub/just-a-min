<script setup lang="ts">
defineProps({
  value: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

</script>

<template>
    <div class="flex flex-col items-center w-48 p-8 border border-black rounded-md">
        <h1 class="text-6xl font-normal">
                {{ value }}
        </h1>
        <h1 class="m-2 text-3xl font-light">
                {{ text }}
        </h1>
    </div>
</template>