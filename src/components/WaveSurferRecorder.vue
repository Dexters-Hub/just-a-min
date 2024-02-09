<template>
  <div class="w-full m-8">
    <div id="mic" style="border: 1px solid #ddd; border-radius: 4px; margin-top: 1rem"></div>

    <!-- <div id="recordings" style="margin: 1rem 0"></div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';

const wavesurfer = ref<WaveSurfer | null>(null);
const record = ref<RecordPlugin | null>(null);

const createWaveSurfer = (): void => {
  if (wavesurfer.value) {
    wavesurfer.value.destroy();
  }

  wavesurfer.value = WaveSurfer.create({
    container: '#mic',
    waveColor: '#0E90E8',
    progressColor: '#0E90E8',
  });

  record.value = wavesurfer.value?.registerPlugin(
    RecordPlugin.create({ renderRecordedAudio: true })
  );

  record.value?.on('record-end', (blob: Blob) => {
    console.log('Recording ended');
    console.log(blob);
  
  });
};

onMounted(async () => {
  createWaveSurfer();
  record.value?.startRecording().then(() => {
    console.log('Recording started');
  });
});

onUnmounted(() => {
  if (wavesurfer.value) {
    wavesurfer.value.destroy();
  }
});
</script>

<style scoped>
button {
  min-width: 5rem;
  margin: 1rem 1rem 1rem 0;
}
</style>