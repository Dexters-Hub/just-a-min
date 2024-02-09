<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import useControl from '@/composables/useControl';
import WaveSurferRecorder from '@/components/WaveSurferRecorder.vue';

const props = defineProps({
    initialTime: {
        type: Number,
        required: true,
    },
    onCountdownEnd: {
        type: Function,
    },
});

const { isPlaying, control } = useControl(
    props.initialTime,
    (controlAction: string) => {
        if (controlAction === 'tick') {
            if (countdown.value > 0) {
                countdown.value--;
            } else {
                control('pause');
                if (props.onCountdownEnd) {
                    props.onCountdownEnd();
                }
            }
        } else if (controlAction === 'restart') {
            countdown.value = props.initialTime;
        }
    }
);

const countdown = ref(props.initialTime);

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

onMounted(() => {
    control('start');
});

onUnmounted(() => {
    control('pause');
    console.log('CountdownTimer component unmounted');
});
</script>

<template>
    <div class="flex flex-col justify-center items-center w-1/2">
        <p class="text-4xl font-normal ">{{ formatTime(countdown) }}</p>

        <WaveSurferRecorder />

        <div class="flex justify-center mt-8 space-x-8">
            <button v-if="isPlaying" @click="control('pause')">P</button>
            <button v-else @click="control('start')">S</button>
            <button @click="control('restart')">R</button>
        </div>
    </div>
</template>
