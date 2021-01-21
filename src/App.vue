<template>
  <h2 class="font-bold text-2xl mb-8 text-gray-600">Vue Counter animation</h2>
  <div
    class="card bg-gray-100 rounded-xl p-8 auto shadow-lg mx-auto w-1/3 text-indigo-400 font-bold text-xl"
  >
    <vue-counter :from="from" :to="to" :duration="3000" :delay="2000" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const from = ref(0);
    const to = ref(640);
    return {
      from,
      to,
    };
  },
});
</script>

<style>
.card {
  max-width: 200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
