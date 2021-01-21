import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/main.css';

import { createVueCounterPlugin } from './';

const VueCounterPlugin = createVueCounterPlugin();

createApp(App).use(VueCounterPlugin).mount('#app');
