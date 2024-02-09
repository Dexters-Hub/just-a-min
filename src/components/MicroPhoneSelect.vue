<!-- MicroPhoneSelect.vue -->

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';
import { useMicrophoneSelection } from '@/composables/useMicrophoneSelection';

const { selectedMic, availableMicrophones, error, state, getMicrophonePermission } = useMicrophoneSelection();

onMounted(async () => {
    try {
        await getMicrophonePermission();
        const devices = await RecordPlugin.getAvailableAudioDevices();
        availableMicrophones.value = devices;
        selectedMic.value = devices.length > 0 ? devices[0].deviceId : '';
    } catch (e) {
        error.value = 'Error fetching microphones.';
        state.value = 'error';
    }
});
</script>

<template>
    <div>
      <select v-model="selectedMic" class="m-8">
        <option value="" disabled>Select mic</option>
        <option v-for="mic in availableMicrophones" :key="mic.deviceId" :value="mic.deviceId">
          {{ mic.label || mic.deviceId }}
        </option>
      </select>
    </div>
  </template>
