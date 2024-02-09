// useControl.js
import { ref } from 'vue';

export default function useControl(initialTime: number, onControlChange: { (controlAction: string): void; (arg0: string): void; }) {
  const isPlaying = ref(false);
  let interval: number;

  const control = (action: string) => {
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
