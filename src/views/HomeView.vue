<!-- HomeView.vue -->
<script setup lang="ts">
import { onMounted, watchEffect } from 'vue';
import { useMicrophoneSelection } from '@/composables/useMicrophoneSelection';
import BorderButton from '@/components/BorderButton.vue';
import MicroPhoneSelect from '@/components/MicroPhoneSelect.vue';
import TextSection from '@/components/TextSection.vue';
import { RouterLink } from 'vue-router';

const {
  error,
  state,
  selectedMic,
  availableMicrophones,
  getMicrophonePermission
} = useMicrophoneSelection();

const isMicrophoneSelected = () => state.value === 'success';

onMounted(async () => {
  try {
    await getMicrophonePermission();
    // Now the state has been updated after mounting
    console.log('state after mounting:', state.value);
  } catch (e) {
    console.error('Error during mounting:', e);
  }
});

// Watch for changes to reactive values
watchEffect(() => {
  console.log('state:', state.value);
  console.log('error:', error.value);
  console.log('selectedMic:', selectedMic.value);
  console.log('availableMicrophones:', availableMicrophones.value);
});
</script>

<template>

    <TextSection
      title="Select your Topic"
      subtitle="To play Just a Minute you must speak for a minute on a given subject. If you hesitate, repeat yourself, or deviate, it's game over. Just kidding! Restart the game."
    />
    <MicroPhoneSelect />

    <div v-if="state === 'error'">{{ error }}</div>

    <RouterLink to="/topic" v-if="isMicrophoneSelected()">
      <BorderButton cta="Start"/>
    </RouterLink>

</template>
