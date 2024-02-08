<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import useControl from '@/composables/useControl';

const props = defineProps({
    initialTime: Number,
    onCountdownEnd: Function,
});

const { isPlaying, control } = useControl(
    props.initialTime,
    (controlAction) => {
        if (controlAction === 'tick') {
            if (countdown.value > 0) {
                countdown.value--;
            } else {
                control('pause');
                if (props.onCountdownEnd) {
                    props.onCountdownEnd();
                }
                control('restart');
            }
        } else if (controlAction === 'restart') {
            countdown.value = props.initialTime;
        }
    }
);

const countdown = ref(props.initialTime);
let mediaRecorder;
let audioChunks = [];

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            audioChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        console.log(audioBlob)
        // Now you can do something with the recorded audio blob,
        // like sending it to the server or playing it back.
        audioChunks = [];
    };

    mediaRecorder.start();
};

const stopRecording = () => {
    if (mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
};

onMounted(() => {
    control('start');
    startRecording();
});

onUnmounted(() => {
    control('pause');
    stopRecording();
    console.log('CountdownTimer component unmounted');
});
</script>

<template>
    <div>
        <p class="text-4xl font-normal ">{{ formatTime(countdown) }}</p>

        <div class="flex justify-center mt-8 space-x-8">
            <button v-if="isPlaying" @click="control('pause')">P</button>
            <button v-else @click="control('start')">S</button>
            <button @click="control('restart')">R</button>
        </div>
    </div>
</template>
