import { ref } from 'vue';

import anime from 'animejs/lib/anime.es.js';

export function useCounter(props: any, emit: any) {
  const count = ref(0);
  const counter = {
    value: props.from,
  };

  anime({
    targets: counter,
    duration: props.duration,
    value: props.to,
    delay: props.delay,
    easing: props.easing || 'linear',
    update: () => {
      count.value = Math.round(counter.value);
    },
  });

  return {
    count,
  };
}
