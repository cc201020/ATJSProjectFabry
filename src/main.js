import { createApp } from 'vue';
import router from './lib/router';

const app = createApp({});
app.use(router);
app.mount('#app');
