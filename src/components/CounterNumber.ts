import { ref, defineComponent, h } from 'vue';
import { useCounter } from '@/composables/useCounter';

const props = {
  from: {
    type: [Number, String],
    default: 0,
  },
  to: {
    type: [Number, String],
    required: true,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1000, // Duration of animation in ms
  },
  easing: {
    type: String,
    default: 'easeInOutQuad',
  },
  delay: {
    type: Number,
    default: 0, // Delay the animation in ms
  },
};

export const CounterNumber = defineComponent({
  name: 'Awesome',
  props,
  setup(props, ctx) {
    const { count } = useCounter(props, ctx.emit);

    return () =>
      h(
        'span',
        {
          class: 'counter-number',
        },
        count.value,
      );
  },
});
