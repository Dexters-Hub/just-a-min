<script setup>
defineProps({
  cta: {
    type: String,
    required: true
  },
});

</script>

<template>
    <div>
        <button class="px-4 py-2 border border-black rounded-md">
            {{ cta }}
        </button>
    </div>
</template>