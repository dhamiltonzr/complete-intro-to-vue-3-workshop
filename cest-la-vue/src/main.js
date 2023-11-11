import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import {routes} from './router.js';

const app = createApp(App);
const router = createRouter( {
  routes: routes,
  history: createWebHashHistory()
});

app.use(router);
app.mount('#app');
