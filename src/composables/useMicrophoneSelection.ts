// useMicrophoneSelection.ts
import { ref } from 'vue';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';

export function useMicrophoneSelection() {
    const selectedMic = ref<string>('');
    const availableMicrophones = ref<Array<{ deviceId: string; label?: string }>>([]);
    const error = ref<string>('');
    const state = ref<'loading' | 'error' | 'success'>('loading');

    const getMicrophonePermission = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            state.value = 'success';
        } catch (e) {
            error.value = 'Error accessing microphone. Please grant permission.';
            state.value = 'error';
            throw e;
        }
    };

    return {
        selectedMic,
        availableMicrophones,
        error,
        state,
        getMicrophonePermission,
    };
}
