import { createApp } from 'vue';
import router from './lib/router';
import store from './lib/store';
import '../src/assets/style.css';

const app = createApp({});
app.use(router);
app.use(store);
app.mount('#app');
