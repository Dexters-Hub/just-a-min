// useControl.js
import { ref } from 'vue';

export default function useControl(initialTime, onControlChange) {
  const isPlaying = ref(false);
  let interval;

  const control = (action) => {
    if (action === 'start') {
      if (!isPlaying.value) {
        isPlaying.value = true;
        interval = setInterval(() => {
          onControlChange('tick');
        }, 1000);
      }
    } else if (action === 'pause') {
      if (isPlaying.value) {
        isPlaying.value = false;
        clearInterval(interval);
      }
    } else if (action === 'restart') {
      control('pause');
      onControlChange('restart');
      control('start');
    }
  };

  return {
    isPlaying,
    control,
  };
}
